const express = require("express");
const cookieParser = require("cookie-parser");
const user = require("./routes/user");

require("dotenv").config();
const connectDB=require("./db/connection");

const app = express();


connectDB(process.env.MONGO_URL)
app.listen(process.env.PORT || 8000)


//Middleware
app.use(cookieParser());
app.use(express.json());

//Routes
app.use(user);

console.log("Listening on port 8000");
