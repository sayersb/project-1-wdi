console.log('hello');

const grid = [
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0]
];

let sequence = [
  [0, 2],
  [2, 4],
  [1, 1]
];


const computerChoice = [];
let playerChoice = [];
let score = 0;
let clickCount = 0;


$(()=>{

  const $button = $('#start');
  const $restart = $('#restart');
  let score = $('#levelScreen');

  const audio =  document.querySelector('#audio');
  audio.src = './sounds/theChain.mp3';
  audio.play();

  const songs =  document.querySelector('#songs');


  // USER CLICKS IN BOXES TO SELECT / LIGHT UP
  $('#board').on('click', 'div', function(e){
    console.log(clickCount, sequence);
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
      if(JSON.stringify(sequence) == JSON.stringify(playerChoice)){
        score++;
        alert('winner winner chicken dinner');
        clickCount = 0;
        playerChoice = [];
        computerMoves();
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

  // function checkWin(){
  //  user clicked the wrong color (end the game)
  //  user entered the right color, but is not finished with the sequence (do nothing)
  //  user entered the right color and just completed the sequence (start a new round)
  //   }
  // }


  function resetDivs() {
    $('div').removeClass('computerChoices');
  }


  // START BUTTON
  $button.on('click', () => {

    console.log(sequence);
    sequence.forEach((cell, i, array) => {
      const finalIndex = (array.length ) * 1200;
      setTimeout(function(){
        $('#board div').filter(function() {
          return $(this).data().x === sequence[i][0] && $(this).data().y === sequence[i][1];
        }).addClass('computerChoices');
        console.log(`We've just hit timeout ${i}`);
      }, 1000 * i);
      setTimeout(resetDivs, finalIndex);
    });
  });

  $('#songs').on('click', () => {
    audio.src = './sounds/django.mp3';
    audio.play();
  });


  $restart.on('click', () => {
    score = 1;
    return sequence = [
      [0, 2],
      [2, 4],
      [1, 1]
    ];
  });


});

// event.target
