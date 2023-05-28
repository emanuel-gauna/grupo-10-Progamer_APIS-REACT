// Módulos de Node.js
const process = require("process");

// Módulos de terceros
const express = require("express");
const methodOverride = require("method-override");
require('dotenv').config();
const cors = require('cors')

// Rutas
const [ 
    userRouter, 
    productRouter, 
    orderRouter, 
    categoryRouter
] = require("./routes");

const app = express();

// Configuración
const PORT = process.env.PORT || 3005;

// Middlewares
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(methodOverride("_method"));
app.use(cors());

// Rutas
app.use(`/api/users`, userRouter);
app.use(`/api/products`, productRouter);
app.use(`/api/orders`, orderRouter);
app.use(`/api/categories`, categoryRouter);

// Manejo de errores
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
});

// Iniciar servidor
app.listen(PORT, () => console.log(`Server listen in port ${PORT}`));