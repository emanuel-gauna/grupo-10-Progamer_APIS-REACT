const { generateToken } = require("../helpers/jwt.helper");

const {
  getUsers,
  getUserById,
  insertUser,
  updateUser,
  deleteUser,
  getUserByEmail,
} = require("../services/user.service");
const bcrypt = require("bcrypt");

/*     ● api/users/
○ Deberá devolver un objeto literal con la siguiente estructura:
■ count → cantidad total de usuarios en la base.
■ users → array con la colección de usuarios, cada uno con:
● id
● name
● email
● detail → URL para obtener el detalle.
 */
module.exports = {
  getUsers: async (req, res) => {
    try {
      const users = await getUsers();
      const usersResponse = users.map(({ id, name, email }) => {
        return {
          id,
          name,
          email,
          detail: `/api/users/${id}`,
        };
      });

      const RESPONSE = {
        count: users.length,
        users: usersResponse,
      };

      return res.status(200).json(RESPONSE);
    } catch (error) {
      return res.status(500).json({ Error: error });
    }
  },
  getUserById: async (req, res) => {
    try {
      const USER_ID = req.params.id;
      const { id, name, lastname, email, phone, avatar, address, city ,postalCode, tel, } = await getUserById(
        USER_ID
      );

      const USER_DATA_RESPONSE = {
        id,
        name,
        lastname,
        email,
        phone,
        avatar: `/api/users/${id}/${avatar}`,
        address,
        city,
        postalCode,
        tel,
      };
      return res.status(200).json(USER_DATA_RESPONSE);
    } catch (error) {
      return res.status(500).json({ Error: "No existe este usuario" });
    }
  },
  createUser: async (req, res) => {
    try {
      const result = await insertUser({ 
        ...req.body,
        user_category: 0,
        avatar: "default-image.png",
        pass: bcrypt.hashSync(req.body.pass, 10)//encriptar la contraseña
       });
  /* pasar en el postman metodo "post" la url http://localhost://3005/api/users/register      
  selccionar body - raw -  - JSON y crear el objecto similar a este
  {
    "name":"ema",
    "lastname": "gauna",
    "email": "prueba1@mail.com",
    "pass": "123456",
    "pass2": "123456",
    "user_category": "0",
    "avatar": "default-image.png"
} */
      if (result) {
        const SUCCESS_RESPONSE = "User created successfully";//respuesta satisfactoria
        return res.status(201).json({ msg: SUCCESS_RESPONSE });
      } else {
        const ERROR_RESPONSE = "Somethings wrong";//respuesta de errores
        return res.status(400).json({ msg: ERROR_RESPONSE });
      }
    } catch (error) {
      return res.status(500).json({ Error: error });//errores del servidor
    }
  },
  login: async (req, res) => {//login de usuario cn token "jsonWebToken"
    try {
      const { email } = req.body; // buscamos un email registrado
      const user = await getUserByEmail(email);//traemos el metodo de servicio q trae los email

      const token = generateToken(user);//metodo que trae el token q vamos a generar de (jwt.io)Jsonwebtoken para Node.js

      return res.status(200).json({token})
    } catch (error) {
      return res.status(500).json({ Error: "Token error " + error });
    }
  },
  /* updateUser: async (req, res) => {},
  deleteUser: async (req, res) => {},
  */
}; 
