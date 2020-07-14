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
// 第166頁
function highLightRows(){
  var rows = document.getElementsByTagName("tr");
  for(let i=0; i<rows.length; i++){
    console.log(rows[i]);
    rows[i].onmouseover = function(){
      rows[i].style.fontWeight = "bold";
    }
    rows[i].onmouseout =function(){
      rows[i].style.fontWeight = "normal";
    }
  }
}

// Final: add all functions
addLoadEvent(highLightRows);