let player1 = "Player1"; // initialized a player1
let player2 = "Player2"; // initialized a player2

function editName() { // get user input player names
    player1= prompt("PLease enter player 1 name :"); //used promt to input name
    player2= prompt("please enter player 2 name:"); //used promt to input name

    if(player1.length<1 || player2.length<1){
        alert("Invalid player names !"); // if player doesn't input name correctly
        return;
    }

    document.querySelector("p.Player1").innerHTML = player1; // change player1 into user given name inside on html file
    document.querySelector("p.Player2").innerHTML = player2; // change player2 into user given name inside on html file


}

function rollTheDice(){
    const diceNum1 = document.querySelector(".img1"); //initialized diceNum1 to img1
    const diceNum2 = document.querySelector(".img2"); //initialized diceNum1 to img2

    diceNum1.setAttribute('src','./images/roll.gif'); // changed attribute to dice rolling gif location
    diceNum2.setAttribute('src','./images/roll.gif') // changed attribute to dice rolling gif location

    const result = document.querySelector('h1'); // select html tag for change as per dice value result
   

    function changeLStyle(){ // for change left div color

        const elementR = document.getElementById("ch-R-color"); 
        const elementL = document.getElementById("ch-L-color");
        elementL.style.backgroundColor = "rgb(248, 252, 0)";
        elementR.style.backgroundColor = "#efeef5";

    }

    function changeRStyle(){ // for change right div color

        const elementR = document.getElementById("ch-R-color");
        const elementL = document.getElementById("ch-L-color");
        elementL.style.backgroundColor = "#efeef5";
        elementR.style.backgroundColor = "rgb(248, 252, 0)";

    }


    function changeStyle(){ // for change both div color

        const elementR = document.getElementById("ch-R-color");
        const elementL = document.getElementById("ch-L-color");
        elementL.style.backgroundColor = "#efeef5";
        elementR.style.backgroundColor = "#efeef5";

    }


    setTimeout(() => {// set timeout for for dice rolling 

    

        const randomNumber1 = Math.floor(Math.random()*6 )+1; //for get random1 number between 1-6
        const randomNumber2 = Math.floor(Math.random()*6 )+1; //for get random2 number between 1-6

        const player1Marks = document.querySelector(".value1"); // initialized and select tag
        const player2Marks = document.querySelector(".value2"); // initialized and select tag

        player1Marks.innerHTML = randomNumber1; // asssigned dice value1 for p tag
        player2Marks.innerHTML = randomNumber2; // asssigned dice value2 for p tag

        diceNum1.setAttribute('src','./images/dice'+randomNumber1+'.png'); // change dice image according to random number
        diceNum2.setAttribute('src','./images/dice'+randomNumber2+'.png'); // change dice image according to random number



        if(randomNumber1 === randomNumber2){ // for shown draw in heading and change colors to the same 
            result.innerHTML = "Draw!"
            changeStyle();
        }
        else if (randomNumber1<randomNumber2){ // for shown player2 win in heading and change yellow colors to the right dev 
            result.innerHTML = (player2+" Wins! 🚩");
            changeRStyle();
        }
        else{
            result.innerHTML = ("🚩 " + player1+ " Wins! "); // for shown player1 win in heading and change yellow colors to the left dev 
            changeLStyle();
        }



    }, 1500);

}










