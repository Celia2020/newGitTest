// common file（ header nav ）

var OpenMenu = document.querySelectorAll('.OpenMenu');
OpenMenu.forEach((OpenMenu) =>
  OpenMenu.addEventListener("click", (e) => {
    document.querySelector('.mainmenu').classList.add('show');
  }));

var CloseMenu = document.querySelector('.closebtn');
CloseMenu.addEventListener("click",(e) =>{
  document.querySelector('.mainmenu').classList.remove('show');
});