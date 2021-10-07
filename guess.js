

var prompt = require("prompt");

prompt.start();
    var min = 1;
    var max = 100;
    var mysteryNum = Math.floor(Math.random() * (max - min + 1) + min)
    //console.log(mysteryNum);
    /*console.log(typeof(mysteryNum)); */

    function displayPrompt() {
  prompt.get({ name: "play", description: "Quel est le nombre mystère ?" }, function (err, res) { 

    res.play=parseInt(res.play)
    if (res.play < mysteryNum) {
        console.log("C'est plus !");
        displayPrompt();
    } else if (res.play > mysteryNum){
        console.log("C'est moins !");
        displayPrompt();
    } else if (res.play === mysteryNum){
        console.log("Bravo !!");
    }else if (typeof(res.play)!= Number){
        console.log("error");
    }
  });
}

displayPrompt(); 