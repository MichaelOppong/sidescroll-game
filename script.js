/* global $ */

function showBoard() {
    $('#start').hide();
    $('#board').show();
}

function jump() {
    
}

$(document).ready(function() {
   $('#start').click(function() {
      showBoard();
   });
   function checkCollision() {
    var blueLeft = $("#mario").offset().left;
    var redLeft = $("#enemy").offset().left;
    var blueRight = blueLeft + $("#mario").width();
    var redRight = redLeft + $("#enemy").width();
    if(blueRight > redLeft && blueLeft < redRight) {
        alert("Congratulations you played yourself!")
        $("body").css("background-image", "url('https://m.popkey.co/617db4/QlYZV_s-200x150.gif')");
    }
}
   $('#jump').mousedown(function() {
      $('#mario').css('bottom', '175px');
      $('#coin').hide();
   });
   
   var count = 1;
   
    $('#jump').mouseup(function() {
      $('#mario').css('bottom', '60px');
      $('#coin').show();
      $('#count').text(count++);
   });
   
   $("body").keydown(function(e) {
      if(e.keyCode == 37) { // left
              $("#mario").css("left", $("#mario").offset().left - 30);
              checkCollision();
          
      }
      else if(e.keyCode == 39) { // right
                     $("#mario").css("left", $("#mario").offset().left + 30);
        checkCollision();

      } 
      else if(e.keyCode == 38) { // top
            $('#mario').css('bottom', '175px');
                     //$("#mario").css("bottom", $("#mario").offset().bottom + 30);
        checkCollision();

      }
      else {
          return;
      }
    });
     $("body").keyup(function(e) {
          if(e.keyCode == 38){
          $('#mario').css('bottom', '60px');
          }
  else {
          return;
      }
                        checkCollision();

     });


});