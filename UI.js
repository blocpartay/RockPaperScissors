function computerPlay() {
    let moves = ['rock', 'paper', 'scissors'];
    return moves[(Math.random()*moves.length)|0];
} 

function playerSelection() {
    let input = prompt('Type your move, i.e. rock, paper or scissors', computerPlay());
    return input.toLowerCase();    
}

function round(player, computer) {
   alert('computer chose....  ' + computer);
   
   let result;

   if (player === 'rock' && computer === 'scissors' || 
       player === 'scissors' && computer === 'paper' || 
       player === 'paper' && computer === 'rock') {
       return result = 'Win';
   }
   
   if (player == computer) {
        return result = 'Draw';
   }
   
   return result = 'Lose';         
}

//invoke round
//console.log(round(playerSelection(),computerPlay()));

function game() {

    let r, win=0, draw=0, lose=0, gameround; 

    for (r=0; r<5; r++) {

        gameround = round(playerSelection(),computerPlay());
        console.log(gameround);
        if (gameround == 'Win') {
            win ++;
        }
        else {
            if (gameround == 'Draw') {
                draw ++;
            }
            else {
                lose ++;
            }
        }
    }

    if (win > lose) {
        console.log('YOU WIN!!!');
    }
    else {
        if (win == lose) {
            console.log('Its a Draw');
        }
        else {
            console.log('You Lose!!!');
        }
    }
    
    console.log('The results are: Wins = ' + win + ' Draws = ' + draw + ' Loses = ' + lose);
}