let fs = require('fs');
// Reading the file from aother module
fs.readFile('calc.js','utf8',(err,data)=>{
    console.log('read file',data);
})


// writting the file
fs.writeFile('calcwrite.js','console.log("I am writting the file")',(err)=>{
    console.log('the file written');
})

//Appending the file

fs.appendFile('calc.js','console.log("Append file to the end")',(err)=>{
    console.log('the append');
})


fs.appendFile('calc123.js','console.log("Append file to the end")',(err)=>{
    console.log('the append');
})

//delete file

fs.unlink('calc123.js',(err)=>{
    console.log('the file is deleted');
})



