const router = require("express").Router(); 
const db = require("../../models");
const passport = require("../../config/passport") 

router.get("/test", (req, res) => {
    res.json(true);
});

router.post("/login", passport.authenticate("local"), (req, res) => {
    console.log(req.user)
    res.json({
        full_name: req.user.full_name,
        id: req.user.id
    });
});

// router.get("/logout", (req, res ) =>{
// 	// req.logout();
// 	// res.redirect("/");
// });

router.get('/auth/google', 
  passport.authenticate('google', { scope : ['profile', 'email'] }));

router.get('/auth/google/callback', 
  passport.authenticate('google', { successRedirect : '/catalog', failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/catalog');
  });

router.post("/signup", (req,res) =>{
	db.User.create({
		full_name: `${req.body.first_name} ${req.body.last_name}`, 
		first_name: req.body.first_name, 
		last_name: req.body.last_name, 
		email: req.body.email, 
		password: req.body.password,
	})
	.then(data =>{
		res.json(data)
	})
	.catch((err) =>{
		res.status(401).json(err);
	})
});

module.exports = router;