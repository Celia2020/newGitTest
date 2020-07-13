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
// 第145頁
function displayAccessKeys(){
  if(!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
  var links = document.getElementsByTagName("a");
  var akeys = new Array();
  for(let i=0; i<links.length; i++){
    var current_link = links[i];
    if(!current_link.getAttribute("accesskey")) continue;
    var key = current_link.getAttribute("accesskey");
    var text = current_link.lastChild.nodeValue;
    akeys[key] = text;
  }
  var list = document.createElement("ul");
  for(key in akeys){
    var text = akeys[key];
    var str = key +": "+text;
    var item = document.createElement("li");
    var item_text = document.createTextNode(str);
    item.appendChild(item_text);
    list.appendChild(item);
  }
  var header = document.createElement("h3");
  var header_text = document.createTextNode("Accesskeys");
  header.appendChild(header_text);
  document.body.appendChild(header);
  document.body.appendChild(list);
}


// Final: add all functions
addLoadEvent(displayAccessKeys);