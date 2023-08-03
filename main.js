import Express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import browserSync from 'browser-sync'

const bs = browserSync.create()
const PORT = 3000

const app = Express()
const __dirname = path.dirname(fileURLToPath(import.meta.url))
app.use(Express.static(path.join(__dirname, 'src', 'sass'))) //connect the sass folder
app.use(Express.static(path.join(__dirname, 'src', 'assets', 'images'))) //connect the images folder
app.use(Express.static(path.join(__dirname, 'src', 'assets', 'js')))
app.use(Express.static(path.join(__dirname, 'src', 'assets', 'svg')))
//connect the js folder

//render the home page
app.get('/', (req, res) => {
  res.render('dashboard.ejs')
})
app.listen(PORT, () => {
  console.log('Server running on port 3000' + ' ' + 'http://localhost:3000/')
  bs.init({
    proxy: `localhost:${PORT}`,
    open: false,
    files: ['./**/*.{html,js,css}'],
  })
})
