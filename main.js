import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import browserSync from 'browser-sync'
import webRoutes from './web/index.js'
import apiRoutes from './api/index.js'
import mongoose from 'mongoose'

const bs = browserSync.create()
const PORT = 8000

const app = express()
app.set('view engine', 'ejs')
const __dirname = path.dirname(fileURLToPath(import.meta.url))
app.use(express.static(path.join(__dirname, 'src', 'sass')))
app.use(express.static(path.join(__dirname, 'src', 'assets', 'images')))
app.use(express.static(path.join(__dirname, 'src', 'assets', 'js')))
app.use(express.static(path.join(__dirname, 'src', 'assets', 'svg')))
app.use(express.static(path.join(__dirname, 'src', 'css')))

app.use('/', webRoutes)
app.use('/api', apiRoutes)

app.get('/main/:file', function (req, res) {
  res.sendFile(path.join(__dirname, 'views/main', req.params.file))
})

app.get('/teacher/main/:file', function (req, res) {
  res.sendFile(path.join(__dirname, 'views/teacher/main', req.params.file))
})

mongoose
  .connect('mongodb://127.0.0.1:27017/awail') // Removed extra slash before 'awail'
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
