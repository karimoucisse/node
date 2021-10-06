var multiply = require("./multiply");
//console.log(multiply);

var args = process.argv.slice(2);
/*console.log(parseInt (args[0]));*/
function addition(num){
    var result =0;
    for(var i=1;i<=10;i++){
        result=num+i;
        console.log(`${num} + ${i} = ${result}`);
    }
}
//addition(parseInt (args[0]))

module.exports= {
    addition,
    multiply
}