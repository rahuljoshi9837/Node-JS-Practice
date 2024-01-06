const os = require('os');

console.log(os.arch());  // System Architect
console.log(os.platform()); // System Platform
console.log(os.cpus());  // System CPU
console.log(os.networkInterfaces()); // System Network Interface
console.log(os.hostname());
console.log( (os.totalmem()/1024/1024).toFixed(2)+` mb` );
console.log( (os.freemem()/1024/1024).toFixed(2)+` mb` );