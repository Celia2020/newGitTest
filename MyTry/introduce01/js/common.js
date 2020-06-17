// common file（ header nav ）

var OpenMenu = document.querySelectorAll(".OpenMenu");
OpenMenu.forEach((OpenMenu) =>
  OpenMenu.addEventListener("click", (e) => {
    document.querySelector(".mainmenu").classList.add("show");
  })
);

var CloseMenu = document.querySelectorAll(".close");
CloseMenu.forEach((closebtn) =>
  closebtn.addEventListener("click", (e) => {
    document.querySelector(".mainmenu").classList.remove("show");
  })
);

var CloseMenu = document.querySelectorAll(".closeself");
CloseMenu.forEach((closeself) =>
  closeself.addEventListener("click", (e) => {
    document.querySelector(".closeself").style.display = "none";
  })
);