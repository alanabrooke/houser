const express = require("express");
const app = express();
const massive = require("massive");
require('dotenv').config();
const control = require("./controller");
app.use(express.json()); 


//db
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env; 
massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('DB connected')
})

//endpoints
app.get('/api/houses', control.getHouses);


//port
app.listen(5000, () => console.log(`Howdy, listening on Port 5000`));