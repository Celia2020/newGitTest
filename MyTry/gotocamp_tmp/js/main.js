const myForm = document.querySelector('#calc');
myForm.addEventListener('submit', onSubmit);
var resetBtn = document.getElementById("reset");
resetBtn.addEventListener('click', resetData);

var pagedays = document.getElementById("days");
var pageprice = document.getElementById("price");
var pagesubsidy = document.getElementById("subsidy");
var pagesubsidyGOV = document.getElementById("subsidyGOV");
var pagesubsidyAREA = document.getElementById("subsidyAREA");
var pagerealpay = document.getElementById("realpay");


function resetData(){
  pageprice.value = "";
  pageprice.select();
  pagedays.value = "";
}

function onSubmit(e){
  e.preventDefault();

  var oldprice = pageprice.value;
  var priceArr = oldprice.split("");
  var price = "";
  var days = pagedays.value;
  const maxhigh = 40000 * days;

  for(let i=0; i<priceArr.length; i++){
    if(priceArr[i] != ","){
      price += priceArr[i];
    }
  }

  oldprice = price;
  console.log(oldprice);

  if (!isNaN(price) && price.length>0 && price != 0) {

    if (price > maxhigh) {
      price = maxhigh;
    }

    if (days > 0 && days == parseInt(days)){
      days = days;
    }else{
      alert("泊数の入力エリアに0以外の半角正数字を入力してください。");
      pagedays.value = "";
      pagedays.select();
    }



  }else{
    alert("旅行代金の入力エリアに0以外の半角数字を入力してください。");
    pageprice.value = "";
    pageprice.select();
  }

  var cpValue = 1000;
  // const subsidy = parseInt(price * 0.5);
  const subsidyGOV = parseInt(price * 0.35);
  var realCPgov = realValue(cpValue,subsidyGOV);
  const subsidyAREA = parseInt(price * 0.5 - realCPgov);
  var realCParea = realValue(cpValue,subsidyAREA);
  var realPaid = oldprice - subsidyGOV - subsidyAREA;

  if(realPaid<(subsidyGOV + subsidyAREA)){
    realCParea = realCParea - 1000;
    realPaid = realPaid + 1000;
  }
  var realsubsidy = realCPgov + realCParea;

  pageprice.value = format(oldprice);

  pagesubsidy.innerHTML = format(realsubsidy);
  pagesubsidyGOV.innerHTML = format(realCPgov);
  pagesubsidyAREA.innerHTML = format(realCParea);

  pagerealpay.innerHTML = format(realPaid);
}

function calcPrice(){
  
}

function realValue(unitValue,oldValue){
  var mo = oldValue % unitValue;
  var times = parseInt(oldValue / unitValue);
  if(mo > parseInt(unitValue / 2)){
    times++;
  }else{
    times = times;
  }
  var realCP = times * unitValue;
  return realCP;
}

function format(value){
  var decimal = value - parseInt(value);

  var thismo;
  var leftValue = value;
  var lastValue = 0;
  var formatedValue;
  var count = 0;

  while(leftValue != 0){
    thismo = leftValue % 1000;
    leftValue = parseInt(leftValue / 1000);
    if(count == 0){
      lastValue = stringformat(thismo);
      count++;
    }else if(leftValue == 0){
      lastValue = thismo +"," + lastValue;
      count++;
    }else{
      lastValue = stringformat(thismo) +"," + lastValue;
      count++;
    }
  }
  if(decimal!=0){
    formatedValue = lastValue+decimal;
  }else{
    formatedValue = lastValue;
  }
  return formatedValue;
}

function stringformat(value){
  var cnt=0;
  var fomatValue;
  var valueArray = new Array();
  while(value>0){
    valueArray[cnt] = value % 10;
    value = parseInt(value / 10);
    cnt++;
  }
  switch(cnt){
    case 0:
      fomatValue = "000";
      return fomatValue;
    case 1:
      fomatValue = "00"+valueArray[0];
      return fomatValue;
    case 2:
      fomatValue = "0"+(valueArray[1]*10+valueArray[0]);
      return fomatValue;
    case 3:
      fomatValue = valueArray[2]*100+valueArray[1]*10+valueArray[0];
      return fomatValue;
  }
}