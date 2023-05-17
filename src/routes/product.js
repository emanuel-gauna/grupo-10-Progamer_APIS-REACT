const express = require("express");
const router = express.Router();
const { getProducts, getProductById } = require("../controllers/product.controller");
const verifyToken = require("../middlewares/jwt.middleware");

router
    .get("/", verifyToken, getProducts)
    .get("/:id", getProductById)



module.exports = router;