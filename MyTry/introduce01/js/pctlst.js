// knowledge percent list //
//
var SectionArr = document.querySelectorAll('.mainarea section');
// console.log(SectionArr[0].getAttribute('id'));   >>> example

SectionArr.forEach(myfuc);

function myfuc(e){
  // e = SectionArr
  var IDarray = e.getAttribute('id');
  var Ppct = document.querySelector('#' + IDarray + ' .Ppct span').innerText;
  var UFpct = document.querySelector('#' + IDarray + ' .UFpct span').innerText;

  // Proficiency width control
  var SpanWidthPpct = document.querySelector('#' + IDarray + ' .Ppct span').style.width = `${Ppct}%`;
  var SpanMarginLftPpct = document.querySelector('#' + IDarray + ' .Ppct span').style.marginLeft = `${100 - Ppct}%`;

  // UsageFrequency width control
  var SpanWidthUFpct = document.querySelector('#' + IDarray + ' .UFpct span').style.width = `${UFpct}%`;
  var SpanMarginRightUFpct = document.querySelector('#' + IDarray + ' .UFpct span').style.marginRight = `${100 - UFpct}%`;
}

// floating layer show //
//
var btnMores = document.querySelectorAll(".more");
// console.log(btnMores);
btnMores.forEach((btnMore) =>
  btnMore.addEventListener("click", (e) =>{
    // console.log(btnMore);
    // console.log(e);
    let btnMorebyID = btnMore.parentNode.parentNode.parentNode.parentNode.getAttribute('id');
    // console.log(btnMorebyID);
    document.querySelector('#' + btnMorebyID + ' .fltlyr').style.display = "block"; 
}));



// floating layer close start //
//
var CloseMenus = document.querySelectorAll('.closebtn');
// console.log(CloseMenus);
CloseMenus.forEach((CloseMenu) =>
  CloseMenu.addEventListener("click", (e) =>{
    // console.log(CloseMenu);
    let btnClosebyID = CloseMenu.parentNode.parentNode.parentNode.getAttribute('id');
    // console.log(btnClosebyID);
    document.querySelector('#' + btnClosebyID + ' .fltlyr').style.display = "none";
}));