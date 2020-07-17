var inputs = document.getElementsByTagName("input");
const myForm = document.querySelector('#calc');
myForm.addEventListener('submit', onSubmit);
var pagesubsidy = document.getElementById("subsidy");
var pagesubsidyGOV = document.getElementById("subsidyGOV");
var pagesubsidyAREA = document.getElementById("subsidyAREA");
var pagerealpay = document.getElementById("realpay");

function onSubmit(e){
  e.preventDefault();

  var oldprice,price,days;
  for(let i=0; i<inputs.length; i++){
    if(inputs[i].name == "price"){
      oldprice = inputs[i].value;
      price = inputs[i].value;
    }
    if(inputs[i].name == "days"){
      var days = inputs[i].value;
    }
  }  
  const maxhigh = 40000 * days;

  if (!isNaN(price) && price.length>0) {

    if (price > maxhigh) {
      price = maxhigh;
    }

    if (days > 0 && days == parseInt(days)){
      days = days;
    }else{
      alert("泊数の入力エリアに半角正数字を入力してください。");
      document.getElementById("days").value = "";
      document.getElementById("days").select();
      return false;
    }

  }else{
    alert("旅行代金の入力エリアに半角数字を入力してください。");
    document.getElementById("price").value = "";
    document.getElementById("price").select();
    return false;
  }

  const subsidy = parseInt(price * 0.5);
  var cpValue = 1000;
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

  pagesubsidy.innerHTML = format(realsubsidy);
  pagesubsidyGOV.innerHTML = format(realCPgov);
  pagesubsidyAREA.innerHTML = format(realCParea);

  pagerealpay.innerHTML = format(realPaid);
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
  var count=0;

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