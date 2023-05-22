const { check, body } = require("express-validator");
const db = require("../database/models");
const { getUserByEmail } = require("../services/user.service");

const userRegisterValidationRules = () => {
  return [
    check("name").notEmpty().withMessage("Name is required"),//obligatorio
    check("lastname").notEmpty().withMessage("Lastname is required"),//obligatorio
    check("email")//obligatorio
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Invalid email format"),
    body("email").custom(async (value) => {
      const user = await getUserByEmail(value);
      if (user) {
        return Promise.reject("This email is already registered");
      }
    }),
    check("pass")//obligatorio
      .notEmpty()
      .withMessage("Password is required")
      .isLength({
        min: 6,
        max: 12,
      })
      .withMessage("Password must be between 6 and 12 characters"),
    body("pass2")//obligatorio
      .custom((value, { req }) => (value !== req.body.pass ? false : true))
      .withMessage("Passwords do not match"),
    check("phone")
      .optional()
      .isMobilePhone()
      .withMessage("Invalid phone number format"),
      check("user_category").isInt().withMessage("invalid Role"),
    check("avatar").optional().isURL().withMessage("Invalid avatar URL")
  ];
};

module.exports = {
  userRegisterValidationRules,
};
