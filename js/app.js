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
  [0, 2]
];


const computerChoice = [];
let playerChoice = [];
let score  = 1;
let clickCount = 0;
let player = [];


$(()=>{

  const $button = $('#start');
  const $restart = $('#restart');
  // let score = $('#levelScreen');
  // $('levelScreen').innerHTML = score;
  document.getElementById('levelScreen').innerHTML = score;
  document.getElementById('player').innerHTML = [];

  const audio =  document.querySelector('#audio');
  audio.src = './sounds/theChain.mp3';
  audio.play();

  const songs =  document.querySelector('#songs');

  const unchained = document.querySelector('#unchained');


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

        clickCount = 0;
        playerChoice = [];
        score++;
        console.log(score);
        document.getElementById('levelScreen').innerHTML = score;
        document.getElementById('player').innerHTML = 'WINNER WINNER CHICKEN DINNER... Push the next level button to go again...';
        // alert('WINNER WINNER CHICKEN DINNER');
        computerMoves();
      } else {
        document.getElementById('levelScreen').innerHTML = 1;
        document.getElementById('player').innerHTML = 'YOU LOSE LOSER... Refresh the browser so your mate can have a go.. try to remember your score';

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

      $element.on('click', function(){   //CONSOLE.LOG GRID SQUARE CLICKED IN
        console.log($(this).data());
        const $element = $(this);
      });
      $element.appendTo('#board');
    });
  });


  //Computer Moves, implemented after start/next level button clicked
  function computerMoves(){
    sequence.push([(Math.floor(Math.random() * 5)), (Math.floor(Math.random() * 5))]);
  }

//REMOVE COMPUTER CHOICE OPTIONS AFTER LIGHTING UP
  function resetDivs() {
    $('div').removeClass('computerChoices');
  }


  // START / NEXT LEVEL BUTTON
  $button.on('click', () => {
    document.getElementById('player').innerHTML = [];
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

//CHAINGE SONG BUTTON
  $('#songs').on('click', () => {
    audio.src = './sounds/django.mp3';
    audio.play();
  });

  $('#unchained').on('click', () => {
    audio.src = './sounds/melody.mp3';
    audio.play();
  });


//RESTART BUTTON
  $restart.on('click', () => {
    document.getElementById('levelScreen').innerHTML = 1;
    document.getElementById('player').innerHTML = [];
    score = 1;
    sequence = [
      [0, 2],
    ];
    playerChoice = [];
  });


});

// event.target
