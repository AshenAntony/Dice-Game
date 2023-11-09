let player1 = "Player1";
let player2 = "Player2";

function editName() {
    player1= prompt("PLease enter player 1 name :");
    player2= prompt("please enter player 2 name:");

    if(player1.length<1 || player2.length<1){
        alert("Invalid player names !");
        return;
    }

    document.querySelector("p.Player1").innerHTML = player1;
    document.querySelector("p.Player2").innerHTML = player2;


}

function rollTheDice(){
    let diceNum1 = document.querySelector(".img1");
    let diceNum2 = document.querySelector(".img2");

    diceNum1.setAttribute('src','./images/roll.gif');
    diceNum2.setAttribute('src','./images/roll.gif')

    let result = document.querySelector('h1');
   

    function changeLStyle(){

        const elementR = document.getElementById("ch-R-color");
        const elementL = document.getElementById("ch-L-color");
        elementL.style.backgroundColor = "rgb(248, 252, 0)";
        elementR.style.backgroundColor = "#efeef5";

    }

    function changeRStyle(){

        const elementR = document.getElementById("ch-R-color");
        const elementL = document.getElementById("ch-L-color");
        elementL.style.backgroundColor = "#efeef5";
        elementR.style.backgroundColor = "rgb(248, 252, 0)";

    }


    function changeStyle(){

        const elementR = document.getElementById("ch-R-color");
        const elementL = document.getElementById("ch-L-color");
        elementL.style.backgroundColor = "#efeef5";
        elementR.style.backgroundColor = "#efeef5";

    }


    setTimeout(() => {

    

        const randomNumber1 = Math.floor(Math.random()*6 )+1; //1-6
        const randomNumber2 = Math.floor(Math.random()*6 )+1; //1-6

        const player1Marks = document.querySelector(".value1");
        const player2Marks = document.querySelector(".value2");

        player1Marks.innerHTML = randomNumber1;
        player2Marks.innerHTML = randomNumber2;

        diceNum1.setAttribute('src','./images/dice'+randomNumber1+'.png');
        diceNum2.setAttribute('src','./images/dice'+randomNumber2+'.png');



        if(randomNumber1 === randomNumber2){
            result.innerHTML = "Draw!"
            changeStyle();
        }
        else if (randomNumber1<randomNumber2){
            result.innerHTML = (player2+" Wins! 🚩");
            changeRStyle();
        }
        else{
            result.innerHTML = ("🚩 " + player1+ " Wins! ");
            changeLStyle();
        }



    }, 1500);

}










