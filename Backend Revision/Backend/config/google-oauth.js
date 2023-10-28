const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require("passport");
const { userModel } = require('../models/user.model');

const { v4: uuidv4 } = require('uuid');

passport.use(new GoogleStrategy({
    clientID: "209725305827-39j4fbst936d9qe7da30m68f3ljkv7r6.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:8080/auth/google/callback"
  },
  async function(accessToken, refreshToken, profile, cb) {
    let email = profile._json.email;
    const user = new userModel({
        email,
        password : uuidv4()
    })
    await user.save;
    return cb(null , user);
    // console.log(profile)
  }
));

module.exports = passport;