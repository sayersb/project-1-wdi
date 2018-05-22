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
  [1, 1],
  [4, 5],
  [3, 3],
  [5, 4]
];


const computerChoice = [];
const playerOneChoice = [];
const playerTwoChoice = [];
let counter = 0;
let score = 0;
let clickCount = 0;


$(()=>{

  const $button = $('#start');
  const $restart = $('#restart');
  const $score = ('#levelScreen');


  // BOARD
  $('#board').on('click', 'div', function(e){
    // console.log($('#cell-address').val(`${$(this).data('x')}-${$(this).data('y')}`));  //shows cell we're hovering over on browser page
    e.target.classList.add('userChoices');
    clickCount++;
    console.log(clickCount);
    if(clickCount>sequence.length){
      alert('YOU LOSE LOSER');
    }
  });

  $.each(grid, (i, row)=>{
    $.each(row, (j, cell)=>{
      const $element = $('<div />');
      if(cell === 0){
        $element.addClass('blank');
      } else if(cell === 1){
        $element.addClass('path');
      }
      //could add numbers 1  - 7 to relate to boxes to light up then call the class each time??..

      $element.data({x: i, y: j});   // shows the cell you're in with few lines below

      $element.on('click', function(){
        console.log($(this).data());
        const $element = $(this);

      });
      $element.appendTo('#board');
    });
  });

  // let testDiv = $('#board div').filter(function() {
  //   return $(this).data().x === 0 && $(this).data().y === 2;
  // }).addClass('computerChoices');
  // console.log(testDiv);


  function computerMoves(){
    sequence.push([(Math.floor(Math.random() * 5)), (Math.floor(Math.random() * 5))]);
  }

  // function userMoves(){
  //   for( var i = 0; i < sequence.length; i++){}
  //   if(userChoices)
  //need to check boxes clicked match sequence }


  function resetDivs() {
    $('div').removeClass('computerChoices');

  }


  //
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


    // $( '#path').each(function(){
    //   $( this).animate();
    // });
  });




  // sequence.forEach((cell, i) => {
  //
  //   $('#board div').filter(function() {
  //     return $(this).data().x === sequence[i][0] && $(this).data().y === sequence[i][1];
  //   }).addClass('computerChoices');
  // });



  // restart button
  // $restart.on('click', () => {
  //   level = 0;
  //   clearGame();
  // restartGame();
  // });



});

// event.target
