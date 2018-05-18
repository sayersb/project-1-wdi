# project-1-wdi

//Instructions
music in background...
Computer shows a pattern of lit up squares...
Player 1 needs to replicate the pattern...
Assuming player 1 keeps answering correctly the computer keeps adding more squares, maybe getting faster...
When Player 1 is incorrect = big you lose pops up(alert maybe, also saying find out if you beat the other pathetic human..)...
Player 1 result needs to be logged to later compare to player2...
Then switches to Player 2 turn...
Computer pattern to light up squares again, better if its random generator again so not same pattern... player 1 saw...
Player 2 keeps answering until incorrect...
When player 2 loses need to pop up again with big LOSER...
Display who won, then offer to play again and restart. Score logged to scoreboard or lives go down by 1...
If draw say you're both losers, try again for a winner..

//

//VARIABLES

all need to go in a game var??

computerChoice = [];
playerOneChoice = [];
playerTwoChoice = [];
let counter = 0;
let score = 0;
showCount



//FUNCTIONS I NEED

newGame

function newGame(){
  return clearGame();
}

clearGame - make game clear to start again after each round

function clearGame(){
 counter = 0;
 nextlevel()
}

restartGame - after 2 wins for either player restart whole process

computerMoves - need to log for comparisons, need setIntervals to show slowly
computerMoves function(){
  need way to light up cell thats being lit up
then light needs to go off
}

playerOneMoves - record player clicks after each round of computerMoves
done with clicks
checks after each click if it was right square somehow..
can check if cell = array number in array for chosen first 7

compareComputerPlayer1 - to check if another computer moves needed

next level
next level function(){
  counter++
  setTimeout
  computerMoves
}

playerTwoMoves
user could have prompt to type answer of the cell e.g d4 or e2.. the one which had lit up
could give them animation or hover etc for 3 seconds and put labels on columns for users
could match the square results to the array results for first 7

compareComputerPlayer2

comparePlayersResults

scoreCount

sound - might not need as function if just play when page loads/player pushes go

restartPlayer
player=[]


hardMode - instead of adding 1 square at a time it adds 3...
get to round 7 for super hard mode - no more chosen arrays so just have to guess which square the computer added last as was random...


...to make harder could add in timer, timerStop and timerReset







// CSS
