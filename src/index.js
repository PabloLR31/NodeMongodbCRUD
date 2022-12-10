import app from "./app";
//import './database';
//import { PORT } from './config';
import "./utils/mongoose";

app.listen(app.get("port"));
console.log(`server on port ${app.get("port")}`);