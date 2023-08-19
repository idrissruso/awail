import express from 'express'
import passport from 'passport'

const router = express.Router()

router.get('/', (req, res) => {
  const flashMessage = req.flash('message')
  const message = flashMessage.length > 0 ? flashMessage[0].message : false
  res.render('index.ejs', { message: message })
})

function checkRole(req, res, next) {
  if (req.body.role.toUpperCase() !== req.user.role.toUpperCase()) {
    req.logout(() => {
      req.flash('message', {
        message: 'Invalid path. Please choose a convenient role.',
      })
      res.redirect('/')
    })
  } else {
    const user = req.user
    if (user.role === 'Admin') {
      res.redirect('/admin')
    } else if (user.role === 'Parent') {
      res.redirect('/parent')
    } else if (user.role === 'Teacher') {
      res.redirect('/teacher')
    } else {
      req.logout(() => {
        req.flash('message', {
          message: 'Invalid path. Please choose a convenient role.',
        })
        res.redirect('/')
      })
    }
  }
}

// POST route with Passport.js authentication
// POST route with Passport.js authentication
router.post('/', (req, res, next) => {
  res.cookie(
    'role',
    req.body.role,
    { maxAge: 1000 * 60 } // 1 minute
  )

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
      checkRole(req, res, next)
    })
  })(req, res, next)
})

export default router
