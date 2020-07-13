// 利用addLoadEvent可實現在onload時增加任意數量函數
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != "function") {
    window.onload = func;
  } else {
    window.onload = function () {
      oldonload();
      func();
    };
  }
}

// 自行編寫的insertAfter函數
function insertAfter(newElement, targetElement){
  var parent = targetElement.parentNode;
  if (parent.lastChild == targetElement){
 parent.appendChild(newElement);
  }else{
 parent.insertBefore(newElement,targetElement.nextSibling);
  }
}

// addLoadEvent函數的實例使用
addLoadEvent(displayAbbreviations);

// 一個為文檔創建“縮略語列表”的函數
// 方法1
// 下面是我自己寫的
// function displayAbbreviations(){
//   var abbrs = document.getElementsByTagName("abbr");
//   var abbrArray = new Array();
//   for(let i=0; i<abbrs.length; i++){
//     var abbrNames = abbrs[i].innerHTML;
//     var abbrtitles = abbrs[i].title;
//     abbrArray[abbrNames] = abbrtitles;
//   }

//   var crDL = document.createElement("dl");
//   var bodyEle = document.getElementsByTagName("body");
//   var contentsDL= "";
//   for(abbrNames in abbrArray){
//     contentsDL += "<dt>"+abbrNames+"</dt><dd>"+abbrArray[abbrNames]+"</dd>";
//   }
//   crDL.innerHTML = contentsDL;
//   bodyEle[0].appendChild(crDL);
//   var comt = "The list above is created by JavaScript.";
//   var comtEle = document.createElement("span");
//   comtEle.innerHTML = comt;
//   bodyEle[0].insertBefore(comtEle,crDL);
// }

// 一個為文檔創建“縮略語列表”的函數
// 方法2
// JavaScript DOM編程藝術（第2版）上的實例
// 第128頁
function displayAbbreviations(){

  // 檢查函數中用到的方法是否存在
  if (!document.getElementsByTagName) return false;
  if (!document.createElement) return false;
  if (!document.createTextNode) return false;
  // 上述也可以簡化成
  // if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;

  var abbreviations = document.getElementsByTagName("abbr");

  // 儅文檔中查找不到abbr元素時，直接跳出當前函數
  if (abbreviations.length<1) return false;

  var defs = new Array();
  for(let i=0; i<abbreviations.length; i++){
    var current_abbr = abbreviations[i];
    if(current_abbr.childNodes.length<1) continue;
    var definition = current_abbr.getAttribute("title");
    var key = current_abbr.lastChild.nodeValue;
    defs[key] = definition;
  }

  var dlist = document.createElement("dl");
  for (key in defs){
    var definition = defs[key];
    var dtitle = document.createElement("dt");
    var dtitle_text = document.createTextNode(key);
    dtitle.appendChild(dtitle_text);
    var ddesc = document.createElement("dd");
    var ddesc_text = document.createTextNode(definition);
    ddesc.appendChild(ddesc_text);
    dlist.appendChild(dtitle);
    dlist.appendChild(ddesc);
  }

  var header = document.createElement("h2");
  var header_text = document.createTextNode("Abbreviations");
  header.appendChild(header_text);
  document.body.appendChild(header);
  document.body.appendChild(dlist);

}