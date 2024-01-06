const fs = require("fs");

// ------ Reading the file ------ //
const readFile = fs.readFileSync('dummy1.txt');
console.log("File is read !!" + readFile);

// ------ Write the file ------ //
fs.writeFileSync('dummy2.txt', "This is the dummy file to write data inside dummy2 txt file");
console.log("Content has been written in the Dummy2 file");

// ------ Append file in the dummy3.txt file ------ //
// ------ If file is empty the write content inside it otherwise append content inside it ------ //
const readFi = fs.readFileSync('dummy3.txt', 'utf8');
if(readFi==""){
    fs.writeFileSync("dummy3.txt", "This is the dummy3.txt file in which we have written data!");
    console.log("Data has been written inside dummy3.txt file");
}else{
    fs.appendFileSync("dummy3.txt", "Append content inside dummy3.txt file!");
    console.log("Data has been append inside dummy3.txt file");
}

// ------- Delete file ------- //

fs.unlinkSync("dummy4.txt");
console.log("File has been deleted !");