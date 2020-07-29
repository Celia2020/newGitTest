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
// 第185頁
function prepareSlideshow(){
  if(!document.getElementById) return false;
  if(!document.getElementsByTagName) return false;
  if(!document.getElementById("linklist")) return false;

  var slideshow = document.createElement("div");
  slideshow.setAttribute("id","slideshow");
  var preview = document.createElement("img");
  preview.setAttribute("id","preview");
  preview.setAttribute("src","images/topics.gif");
  preview.setAttribute("alt","building blocks of web design");
  slideshow.appendChild(preview);
  preview.style.position = "absolute";

  var list = document.getElementById("linklist");
  insertAfter(slideshow,list);

  var links = list.getElementsByTagName("a");
  
  links[0].onmousemove = function(){
    moveElement("preview",-100,0,10);
  }

  links[1].onmousemove = function(){
    moveElement("preview",-200,0,10);
  }

  links[2].onmousemove = function(){
    moveElement("preview",-300,0,10);
  }
}

function moveElement(elementID,final_x,final_y,interval){
  if(!document.getElementById) return false;
  if(!document.getElementById(elementID)) return false;
  var elem = document.getElementById(elementID);
  if(!elem.style.left){
    elem.style.left = 0;
  }
  if(!elem.style.top){
    elem.style.top = 0;
  }

  if(elem.movement){
    clearTimeout(elem.movement);
  }

  var Xpos = parseInt(elem.style.left);
  var Ypos = parseInt(elem.style.top);
  var dist = 0;
  if(Xpos == final_x && Ypos == final_y){
    return true;
  }
  if(Xpos < final_x){
    dist = Math.ceil((final_x - Xpos)/10);
    Xpos = Xpos + dist;
  }
  if(Xpos > final_x){
    dist = Math.ceil((Xpos - final_x)/10);
    Xpos = Xpos - dist;
  }
  if(Ypos < final_y){
    dist = Math.ceil((final_y - Ypos)/10);
    Ypos = Ypos + dist;
  }
  if(Ypos > final_y){
    dist = Math.ceil((Ypos - final_y)/10);
    Ypos = Ypos - dist;
  }
  elem.style.left = Xpos + "px";
  elem.style.top = Ypos + "px";
  var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
  elem.movement = setTimeout(repeat, interval);
}

function insertAfter(newElement, targetElement){
  var parent = targetElement.parentNode;
  if(parent.lastChild == targetElement){
    parent.appendChild(newElement);
  }else{
    parent.insertBefore(newElement,targetElement.nextSibling);
  }
}

// Final: add all functions
addLoadEvent(prepareSlideshow);