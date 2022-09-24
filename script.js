function drawSpaceshipOnCanvas(x, y, width, height) {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + width, y);
  ctx.lineTo(x + width, y + height);
  ctx.lineTo(x, y + height);
  ctx.lineTo(x, y);
  ctx.fill();
}

function clearSpaceshipOnCanvas(x, y, width, height) {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.clearRect(x, y, width, height);
}

// move spaceship with arrow keys and clear old spaceship
document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 37:
      clearSpaceshipOnCanvas(x, y, width, height);
      x = x - 10;
      drawSpaceshipOnCanvas(x, y, width, height);
      break;
    case 38:
      clearSpaceshipOnCanvas(x, y, width, height);
      y = y - 10;
      drawSpaceshipOnCanvas(x, y, width, height);
      break;
    case 39:
      clearSpaceshipOnCanvas(x, y, width, height);
      x = x + 10;
      drawSpaceshipOnCanvas(x, y, width, height);
      break;
    case 40:
      clearSpaceshipOnCanvas(x, y, width, height);
      y = y + 10;
      drawSpaceshipOnCanvas(x, y, width, height);
      break;
  }
}
  

// draw spaceship
var x = 100;
var y = 100;
var width = 30;
var height = 30;

drawSpaceshipOnCanvas(x, y, width, height);



// I am sending you the codedump of JavaScript canvas spaceship movement that you can see here: https://codedump.io/share/2uVHrIwW8r0t/1

// drawSpaceshipOnCanvas(20, 20, 30, 30);