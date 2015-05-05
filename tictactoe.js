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

    // if ($('#a1').text() === $('#a2').text() && $('#a2').text() === $('#a3').text()){
    //   alert("Game over");
    // } else if ($('#b1').text() === $('#b2').text() && $('#b2').text() === $('#b3').text()){
    //   alert("Game over");
    // } else if ($('#c1').text() === $('#c2').text() && $('#c2').text() === $('#c3').text()){
    //   alert("Game over");
    // } else if ($('#a1').text() === $('#b1').text() && $('#b1').text() === $('#c1').text()){
    //   alert("Game over");
    // } else if ($('#a2').text() === $('#b2').text() && $('#b2').text() === $('#c2').text()){
    //   alert("Game over");
    // } else if ($('#a3').text() === $('#b3').text() && $('#b3').text() === $('#c3').text()){
    //   alert("Game over");
    // } else if ($('#c1').text() === $('#b2').text() && $('#b2').text() === $('#a3').text()){
    //   alert("Game over");
    // } else if ($('#a1').text() === $('#b2').text() && $('#b2').text() === $('#c3').text()){
    //   alert("Game over");
    // } else if (count===9){
    //   alert("Its a Tie");
    // }

    var win_condtions = [
      ["a1", "a2", "a3"],
      ["b1", "b2", "b3"],
      ["c1", "c2", "c3"],

      ["a1", "b1", "c1"],
      ["a2", "b2", "c2"],
      ["a3", "b3", "c3"],

      ["c1", "b2", "a3"],
      ["a1", "b2", "c3"]

    ]
    function check_line(list) {
      return $('#' + list[0]).text() === $('#' + list[1]).text() &&
             $('#' + list[1]).text() === $('#' + list[2]).text() &&
             $('#' + list[0]).text() != "" &&
             $('#' + list[1]).text() != "" &&
             $('#' + list[2]).text() != ""
    }

    for (var i = 0; i < win_condtions.length; i++) {

      if (check_line(win_condtions[i])) {
        alert("Game over");
      }
    };
  });

});


