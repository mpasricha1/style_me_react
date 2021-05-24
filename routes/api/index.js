const router = require("express").Router();
const userRoutes = require("./user");
const itemRoutes = require("./item");
const catRoutes = require("./categories");
const outfitRoutes = require("./outfits");
const catalogRoutes = require("./catalogs"); 

router.use("/category", catRoutes);
router.use("/item", itemRoutes);
router.use("/user", userRoutes); 
router.use("/outfits", outfitRoutes); 
router.use("/catalogs", catalogRoutes);

module.exports = router; 