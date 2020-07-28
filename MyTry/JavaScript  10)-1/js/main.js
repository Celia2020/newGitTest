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
  movement = setTimeout("moveMessage()",1000);

  if(!document.getElementById("message2")) return false;
  var elem2 = document.getElementById("message2");
  elem2.style.position = "absolute";
  elem2.style.left = "50px";
  elem2.style.top = "100px";
  moveElement("message2",200,100,10);

console.log(parseFloat("39.89j90"));
console.log(parseFloat("39.8990"));
console.log(parseFloat("39.0"));

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
  elem.style.left = Xpos + "px";
  elem.style.top = Ypos + "px";
  movement = setTimeout("moveMessage()",10);
}

function moveElement(elementID,final_x,final_y,interval){
  if(!document.getElementById) return false;
  if(!document.getElementById(elementID)) return false;
  var elem2 = document.getElementById(elementID);
  var Xpos = parseInt(elem2.style.left);
  var Ypos = parseInt(elem2.style.top);
  if(Xpos == final_x && Ypos == final_y){
    return true;
  }
  if(Xpos < final_x){
    Xpos++;
  }
  if(Xpos > final_x){
    Xpos--;
  }
  if(Ypos < final_y){
    Ypos++;
  }
  if(Ypos > final_y){
    Ypos--;
  }
  elem2.style.left = Xpos + "px";
  elem2.style.top = Ypos + "px";
  var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
  movement = setTimeout(repeat, interval);
}

// Final: add all functions
addLoadEvent(positionMessage);