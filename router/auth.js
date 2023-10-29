const express = require('express')
const router = express.Router();
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const {users} = require('../services/data')
router.post('/', (req,res)=>{
    const {email, password} = req.body 
    const userAuth = users.find((user) => user.email == email && user.password == password);
    console.log(userAuth.tipo)
    if(!userAuth){
       return res.status(401).send('usuario o contraseña incorrecta');
    }
    const token = jwt.sign({email: userAuth.email , tipo : userAuth.tipo }, process.env.SECRET_KEY,  { algorithm: 'HS256' })
    return res.send({token});
})
module.exports = router;