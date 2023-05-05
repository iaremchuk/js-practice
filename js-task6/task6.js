// 1. На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів. У модальному вікні необхідно 
// послідовно вивести вміст:
//         1) першого елемента списку
//         2) останнього елемента списку
//         3) другого елемента списку
//         4) четвертого елемента списку
//         5) третього елемента списку
// Приклад:
// •        1
// •        2
// •        3
// •        4
// •        5
// Результат виводу: 1, 5, 2, 4, 3

// const list = document.querySelectorAll('#list li');
// const coma = ', '
// console.log(list[0].textContent + coma + list[4].textContent + coma + list[1].textContent + coma + list[3].textContent + coma + list[2].textContent);



// 2. Для сторінки
// <body>
//   <h1>I'am a big header!!!</h1>
//   <div id="myDiv">
//     <p>First paragraph</p>
//     <p>Second paragraph</p>
//     <p>Third paragraph</p>
//     <p>Fourth paragraph</p>
//   </div>
//   <ul id="myList">
//     <li>Make</li>
//     <li>me</li>
//     <li>horizontal!</li>
//   </ul>
//   <span>Make me invisible, please!</span>
// </body>
// Напишіть скріпт, який за допомогою засобів DOM простилізує сторінку так як показано на картинці.

// document.querySelector('h1').style.background = "green";
// document.querySelector('#myDiv p:first-child').style.fontWeight = 'bold';
// document.querySelector('#myDiv p:nth-child(2)').style.color = 'red';
// document.querySelector('#myDiv p:nth-child(3)').style.textDecoration = 'underline';
// document.querySelector('#myDiv p:nth-child(4)').style.textDecoration = 'italic';
// document.querySelector('#myList').style.listStyleType = "none";
// document.querySelector('#myList').style.display = "flex";
// document.querySelector('span').setAttribute('hidden', 'hidden');

// 3. Напишіть скріпт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку структуру з тегів і їх атрибутів.
// <body>
//   <main class="mainClass check item">         
//      <div id="myDiv">
//          <p>First paragraph</p>           
//      </div>
//  </main> 
// </body>
// const body = document.querySelector('body');
// const main = document.createElement('main');
// const div = document.createElement('div');
// body.prepend(main);
// main.classList.add('mainClass', 'check', 'item');
// main.prepend(div);
// document.querySelector('div').setAttribute('id', 'myDiv');
// document.querySelector('div').insertAdjacentHTML('afterbegin', '<p>First paragraph</p>');

// 4. Задача описана в блоці JS
// https://codepen.io/misha_klymenko/pen/Jjabvez

// const initials = document.querySelector('[name="fio"]');
// const phone = document.querySelector('[name="phone"]');
// const birthday = document.querySelector('[name="birthday"]');
// const email = document.querySelector('[name="email"]');
// const submit = document.querySelector('[type="submit"]');
// const displayData = document.querySelector('.out');
// const data = [];
// submit.onclick = function () {
//     data.push(initials.value, phone.value, birthday.value, email.value);
//     displayData.textContent = data;
// };

// 5. Задача описана в блоці JS
// https://codepen.io/misha_klymenko/pen/abzLvqo

// const allCircles = document.querySelectorAll(".circle");
// allCircles.forEach(element => {
//     element.classList.add(`${element.getAttribute('data-anim')}`);
// });

// 6. Задача описана в блоці JS
// https://codepen.io/misha_klymenko/pen/dyjyeGO 
// const colours = document.querySelectorAll('.color');
// const models = document.querySelectorAll('.model');
// const sizes = document.querySelectorAll('.size');
// const price = document.querySelector('#outprice');
// colours.forEach(element => {
//     element.onclick = function () {
//         if (element.getAttribute('color') === 'blue') {
//             price.textContent = element.getAttribute('data-price');
//         }
//         else if (element.getAttribute('color') === 'red') {
//             price.textContent = element.getAttribute('data-price');
//         }
//         else if (element.getAttribute('color') === 'green') {
//             price.textContent = element.getAttribute('data-price');
//         }
//         else if (element.getAttribute('color') === 'orange') {
//             price.textContent = element.getAttribute('data-price');
//         }
//         else if (element.getAttribute('color') === 'black') {
//             price.textContent = element.getAttribute('data-price');
//         }
//     };
// });
// models.forEach(element => {
//     element.onclick = function () {
//         if (element.getAttribute('model') === 'AirMax') {
//             price.textContent = element.getAttribute('data-price');
//         }
//         else if (element.getAttribute('model') === 'AirForce') {
//             price.textContent = element.getAttribute('data-price');
//         }
//         else if (element.getAttribute('model') === 'AirHuarache') {
//             price.textContent = element.getAttribute('data-price');
//         }
//         else if (element.getAttribute('model') === 'VaporMax') {
//             price.textContent = element.getAttribute('data-price');
//         }
//         else if (element.getAttribute('model') === 'Dunk') {
//             price.textContent = element.getAttribute('data-price');
//         }
//     };
// });
// sizes.forEach(element => {
//     element.onclick = function () {
//         if (element.getAttribute('size') === 'kids') {
//             price.textContent = element.getAttribute('data-price');
//         }
//         else if (element.getAttribute('size') === 'adults') {
//             price.textContent = element.getAttribute('data-price');
//         }
//     };
// });