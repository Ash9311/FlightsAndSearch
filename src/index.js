const {PORT} = require('./config/serverConfig')
const bodyParser = require("body-parser");
const {City} = require("./models/index")
const express = require("express");
const ApiRoutes = require('./routes/index');
//const CityRepository = require('./repository/city-repository')
require('dotenv').config()
const setupAndStartServer = async () => {
    //create the express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',ApiRoutes);
    app.listen(PORT,()=>{
        console.log(`server started at ${PORT}`);
        // console.log(process);
        console.log(City);
        // const repo = new CityRepository();
        // repo.createCity({name:'Mulki'})
    })
}

setupAndStartServer();