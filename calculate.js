// 01 - Calculator 


var args = process.argv.slice(2);
console.log(args);
/*console.log(parseInt (args[0]));
console.log(parseInt (args[1]));
console.log(args[2]);*/

function calculate(num1,num2,operateur){
    var result;
    //operateur=[+,-,*,/,]
    if(num1 && num2 && operateur){
        if(operateur=="*"){
            result=num1*num2;
            console.log(`num1:${num1} * num2:${num2} = ${result}`);
        }else if(operateur=="/"){
            result=num1/num2;
            console.log(`num1:${num1} / num2:${num2} = ${result}`);
        }else if(operateur=="+"){
            result=num1+num2;
            console.log(`num1:${num1} + num2:${num2} = ${result}`);
        }else if(operateur=="-"){
            result=num1-num2;
            console.log(`num1:${num1} - num2:${num2} = ${result}`);
        }else if(operateur=="%"){
            result=num1%num2;
            console.log(`num1:${num1} % num2:${num2} = ${result}`);
        }
    }else{
        console.log("error");
    }
}
calculate(parseInt (args[0]),parseInt (args[1]),args[2])





