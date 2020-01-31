const express = require('express');
const app = express();
const Vigenere = require('caesar-salad').Vigenere;
const port = 8080;


app.get('/encode/:name', (req,res)=>{res.send(Vigenere.Cipher('password').crypt(req.params.name))});
app.get('/decode/:name', (req,res)=>{res.send(Vigenere.Decipher('password').crypt(req.params.name))});

app.listen(port, console.log('Port '+ port));


