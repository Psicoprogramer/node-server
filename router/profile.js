const express = require('express');
const router = express.Router();
const {users} = require('../services/data')
const ServicesMiddlewares  = require('../services/Middlewares')
const servicesAuth = new ServicesMiddlewares();
const authMidelware = servicesAuth.handelLoguinAuth
router.get('/',authMidelware,(req,res)=>{
    if(req.tipo == 'admin'){
       return res.status(200).send('welcome administrador')
    }else{
        return res.status(200).send('welcome usuario') 
    }
}) 
module.exports = router;