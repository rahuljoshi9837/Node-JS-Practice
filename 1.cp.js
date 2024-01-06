const cp = require("child_process");

// ---- Open Window Calculator ---- //
cp.execSync('calc');
// ---- Open Window Calculator ---- //

// ---- Open Chrome Browser ---- //
cp.execSync('start chrome https://www.netflix.com/browse');
// ---- Open Chrome Browser ---- //

// ---- Execute another file using command ---- //
console.log(`Execute another file ${cp.execSync('node 2.cp.js')}`);
// ---- Execute another file using command ---- //