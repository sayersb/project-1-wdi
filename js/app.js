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
  [3, 4],
  [3, 2],
  [1, 4],
  [3, 5]
];

const computerChoice = [];
const playerOneChoice = [];
const playerTwoChoice = [];
let counter = 0;
let score = 0;



$(()=>{

  const $button = $('#start');

// BOARD
  $('#board').on('mouseover', 'div', function(){
    $('#cell-address').val(`${$(this).data('x')}-${$(this).data('y')}`);  //shows cell we're hovering over on browser page
  });

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

  function computerMoves(){
    sequence.push([(Math.floor(Math.random() * 5)), (Math.floor(Math.random() * 5))]);
  }

// need to get the random numbers generated by computer to relate to grid squares to light up
//
  $button.on('click', () => {
    computerMoves();
    console.log(sequence);
  });




});

// event.target
