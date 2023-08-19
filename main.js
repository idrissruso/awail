import express from 'express'
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

const secret = process.env.SESSION_SECRET
const url = process.env.MONGODB_URI
console.log(url)

const bs = browserSync.create()
const PORT = 3000

const app = express()

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
app.use(express.static(path.join(__dirname, 'src', 'assets', 'svg')))
app.use(express.static(path.join(__dirname, 'src', 'css')))

//body parser
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(cookieParser())

app.use(flash())

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

import './config/passport.js'

//routes
app.use('/', webRoutes)
app.use('/api', apiRoutes)

//ajax
app.get('/main/:file', function (req, res) {
  res.sendFile(path.join(__dirname, 'views/main', req.params.file))
})

app.get('/teacher/main/:file', function (req, res) {
  res.sendFile(path.join(__dirname, 'views/teacher/main', req.params.file))
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
