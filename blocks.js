console.log('JQ');

$(document).ready(function(){
  $('.color-button').on('click', function(){
    console.log('on click for color-button');
    var cubDiv = "<div class='color-cube " + $(this).data('color') + "'></div>";
    console.log(cubDiv);
$('.container').append(cubDiv);
  });

  //var cubeCounter = ();

});
