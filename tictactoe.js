$(document).ready(function(){
  var count = 0;
  $('td').on('click',function(){
    if (count % 2  === 0){
     $(this).text('X');
    } else {
      $(this).text('O');
    }
    count++;
    $(this).off('click')
  });
});


