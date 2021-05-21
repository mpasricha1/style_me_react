const router = require("express").Router();
const userRoutes = require("./user");
const itemRoutes = require("./item");
const catRoutes = require("./categories");

router.use("/category", catRoutes);
router.use("/item", itemRoutes);
router.use("/user", userRoutes); 

module.exports = router; 