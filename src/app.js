// const express = require("express");
// npm start src/index.js
// npx babel-node src/index.js
import path from "path";
import express from "express";
import indexRoutes from "./routes/index.routes";
import { create } from "express-handlebars";
import morgan from 'morgan';

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

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

// Utilizamos las rutas creadas en routes/index.routes
app.use(indexRoutes);

export default app; 