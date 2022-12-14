const {PORT} = require('./config/serverConfig')
const express = require("express");
require('dotenv').config()
const setupAndStartServer = async () => {
    //create the express object
    const app = express();
    app.listen(PORT,()=>{
        console.log(`server started at ${PORT}`);
        // console.log(process);
    })
}

setupAndStartServer();