const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const auth = require('./middleware/auth');
const jwt = require('jsonwebtoken');
var cors = require('cors');



const app = express();
app.use(express.json());
app.use(cors());

const Port = 3001;

const connectDB = async() => {
    await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    console.log("database connected");
};
connectDB();
app.listen(Port, () => {
    console.log("Server started at port 3001");
});

