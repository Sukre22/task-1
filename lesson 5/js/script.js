
let newLi = document.createElement('li');
let newUl = document.querySelector('nav>ul.menu');
let menu = document.querySelectorAll('.menu-item');
   

newLi.classList.add('menu-item');
newLi.innerText = 'Пятый пункт';
newUl.appendChild(newLi);

menu.forEach(function(item, i, elements) {

});



