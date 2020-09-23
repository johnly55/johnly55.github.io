function floating(){
  var elem = document.getElementsByClassName("overlay-parent")[0];
  var pos = 0;
  var id = setInterval(frame, 45);
  var isFalling = false;
  function frame(){
    if(pos == 0){
      pos++;
      isFalling = false;
    }else if(!isFalling){
      pos++;
      if(pos > 30){
        isFalling = true;
      }
    }else if(isFalling){
      pos--;
    }
    elem.style.top = pos + 'px';
  }
}

floating();
