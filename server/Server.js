const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
require('dotenv').config();


const app = express();

app.use(express.json());
app.use(cors({credentials: true, origin: true}));


const Port = process.env.PORT || 5000;
const URI = process.env.DB_URI;

const connectDB = async() => {
    await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    console.log("database connected");
};


connectDB();

app.listen(Port, () => {
    console.log("Server started at port 5000");
});

