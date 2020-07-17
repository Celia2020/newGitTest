function addLoadEvent(func){
  var oldonload = window.onload;
  if(typeof window.onload !='function'){
    window.onload = func;
  }else{
    window.onload = function(){
      oldonload();
      func();
    }
  }
}

// JavaScript DOM編程藝術（第2版）上的實例
// 第175頁
function positionMessage(){
  if(!document.getElementById) return false;
  if(!document.getElementById("message")) return false;
  var elem = document.getElementById("message");
  elem.style.position = "absolute";
  elem.style.left = "50px";
  elem.style.top = "100px";
  movement = setTimeout("moveMessage()",5000);
}

function moveMessage(){
  if(!document.getElementById) return false;
  if(!document.getElementById("message")) return false;
  var elem = document.getElementById("message");
  var Xpos = parseInt(elem.style.left);
  var Ypos = parseInt(elem.style.top);
  
  if(Xpos == 200 && Ypos == 100){
    return true;
  }
  if(Xpos < 200){
    Xpos++;
  }
  if(Xpos > 200){
    Xpos--;
  }
  if(Ypos < 100){
    Ypos++;
  }
  if(Ypos > 100){
    Ypos--;
  }
}

// Final: add all functions
addLoadEvent(positionMessage);