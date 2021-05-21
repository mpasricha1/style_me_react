const express = require('express');
const session = require('express-session')
const routes = require('./routes'); 
const path = require('path');

require("dotenv").config();

const app = express(); 
const PORT = process.env.PORT || 4000;
const db = require('./models')

const passport = require('./config/passport');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({ secret: process.env.SECRET_KEY, resave:true, saveUninitialized: true}))
app.use(passport.initialize());  
app.use(passport.session());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

db.sequelize.sync().then( () =>{
	app.listen(PORT, () => {
		console.log(`Listening on port ${PORT}`);
	})
});