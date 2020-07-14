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
// 第159頁
function styleHeaderSiblings(){
  if(!document.getElementsByTagName) return false;
  var h1List = document.getElementsByTagName("h1");
  var elem;
  for(let i=0; i<h1List.length; i++){
    elem = getNextElement(h1List[i].nextSibling);
    elem.style.fontWeight = "bold";
    elem.style.fontSize = "1.2em";
    elem.style.color = "red";
  }
}

function getNextElement(node){
  if(node.nodeType == 1){
    return node;
  }
  if(node.nextSibling){
    return getNextElement(node.nextSibling);
  }
  return null;
}

// Final: add all functions
addLoadEvent(styleHeaderSiblings);