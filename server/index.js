  
require("dotenv").config();
const express = require("express");
const massive = require("massive");
const ctrl = require("./controller");

const { CONNECTION_STRING } = process.env;

const app = express();

app.use(express.json());

//endpoints
app.get('/api/houses', ctrl.getHouses)
app.post('/api/add', ctrl.addHouse)
app.delete('/api/delete/:id', ctrl.deleteHouse)
// app.put('/api/update/:id', ctrl.editHouse)

massive(CONNECTION_STRING)
.then(db => {
    app.set('db', db);
});

app.listen(5432, () => console.log(`Howdy, listening on Port 5432`));