const express = require("express");
const router = express.Router();
const { getProducts, getProductById, getProductByIdImages } = require("../controllers/product.controller");
const verifyToken = require("../middlewares/jwt.middleware");

router
    .get("/", getProducts)
    .get("/:id", getProductById)
    .get("/:id/images", getProductByIdImages)



module.exports = router;