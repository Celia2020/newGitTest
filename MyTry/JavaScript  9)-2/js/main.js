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

// 方法1
// 下面是我自己寫的
// function stripeTables(){
//   if(!document.querySelectorAll) return false;
//   var tbodyTrs = document.querySelectorAll("table tbody tr");
//   for(let i=0; i<tbodyTrs.length; i++){
//     var flg = i%2;
//     if(!flg){
//       tbodyTrs[i].style.backgroundColor = "#ffc";
//     }else{
//       tbodyTrs[i].style.backgroundColor = "#fff";
//     }
//   }
// }

// 方法2
// JavaScript DOM編程藝術（第2版）上的實例
// 第164頁
function stripeTables(){
  if(!document.getElementsByTagName) return false;
  var tables = document.getElementsByTagName("table");
  var odd, rows;
  for(var i=0; i<tables.length; i++){
    odd = false;
    rows = tables[i].getElementsByTagName("tr");
    for(var j=0; j<rows.length; j++){
      if(odd == true){
        rows[j].style.backgroundColor = "#ffc";
        odd = false;
      }else{
        odd = true;
      }
    }
  }
}

// Final: add all functions
addLoadEvent(stripeTables);