console.log(window);

// Single element
document.getElementById('my-form');
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('h1'));

const form = document.getElementById('my-form');
console.log(form);

//Multiple element
console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));

const item = document.querySelectorAll('.item');
item.forEach((item) => console.log(item));

const items = document.querySelectorAll('.items');
items.forEach((item) => console.log(item));

// Real Start for html
const ul = document.querySelector('.items');

// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
// btn.style.background = 'red';

btn.addEventListener('click', (e) =>{
    e.preventDefault();  //stop the submit to see the result
    console.log('click');
    console.log(e);
    console.log(e.target);
    console.log(e.target.className);

    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello World</h1>';
});






















