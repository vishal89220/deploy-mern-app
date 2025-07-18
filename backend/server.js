// const http = require("http");
const express = require("express");
require("dotenv").config();
const AuthRouter = require('./Routes/AuthRouter')
const AuthProduct = require("./Routes/ProductRouter")

const bodyParser = require("body-parser")
const cors = require('cors');
const connectDB = require("./Modals/db");
const app = express();
const PORT = process.env.PORT || 8080;
require('dotenv').config()

// Basic Route
app.get("/ping", (req, res) => {
    res.send("Hello from Express with HTTP server!");
});
app.use(express.json())
app.use(bodyParser.json());
app.use(cors());
app.use('/auth',AuthRouter)
app.use('/Products' , AuthProduct)
// Create HTTP Server
// const server = http.createServer(app);

// Start the Server
connectDB().then(()=>{
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
})
