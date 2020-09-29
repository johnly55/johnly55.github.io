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

var rocketTick = 20;
var countDownSeconds = 3;
var tickCountDown = countDownSeconds / (rocketTick / 1000);

function movingRocket() {
  var rocketArea = document.getElementById('rocket-area');
  var rocket = new Image(50, 80);
  rocket.src = "assets/images/rocket.png";
  rocket.style.position = "absolute";
  rocket.style.transform = "rotate(105deg)"

  var posRandomizer = Math.floor(Math.random() * rocketArea.offsetWidth) - 600;
  var posX = 0 + posRandomizer;
  var posY = -100;
  var intervals = setInterval(function() {
    if (tickCountDown > 0) {
      tickCountDown--;
      return;
    }
    posX += 10;
    posY += 2.5;
    rocket.style.top = posY + "px";
    rocket.style.left = posX + "px";
    if (posX > rocketArea.offsetWidth + 100 && posY > rocketArea.offsetHeight + 50) {
      clearInterval(intervals);
      rocket.parentNode.removeChild(rocket);
      rocketActive = false;
      countDownSeconds = 1.5;
      tickCountDown = countDownSeconds / (rocketTick / 1000);
    }
  }, rocketTick);
  rocketArea.appendChild(rocket);
}

function slideShow() {
  var listOfSlideShows = document.getElementsByClassName('slideshows');
  for (var i = 0; i < listOfSlideShows.length; i++) {
    listOfSlideShows[i].children[0].style.display = "block";
    listOfSlideShows[i].children[1].style.display = "none";
  }
  var index = false;
  var intervals = setInterval(function() {
    for (var i = 0; i < listOfSlideShows.length; i++) {
      if (index == true) {
        listOfSlideShows[i].children[0].style.display = "block";
        listOfSlideShows[i].children[1].style.display = "none";
      } else {
        listOfSlideShows[i].children[0].style.display = "none";
        listOfSlideShows[i].children[1].style.display = "block";
      }
    }
    index = !index;
  }, 2000);
}

function iconJump(icon) {
  var maxJump = 6;
  var speed = 2;
  var jumpPos = 0;

  var mode = -1;
  if (mode == -1) {
    mode = 0;
    var intervals = setInterval(function() {
      switch (mode) {
        case 0:
          jumpPos = jumpPos + 1 * speed;
          icon.style.top = -jumpPos + "px";
          if (jumpPos >= maxJump)
            mode = 1;
          break;
        case 1:
          jumpPos = jumpPos - 1 * speed;
          icon.style.top = -jumpPos + "px";
          if (jumpPos <= 0) {
            mode = 2;
            icon.style.top = 0 + "px";
          }
          break;
        case 2:
          clearInterval(intervals);
      }
    }, 20);
  }
}

window.onscroll = function() {
  navigationBar()
};

var navbar = document.getElementById("navigation-bar");
var sticky = navbar.offsetTop;

function navigationBar() {
  if (window.pageYOffset >= sticky) {
    if (!navbar.classList.contains("sticky"))
      navbar.classList.add("sticky");
  } else {
    if (navbar.classList.contains("sticky"))
      navbar.classList.remove("sticky");
  }
}

floatingObject('overlay-parent', 20, 48);
floatingObject('among-us-guy', 20, 0, false);
movingRocket();
slideShow();
//TODO: Add a filter for projects seen
//TODO: Change Navigation Bar Color as you scroll
//TODO: Adjust Navigation Bar Size to screen
//TODO: Adjust ratios in about me section
//TODO: Add directions to games
