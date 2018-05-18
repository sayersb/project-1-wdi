console.log('hello');

const grid = [
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0]
];

$(()=>{

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
      });

      $element.appendTo('#board');
    });
  });



});


event.target
