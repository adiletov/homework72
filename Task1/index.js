const express = require('express');
const app = express();
const port = 8080;

app.get('/user/:name', (req,res)=>{res.send('Привет' + req.params.name)});
app.listen(port, console.log('Port ' + port));
