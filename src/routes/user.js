const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
  login,
} = require("../controllers/user.controller");

const { userRegisterValidationRules } = require("../validations/registerUser.validator");//funcion de validaciones

const  userLoginValidationRules  = require("../validations/loginUser.validator");

const verifyToken = require("../middlewares/jwt.middleware");

const validate = require("../validations/index.validator");//middleware que ejecuta los errores validationResult o continua si esta todo bien


router
  .get("/", getUsers)// localhost://3005/api/users
  .get("/:id", getUserById)//localhost://3005/api/users/1
  .post("/register", userRegisterValidationRules(), validate, createUser)//http://localhost://3005/api/users/register
  .post("/login", userLoginValidationRules(), validate, login);
  /* .put("/:id", updateUser)
  .delete("/:id", deleteUser); */

module.exports = router;
