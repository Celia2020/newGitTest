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

function displayCitations(){
  var quotes = document.getElementsByTagName("blockquote");
  for (let i=0; i<quotes.length; i++){
    if(!quotes[i].getAttribute("cite")) continue;
    var citeURL = quotes[i].getAttribute("cite");
    var quoteElements = quotes[i].getElementsByTagName("*");
    if(quoteElements.length<1) continue;
    var elem = quoteElements[quoteElements.length-1];

    var link = document.createElement("a");
    var link_text = document.createTextNode("source");
    link.appendChild(link_text);
    link.setAttribute("herf",citeURL); 

    var superscript = document.createElement("sup");
    superscript.appendChild(link);

    elem.appendChild(superscript);
  }
}

addLoadEvent(displayCitations);