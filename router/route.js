const express = require('express');
const editTask = require("./crudTask/list-edit-router")
const viewTask = require("./crudTask/list-view-router")
function routerApi(app){
    const router = express.Router()
    app.use(express.json())
    app.use('/api/v1',router)
    router.use('/task', viewTask)
    router.use('/task', editTask)
}
module.exports = routerApi;


