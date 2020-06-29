// setTimeout(() => {
//   var W_W = document.documentElement.clientWidth;

//   if (W_W < 720) {
//     var getkeywordSearchHtml = document.querySelector(
//       ".primary #keywordSearch"
//     );
//     var getservice = document.getElementById("service");
//     getservice.insertBefore(getkeywordSearchHtml, getservice.childNodes[2]);
//   } else {
//     return false;
//   }
// }, 300);

window.onload = function(){
  var W_W = document.documentElement.clientWidth;

  if (W_W < 720) {
    var getkeywordSearchHtml = document.querySelector(
      ".primary #keywordSearch"
    );
    var getserviceCS = document.getElementById("serviceCS");
    insertBefore(getkeywordSearchHtml, getserviceCS);

    var gethistoryHtml = document.querySelector(".module-history-domarea");
    insertBefore(gethistoryHtml, getkeywordSearchHtml);

  } else {
    return false;
  }
}