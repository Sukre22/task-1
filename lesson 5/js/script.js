
let newLi = document.createElement('li');
let newUl = document.querySelector('nav>ul.menu');
let menu = document.querySelectorAll('.menu-item');
let adv = document.querySelector('.adv');
let title = document.querySelector('.title');
let prompT = document.querySelector('.prompt');
let temp;

   

newLi.classList.add('menu-item');
newLi.innerText = 'Пятый пункт';
newUl.appendChild(newLi);
adv.remove();
document.body.style.backgroundImage = "url(img/true.jpg)";
title.innerHTML = 'Мы продаем только подлинную технику Apple';

/*let question = prompt("Ваше отношение к технике Apple?", '');  
prompT.innerHTML = question;*/

temp = menu[1];
menu[1] = menu[2];
menu[2] = temp; 



//menu.forEach(function(item, i, elements) {

//});



