const express = require("express");
const massive = require("massive");
require('dotenv').config();

const app = express();

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env; 
massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('DB connected')
})


app.use(express.json()); //creates req.body

app.listen(5000, () => console.log(`Howdy, listening on Port 5000`));