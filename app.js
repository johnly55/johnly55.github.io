function floatingHelmet() {
  var obj = document.getElementById('overlay-parent');
  var posY = 0;
  var isFalling = true;
  var range = 25;
  setInterval(function() {
    if (isFalling == true) {
      posY--;
    } else {
      posY++;
    }
    if (posY > range || posY < 0 - range) {
      isFalling = !isFalling;
    }
    obj.style.top = posY + "px";
    chanceToStartRocket();
  }, 60);
}

var rocketActive = true;

function chanceToStartRocket() {
  if (rocketActive) {
    return;
  }
  var chance = Math.floor(Math.random() * 1000);
  if (chance > 990) {
    rocketActive = true;
    movingRocket();
  }
}

function movingRocket() {
  var rocket = new Image();
  rocket.src = "assets/images/rocket.png";
  rocket.style.length = "50px";
  rocket.style.width = "50px";
  rocket.style.position = "absolute";
  rocket.style.transform = "rotate(105deg)"

  var posXVariety = Math.floor(Math.random() * 1000) - 400;
  var posX = 0 + posXVariety;
  var posY = -100;
  var intervals = setInterval(function() {
    posX += 10;
    posY += 2.5;
    rocket.style.top = posY + "px";
    rocket.style.left = posX + "px";
    if (posX > 1400 && posY > 300) {
      clearInterval(intervals);
      rocket.parentNode.removeChild(rocket);
      rocketActive = false;
    }
  }, 30);
  document.getElementById('rocket-area').appendChild(rocket);
}

floatingHelmet();
movingRocket();
