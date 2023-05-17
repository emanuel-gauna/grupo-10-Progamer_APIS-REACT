/* const { categories } = require("../../controllers/productsController"); */

module.exports = (sequelize, dataTypes) => {
    /* name: req.body.name,
    lastname: req.body.lastname,
    email: req.body.email,
    pass: bcrypt.hashSync(req.body.pass, 10),
    avatar: req.file ? req.file.filename : "default-image.png",
    category: "USER", 0 y 1 en caso de administrador
    address: "",
    city: "" ,
    postalCode:"",
    tel:"" */
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        lastname: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        pass: {
            type: dataTypes.STRING(150),
            allowNull: false
        },
        avatar: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        address: {
            type: dataTypes.STRING(100),
            defaultValue: null
        },
        city: {
            type: dataTypes.STRING(100),
            defaultValue: null
        },
        postalCode: {
            type: dataTypes.STRING(100),
            defaultValue: null
        },
        tel: {
            type: dataTypes.STRING(100),
            defaultValue: null
        },
        user_category: {
            type: dataTypes.INTEGER(100).UNSIGNED,
            allowNull: false
        },
    };

    let config = {
        tableName: 'users',
        timestamps: false
    };
    const User = sequelize.define(alias, cols, config)


    return User;
}