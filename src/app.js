// const express = require("express");
// npm start src/index.js
// npx babel-node src/index.js
import path from "path";
import express from "express";
import morgan from "morgan";
import indexRoutes from "./routes/index.routes";
import { create } from "express-handlebars";

const app = express();

// settings
app.set("port", process.env.PORT || 3000);

// Definimos la ubicacion de la carpeta views
app.set("views", path.join(__dirname, "views"));

// Definimos el sistema de plantillas y la ubicación
app.engine(
  ".hbs",
  create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaulLayout: "main",
    extname: ".hbs",
  }).engine
);
// Avisamos del uso de handlebars
app.set("view engine", ".hbs");

// Utilizamos las rutas creadas en routes/index.routes
app.use(indexRoutes);

export default app; 