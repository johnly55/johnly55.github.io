function floatingHelmet() {
  var obj = document.getElementsByClassName('overlay-parent')[0];
  var posY = 0;
  var isFalling = true;
  var range = 25;
  var intervals = setInterval(function() {
    if (isFalling == true) {
      posY--;
    } else {
      posY++;
    }
    if (posY > range || posY < 0 - range) {
      isFalling = !isFalling;
    }
    obj.style.top = posY + "px";
  }, 50);
}

floatingHelmet();
