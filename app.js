function floatingObject(objID, floatRange = 20, offset = 0, startFalling = true, startingPosY = 0) {
  var obj = document.getElementById(objID);
  var posY = startingPosY;
  setInterval(function() {
    if (startFalling == true) {
      posY++;
    } else {
      posY--;
    }
    if (posY > floatRange || posY < 0 - floatRange) {
      startFalling = !startFalling;
    }
    obj.style.top = (posY + offset) + "px";
    chanceToStartRocket();
  }, 60);
}

var rocketActive = true;

function chanceToStartRocket() {
  if (rocketActive) {
    return;
  }
  var chance = Math.floor(Math.random() * 1000);
  if (chance > 995) {
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

floatingObject('overlay-parent', 20, 48);
movingRocket();
