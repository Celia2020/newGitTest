var button1 = document.getElementById('button1').addEventListener('click',buttonClick);

function buttonClick(e){
    // console.log('Button Clicked');
    document.getElementById('header-title').textContent = 'Changed';
    document.querySelector('#main').style.backgroundColor = '#f4f4f4';
    console.log(e);

    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.classList);
    var ouput = document.getElementById('output');
    ouput.innerHTML = '<h3>'+e.target.id+'</h3>';

    console.log(e.type);

    // Mouse's position X over display
    console.log('Display position X: '+e.clientX);
    // Mouse's position Y over display
    console.log('Display position Y: '+e.clientY);
    
    // Mouse's position X over target/node
    console.log('Node relative position X: '+e.offsetX);
    // Mouse's position Y over target/node
    console.log('Node relative position Y: '+e.offsetY);

    console.log('altKey: '+e.altKey);
    console.log('ctrlKey: '+e.ctrlKey);
    console.log('shiftKey: '+e.shiftKey);
}

var button2 = document.getElementById('button2');

// click once
// button2.addEventListener('click', runEvent);
// double click
// button2.addEventListener('dblclick', runEvent);
// mousedown
// button2.addEventListener('mousedown', runEvent);
// mouseup
button2.addEventListener('mouseup', runEvent);


document.getElementById('button2').style.backgroundColor = '#070';

var box = document.getElementById('box');

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);

// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);

box.addEventListener('mousemove', runEvent);
var ouput = document.getElementById('output');

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// input = cut + paste
// itemInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

form.addEventListener('submit', runEvent);

function runEvent(e){

    e.preventDefault();
    console.log('EVENT TYPE: '+e.type);

    ouput.innerHTML = '<h3>MouseX: '+e.offsetX+'</h3> <h3>MouseY: '+e.offsetY+'</h3>';

    // box.style.backgroundColor = 'rgb('+e.offsetX+','+e.offsetY+',40)';
    document.body.style.backgroundColor = 'rgb('+e.offsetX+','+e.offsetY+',40)';

    console.log(e.target.value);
    document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';

}