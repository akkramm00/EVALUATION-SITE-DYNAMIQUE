//========================= Déclaration des Varialbes ===========================\\
 let images =[
     "dice-1.png",
     "dice-2.png",
     "dice-3.png",
     "dice-4.png",
     "dice-5.png",
     "dice-6.png"
 ];

let scores, 
    roundScore,
    activePlayer,
    gamePlaying ;


    //========================= déclaration des fonctions =========================\\
    init();
    function init() {
        scores = [0, 0];
        roundScore = 0;
        activePlayer = 0;
        gamePlaying = true ;
        document.getElementById("player1Round").textContent = "0";
        document.getElementById("player1Global").textContent = "0";
        document.getElementById("player2Round").textContent = "0";
        document.getElementById("player2Global").textContent = "0";        

        document.getElementById("rollBtn").disabled= false;    
        document.getElementById("holdBtn").disabled= false;     
    }
    //=========================== rollDice function building ======================\\

    function rollDice() {
        if (gamePlaying) {
            let dice = Math.floor(Math.random() * 6) + 1 ;
            let diceDOM = document.getElementById("die-1");
            diceDOM.src = "dice-" + dice + ".png";

            if(dice !== 1) {
                roundScore += dice;
                document.getElementById("player" +(activePlayer + 1) + "Round").textContent = roundScore;
            }else{
                nextPlayer();
            }
        }
    }

        //=============================== hold function  =============================\\
        function hold() {
            if (gamePlaying) {
                scores[activePlayer] += roundScore;
                document.getElementById("player" + (activePlayer + 1) + "Global").textContent = scores[activePlayer];

                if (scores[activePlayer] >= 100) {
                    document.getElementById("player" + (activePlayer + 1)).style.backgroundColor = "green";
                    document.getElementById("player" + (activePlayer + 1)).style.borderRadius = "15" + "px";
                    document.getElementsByTagName("h2" + (activePlayer + 1)).style.color = "yellow";
                    document.getElementById("rollBtn").disabled = true ;
                    document.getElementById("holdBtn").disabled = true ;
                    gamePlaying = false;
                }else{
                    nextPlayer();

                }
            }
        }
            //=========================== Next Player function ========================\\

        function nextPlayer() {
            roundScore = 0;
            document.getElementById("player" + (activePlayer + 1) + "Round").textContent = "0";
            activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
         }

             //=========================== Reset Game function ========================\\

         function resetGame() {
            init();
            document.getElementById("player1").style.backgroundColor = "#f5f5f5";
            document.getElementById("player2").style.backgroundColor = "#f5f5f5";
         };
