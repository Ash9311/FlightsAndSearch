const {PORT} = require('./config/serverConfig')
const bodyParser = require("body-parser");

const express = require("express");
require('dotenv').config()
const setupAndStartServer = async () => {
    //create the express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT,()=>{
        console.log(`server started at ${PORT}`);
        // console.log(process);
    })
}

setupAndStartServer();