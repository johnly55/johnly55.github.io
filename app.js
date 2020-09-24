function floatingHelmet() {
  var obj = document.getElementsByClassName('overlay-parent')[0];
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
  }, 50);
}

function chanceToStartRocket()

function movingRocket(){
  var rocket = new Image();
  rocket.src = "assets/images/rocket.png";
  rocket.style.length = "50px";
  rocket.style.width = "50px";
  rocket.style.position = "absolute";
  rocket.style.transform = "rotate(105deg)"
  var thing = rocket.style.overlow;

  var posX = 2000;
  var posY = -200;
  var intervals = setInterval(function(){
    posX -= 2;
    posY += 0.5;
    rocket.style.top = posY + "px";
    rocket.style.right = posX + "px";
    if(posX < -100){
      clearInterval(intervals);
    }
  }, 5);

  document.getElementsByClassName('rocket-area')[0].appendChild(rocket);
}

floatingHelmet();
movingRocket();
