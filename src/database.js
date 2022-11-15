import {connect} from "mongoose";

// Esta db se va a crear por defecto si no existe
// conexión asincrona, función anonima
( async () => {
    try {
    const db = await connect("mongodb://localhost/crud-mongo");
    //const db = await connect("URL DB ATLAS");
    //const db = await connect("URL DB DOCKER");
    console.log('DB connected to', db.connection.name);
    } catch (error) {
        console.error(error);
    }
})();

