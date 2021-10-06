var example1 = require("./table-utils").addition
var example2 = require("./table-utils").multiply
var args = process.argv.slice(2);
console.log(parseInt (args[0]));
console.log(example1(parseInt (args[0])));
console.log(example2(parseInt (args[1])));