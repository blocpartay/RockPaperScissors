function computerPlay() {
    let moves = ['Rock', 'Paper', 'Scissors'];
    return moves[(Math.random()*moves.length)|0];
} 

function playerSelection() {
    let input = prompt('Type your move, i.e. rock, paper or scissors', computerPlay());
    return input.toLowerCase();    
}

function round(player, computer) {
   //alert('computer chose....  ' + computer);
   
   let result;

   if (player === 'Rock' && computer === 'Scissors' || 
       player === 'Scissors' && computer === 'Paper' || 
       player === 'Paper' && computer === 'Rock') {
       return result = 'Win';
   }
   
   if (player == computer) {
        return result = 'Draw';
   }
   
   return result = 'Lose'; 
           
}

function incrementScore(competitor) {
    let score = document.querySelector(competitor);
    let number = score.innerHTML;
    number++;
    score.innerHTML = number;
    console.log(score.innerHTML);
}

function showSelection(competitor,selection) {
    let turn = document.querySelector(competitor);
    turn.innerHTML = selection;
}

//Click a game button and have it log which button was pressed.
const btns = Array.from(document.querySelectorAll('.selectionButton'));
btns.forEach((selectionButton) => {
    selectionButton.addEventListener('click', (e) => {

        //Play a round, the player selection will be determined automatically by which button was pressed.
        let compTurn = computerPlay();
        let playRound = round(selectionButton.id,compTurn);
        console.log(playRound);

        //Show the current round, one for player choice and one for computer.
        showSelection('#playerGameBox',selectionButton.id);
        showSelection('#compGameBox',compTurn);

        //Show the round result, i.e. player wins, draw
        let displayResult = document.querySelector('#roundResultBox');
        displayResult.innerHTML = playRound;

        //Display the round result.
        //Increment the running score, no loop required, simply +1 the numbers.
        if (playRound == "Win") {
            incrementScore('#playerScoreBox');
        }
        else if (playRound == "Lose") {
            incrementScore('#compScoreBox');
        }
        
        //Once either competitor reaches 5 points, announce the winner
        if (document.querySelector('#playerScoreBox').innerHTML == '5') {
            alert('Player Wins');
        }
        else if (document.querySelector('#compScoreBox').innerHTML == '5') {
            alert('Computer Wins');
        }
    });
});