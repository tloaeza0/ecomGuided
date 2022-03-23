const express = require('express');
const cors = require('cors');
const mysql= require('mysql');
require('dotenv').config();

const app = express ();

const port = process.env.port;

const db = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'Bellastank154', 
});

app.use(express.json());
app.use(cors());



app.listen(port, ()=>{
    console.log(`listening on ${port}`);
});