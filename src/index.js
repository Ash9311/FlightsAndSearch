const {PORT} = require('./config/serverCon')
const express = require("express");
const setupAndStartServer = async () => {
    //create the express object
    const app = express();
    app.listen(PORT,()=>{
        console.log(`server started at ${PORT}`);
    })
}