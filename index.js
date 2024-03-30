const express = require("express");
const router = require("./routes/auth");
require("dotenv").config();
const { dbConnection } = require("./db/config");
const cors = require("cors");
// Crear el servidor
const app = express();

// Base de datos
dbConnection();

// CORS
app.use(cors());
// Directorio Publico
app.use(express.static("public"));
// Lectura y parse del body
app.use(express.json());

// Rutas
app.use("/api/auth", require("./routes/auth"));
app.use("/api/events", require("./routes/events"));

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Escuchar
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT} `);
});
