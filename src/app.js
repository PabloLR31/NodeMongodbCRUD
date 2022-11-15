// const express = require("express");
// npm start src/index.js
// npx babel-node src/index.js
import express from "express"; // babel
import indexRoute from "./routes/index.routes";
import exphbs from "express-handlebars";
import path from "path";

const app = express();

app.set('views', path.join(__dirname,'views'));

app.engine('.hbs', exphbs({
    layoutsDir: path.join(app.get('views', 'layouts')),
    extname: ".hbs",
}));

app.use(indexRoute);

export default app; 