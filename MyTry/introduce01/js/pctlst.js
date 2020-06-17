// knowledge percent list //
//
var SectionArr = document.querySelectorAll(".mainarea section");
// console.log(SectionArr[0].getAttribute('id'));   >>> example

SectionArr.forEach(myfuc);

function myfuc(e) {
  // e = SectionArr
  var IDarray = e.getAttribute("id");
  var Ppct = document.querySelector("#" + IDarray + " .Ppct span").innerText;
  var UFpct = document.querySelector("#" + IDarray + " .UFpct span").innerText;

  // Proficiency width & marginLeft control
  document.querySelector(
    "#" + IDarray + " .Ppct span"
  ).style.width = `${Ppct}%`;
  document.querySelector(
    "#" + IDarray + " .Ppct span"
  ).style.marginLeft = `${100 - Ppct}%`;

  // UsageFrequency width & marginLeft control
  document.querySelector(
    "#" + IDarray + " .UFpct span"
  ).style.width = `${UFpct}%`;
  document.querySelector(
    "#" + IDarray + " .UFpct span"
  ).style.marginRight = `${100 - UFpct}%`;
}

// floating layer show //
//
var btnMores = document.querySelectorAll(".more");
// console.log(btnMores);
btnMores.forEach((btnMore) =>
  btnMore.addEventListener("click", (e) => {
    // console.log(btnMore);
    // console.log(e);
    let btnMorebyID = btnMore.parentNode.parentNode.parentNode.parentNode.getAttribute(
      "id"
    );
    // console.log(btnMorebyID);
    document.querySelector("#" + btnMorebyID + " .fltlyr").style.display =
      "block";
  })
);

// floating layer close start //
//
var CloseMenus = document.querySelectorAll(".closebtn");
CloseMenus.forEach((CloseMenu) =>
  CloseMenu.addEventListener("click", (e) => {
    let btnClosebyID = CloseMenu.parentNode.parentNode.parentNode.getAttribute(
      "id"
    );
    document.querySelector("#" + btnClosebyID + " .fltlyr").style.display =
      "none";
  })
);
