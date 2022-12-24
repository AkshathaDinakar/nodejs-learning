let express = require('express');

let app = express();

app.get('/',(req,res)=>{
    res.send('Hello Nodejs');
})

app.get('/products',(req,res)=>{
    res.send('The products are listed');
})

app.get('/products/:id',(req,res)=>{
    let id = req.params.id;
    res.send(`the product listed for ${id}`);
})

app.listen(9001,(req,res)=>{
    console.log('the server is running');
})