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
function styleHeaderSiblings(tag, theclass){
  if(!document.getElementsByTagName) return false;
  var h1List = document.getElementsByTagName(tag);
  var elem;
  for(let i=0; i<h1List.length; i++){
    elem = getNextElement(h1List[i].nextSibling);
    // 寫法一
    // elem.style.fontWeight = "bold";
    // elem.style.fontSize = "1.2em";
    // elem.style.color = "red";
    // 寫法二 前提：需在css文件裏有intro這個class設置。
    // elem.setAttribute("class","intro");
    // 寫法三 前提：需在css文件裏有intro這個class設置。
    // 這個做法和innerHTML一樣，是清空原有class，替換成intro，而不是追加class名
    // elem.className = "intro";
    // 如果要用追加class名，可以用以下語句。
    // elem.className += "intro";
    // 更合理的方法是，自主增加一個addClass函數，這樣就不容易出錯了
    // addClass(elem,"intro");
    addClass(elem,theclass);
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

function addClass(element, value){
  if(!element.className){
    element.className = value;
  }else{
    newClassName  = element.className;
    newClassName += " ";
    newClassName += value;
    element.className = newClassName;
  }
}

// Final: add all functions
addLoadEvent(function(){
  styleHeaderSiblings("h1","intro");
});