const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const GOOGLE_CLIENT_ID= '264543307047-7bfqg9rflmoldp36jsn3iq7djqpsjosg.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET= 'm3Hwx36oB2fh9u6tPcH8b9m4';
//const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
//const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const randomGen = require("../utils/randomString.js");

const db = require("../models");

passport.use(new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true
  },
  (req,email, password, done) =>{
    db.User.findOne({
      where: {
        email: email
      }
    }).then( (dbUser) => {
      if(!dbUser || !dbUser.validPassword(password)){
        return done(null, false);
      }
      return done(null, dbUser);
    });
  } 
));

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback", 
    proxy: true
  },
  async (accessToken, refreshToken, profile, done) => {
    try{
      let dbUser = await db.User.findOne({ where: { google_id: profile.id }});

      if(!dbUser){
        var emailValue = await db.Counters.findOne({ 
          attributes: ["value"], 
          where: {counter_name: "google email"}
        }); 

        let data = await db.User.create({
          full_name: profile.displayName, 
          google_id: profile.id,
          email: profile.email, 
          password: randomGen.generateString()
        });
        profile.google_id = profile.id; 
        profile.id = data.id;
      }else{
        profile.google_id = profile.id; 
        profile.id = dbUser.dataValues.id;
       }

        userProfile=profile;
      return done(null, userProfile);
      
    }catch(err){
      if (err) throw err;
    }
  }
));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

module.exports = passport;