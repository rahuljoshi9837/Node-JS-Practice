const fs = require("fs");

// ------- Create Directroy ------- //
fs.mkdir("DirectoryForPractice", {recursive:true}, (err) => {
    console.log("Directory Has Been Created !");
});

// ------- Read Directory ------- //
fs.readdir("DirectoryForPractice", {recursive:true}, (err, data) => {
    console.log("Directory is read !!" + data);
});

// ------ Directory is exists or not ------ //
const existFolder = fs.existsSync('DirectoryForPractice');
console.log(existFolder);

// ------ File is exists or not ---------- ///
const existFile = fs.existsSync('D:\\Node Js Tutorial Scaler\\Node_Module_System\\DirectoryForPractice\\dummyDir.txt');
console.log(existFile);

// ------- Remove Directroy -------- //
fs.rmdir("D:\\Node Js Tutorial Scaler\\Node_Module_System\\DirectorySecond", (err, data) => {
    console.log("Folder has been removed !!");
})