const path = require('path'); 
const router = require("express").Router(); 
const apiRoutes = require('./api'); 

router.use('/api', apiRoutes); 

router.use(function(req, res){
	res.sendFile(path.join(_dirname, "../src/index.html"))
})

module.exports = router;