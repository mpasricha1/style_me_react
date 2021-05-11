const express = require('express');
const session = require('express-session')
// const routes = require('./routes'); 
const app = express(); 
const PORT = process.env.PORT || 4000;

require("dotenv").config();
const passport = require('./config/passport');

app.use(express.urlencoding({ extended: true})); 
app.use(express.json());

app.use(session({ secret: process.env.SECRET_KEY, resave:true, saveUninitialized: true}))
app.use(passport.initialize());  
app.use(passport.session());

// app.use(routes);

db.sequelize.sync().then( () =>{
	app.listen(PORT, () => {
		console.log(`Listening on port ${PORT}`);
	})
});