// document.onkeydown = thiskeydown;
// document.addEventListener("keydown",thiskeydown);
// both of 2 sentences above are right.

// Right now JS above can't effect on IE

document.addEventListener("keydown",thiskeydown);
function thiskeydown(e){
  // get key name of keyboard by click
  e = (e) ? e : window.event;
  var DrumKitKeyArr = document.querySelectorAll(".keyboard li");

  for(i=0; i<DrumKitKeyArr.length; i++){
    console.log("e.code = "+e.code);
    // console.log("DrumKitKeyArr[i].id = "+DrumKitKeyArr[i].id);
    if( e.code == DrumKitKeyArr[i].id){
      let DrumKit = `#`+DrumKitKeyArr[i].id;
      let SoundsPlay = `#`+DrumKitKeyArr[i].id+` audio`;
      console.log(DrumKit);
      document.querySelector(DrumKit).classList.add("keydown");
      document.querySelector(SoundsPlay).play();
      break;
    }
  }
}

// clear class while keyup
document.addEventListener("keyup",clearkeydown);
document.addEventListener("load",clearkeydown);
function clearkeydown(){
  var keyboardArr = document.querySelectorAll(".keyboard li");
  keyboardArr.forEach(element => {
    console.log(element);
    element.classList.remove("keydown");
  });
}