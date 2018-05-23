console.log('hello');

const grid = [
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0]
];

const sequence = [
  [0, 2],
  [2, 4],
  [1, 1]
];

const userChoice = [];


const computerChoice = [];
const playerChoice = [];
let counter = 0;
let score = 0;
let clickCount = 0;


$(()=>{

  const $button = $('#start');
  const $restart = $('#restart');
  const $score = $('#levelScreen');

  const audio =  document.querySelector('#audio');
  audio.src = './sounds/theChain.mp3';
  audio.play();

  // USER CLICKS IN BOXES TO SELECT / LIGHT UP
  $('#board').on('click', 'div', function(e){
    // console.log($('#cell-address').val(`${$(this).data('x')}-${$(this).data('y')}`));  //shows cell we're hovering over on browser page
    e.target.classList.add('userChoices');
    playerChoice.push([$(this).data('x'), $(this).data('y')]);
    console.log(playerChoice);
    clickCount++;
    // console.log(clickCount);
    setTimeout(function(){
      e.target.classList.remove('userChoices');
    }, 2000 );
    if(clickCount === sequence.length){
      if(JSON.stringify(sequence) === JSON.stringify(playerChoice)){
        score++;
        alert('winner winner chicken dinner');
      } else {
        alert('YOU LOSE LOSER');
      }
    }
  });
  //if it does, add another random location to sequence and run sequence again


  // BOARD SET UP
  $.each(grid, (i, row)=>{
    $.each(row, (j, cell)=>{
      const $element = $('<div />');
      if(cell === 0){
        $element.addClass('blank');
      } else if(cell === 1){
        $element.addClass('path');
      }

      $element.data({x: i, y: j});   // shows the cell you're in with few lines below

      $element.on('click', function(){
        console.log($(this).data());
        const $element = $(this);

      });
      $element.appendTo('#board');
    });
  });


  //Computer Moves, implemented after start button clicked
  function computerMoves(){
    sequence.push([(Math.floor(Math.random() * 5)), (Math.floor(Math.random() * 5))]);
  }

  // function userMoves(){
  //   for( var i = 0; i < sequence.length; i++){}
  //   if(userChoices)
  //need to check boxes clicked match sequence }


  // function checkWin(){
  //  user clicked the wrong color (end the game)
  //  user entered the right color, but is not finished with the sequence (do nothing)
  //  user entered the right color and just completed the sequence (start a new round)
  //   }
  // }
  // checkWin();



  function resetDivs() {
    $('div').removeClass('computerChoices');
  }


  // START BUTTON
  $button.on('click', () => {
    computerMoves();
    console.log(sequence);
    sequence.forEach((cell, i, array) => {
      const finalIndex = (array.length - 1) * 1200;
      setTimeout(function(){
        $('#board div').filter(function() {
          return $(this).data().x === sequence[i][0] && $(this).data().y === sequence[i][1];
        }).addClass('computerChoices');
        console.log(`We've just hit timeout ${i}`);
      }, 1000 * i);
      setTimeout(resetDivs, finalIndex);
    });
  });



  // restart button
  // $restart.on('click', () => {
  //   level = 1;
  //   sequence = [
  //   [0, 2],
  //   [2, 4],
  //   [1, 1]
  // ];
  //   clearGame();
  // restartGame();
  // });



});

// event.target
