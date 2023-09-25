import express, { json } from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import browserSync from 'browser-sync'
import webRoutes from './web/index.js'
import apiRoutes from './api/index.js'
import mongoose from 'mongoose'
import session from 'express-session'
import MongoStore from 'connect-mongo'
import passport from 'passport'
import 'dotenv/config'
import flash from 'connect-flash'
import cookieParser from 'cookie-parser'
import getUserById from './utils/getUSer.js'
import './config/passport.js'
import cors from 'cors'

const secret = process.env.SESSION_SECRET
const url = process.env.MONGODB_URI

const bs = browserSync.create()
const PORT = 3000

const app = express()

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  if (req.header('Access-Control-Request-Headers')) {
    res.setHeader(
      'Access-Control-Allow-Headers',
      req.header('Access-Control-Request-Headers')
    )
  }
  next()
})

//connect to db
mongoose
  .connect(url)
  .then(() => {
    console.log('Connected to the Database successfully')
    app.listen(PORT, () => {
      console.log(
        `Server running on port ${PORT}` + ' ' + `http://localhost:${PORT}/`
      )
      bs.init({
        proxy: `localhost:${PORT}`,
        open: false,
        files: ['./**/*.{html,js,css}'],
      })
    })
  })
  .catch((err) => {
    console.log(err)
  })

//view engine
app.set('view engine', 'ejs')
const __dirname = path.dirname(fileURLToPath(import.meta.url))

//static files
app.use(express.static(path.join(__dirname, 'src', 'sass')))
app.use(express.static(path.join(__dirname, 'src', 'assets', 'images')))
app.use(express.static(path.join(__dirname, 'src', 'assets', 'js')))
app.use(express.static(path.join(__dirname, 'src', 'assets', 'js', 'Teacher')))
app.use(express.static(path.join(__dirname, 'src', 'assets', 'svg')))
app.use(express.static(path.join(__dirname, 'src', 'css')))
app.use(express.static(path.join(__dirname, 'translations')))

//body parser

app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: true }))

app.use(cookieParser())

app.use(flash())

//cors

//session config
app.use(
  session({
    secret: secret,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
      client: mongoose.connection.getClient(),
    }),
    cookie: {
      maxAge: 1000 * 60 * 60, // 1 hour
    },
  })
)

app.use(passport.initialize())
app.use(passport.session())

//routes
app.use('/', webRoutes)
app.use('/api', apiRoutes)

//ajax

app.get('/main/:file', async function (req, res) {
  const filePath = path.join(__dirname, 'views/main', req.params.file)
  const user = await getUserById(req.user?.roleData, req.user?.role)
  res.render(filePath, { admin: user, loggedInUser: req.user })
})
//app.get('/main/:file', function (req, res) {
//  res.sendFile(path.join(__dirname, 'views/main', req.params.file))
//})

app.get('/teacher/main/:file', async function (req, res) {
  const filePath = path.join(__dirname, 'views/teacher/main', req.params.file)
  const user = await getUserById(req.user?.roleData, req.user?.role)
  res.render(filePath, {
    loggedInTeacher: user,
    teacher: req.user,
    messages: 'merhaba',
  })
})

//error handling
app.use((err, req, res, next) => {
  res.json({
    message: 'An error occurred',
    url: req.url,
    method: req.method,
    errorStack: err.stack,
    errorStatus: err.status,
    errorStatusCode: err.statusCode,
    errorMessage: err.message,
    errorName: err.name,
  })
})

// functions
