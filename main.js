import Express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import browserSync from 'browser-sync'

const bs = browserSync.create()
const PORT = 3000
//set the view engine to ejs

const app = Express()
app.set('view engine', 'ejs')
const __dirname = path.dirname(fileURLToPath(import.meta.url)) //connect the views folder
app.use(Express.static(path.join(__dirname, 'src', 'sass'))) //connect the sass folder
app.use(Express.static(path.join(__dirname, 'src', 'assets', 'images'))) //connect the images folder
app.use(Express.static(path.join(__dirname, 'src', 'assets', 'js'))) //connect the js folder
app.use(Express.static(path.join(__dirname, 'src', 'assets', 'svg')))
app.use(Express.static(path.join(__dirname, 'src', 'css'))) //connect the svg folder

//render the home page
app.get('/', (req, res) => {
  res.render('index.ejs')
})

//render the dashboard page
app.get('/dashboard', (req, res) => {
  res.render('root.ejs')
})

app.get('/parent', (req, res) => {
  res.render('parent/parent.ejs')
})

app.get('/teacher', (req, res) => {
  res.render('teacher/teacher.ejs')
})

app.get('/main/:file', function (req, res) {
  res.sendFile(path.join(__dirname, 'views/main', req.params.file))
})

app.get('/teacher/main/:file', function (req, res) {
  res.sendFile(path.join(__dirname, 'views/teacher/main', req.params.file))
})

app.listen(PORT, () => {
  console.log('Server running on port 3000' + ' ' + 'http://localhost:3000/')
  bs.init({
    proxy: `localhost:${PORT}`,
    open: false,
    files: ['./**/*.{html,js,css}'],
  })
})
