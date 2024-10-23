const express = require('express')
const app = express();
const dotenv=require('dotenv');
dotenv.config();
const mongoose=require('mongoose');

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000);