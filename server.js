const express = require('express');
const tasks = require('./data')
const port = 3000
const app = express();
app.use(express.json())

app.get('/', (req,res)=>{
    res.json(tasks)
})




app.listen(port, () => {
        console.log('Server is running on port ' + port);

    })  


