const express = require('express');
const app = express();
const Vigenere = require('caesar-salad').Vigenere;
const port = 8080;
let cipher = Vigenere.Cipher('abcdefg');
app.get('/password/:name', (req,res)=>{res.send(cipher.crypt(req.params.name))});
app.listen(port, console.log('Port '+ port));


