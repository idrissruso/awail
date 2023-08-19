import express from 'express'
import passport from 'passport'

const router = express.Router()

router.get('/', (req, res) => {
  res.render('index.ejs', { message: false })
})

// POST route with Passport.js authentication
router.post('/', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err)
    }
    if (!user) {
      return res.render('index.ejs', { message: info.message })
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err)
      }
      const role = req.user.role
      const redirectPath = `/${role}`
      res.redirect(redirectPath)
    })
  })(req, res, next)
})

router.get('/logout', (req, res) => {
  req.logout(() => {
    res.redirect('/')
  })
})

export default router
