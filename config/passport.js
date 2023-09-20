import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'

import User from '../api/models/user.js'
import crypto from 'crypto'

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await User.findOne({ username: username })
      if (!user) return done(null, false, { message: 'Incorrect username.' })

      const hash = crypto.createHash('sha256')
      hash.update(password)
      const hashedPassword = hash.digest('hex')
      if (user.password !== hashedPassword) {
        return done(null, false, { message: 'Incorrect password.' })
      }

      return done(null, user)
    } catch (err) {
      return done(err)
    }
  })
)

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id)
    done(null, user)
  } catch (err) {
    done(err)
  }
})
