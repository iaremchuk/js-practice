// 7. BROWSER OBJECT MODEL (BOM). EVENTS

// 1. За допомогою методів об’єкта window створити:
//         1) нове вікно розміром 300х300 пікселів.
//         2) із затримкою 2 сек змініть розміри вікна на 500х500 пікселів
//         3) із затримкою 2 сек перемістіть вікно в точку з координатами (200, 200)
//         4) із затримкою 2 сек закрийте вікно.
// window.innerWidth = 300;
// window.innerHeight = 300;
// setInterval(function(){
//     window.innerWidth = 500;
//     window.innerHeight = 500;
// }, 2000);
// setInterval(function(){
//     window.moveTo(200, 200);
// }, 2000);
// setInterval(function(){
//     window.close();
// }, 2000);

// 2. Для заданої HTML-сторінки:
// <p id ='text'>I learning JavaScript events!</p> 
// <div>
//         <button . . . . . >Change style!</button>
// </div>
// напишіть функцію changeCSS(), яка спрацьовуватиме по кліку на кнопку і змінюватиме стиль вмісту тега <p>: колір шрифту –
//  оранжевий, розмір шрифту 20px, шрифт сімейства "Comic Sans MS".
// changeCSS = () =>{
//     const changableContenet = document.getElementById('text');
//     changableContenet.style.color = 'orange';
//     changableContenet.style.fontSize = '20px';
//     changableContenet.style.fontFamily = 'Comic Sans MS';
// };

// 3. Задано сторінку з 3 кнопками і 1 лінкою. Напишіть Javascript код і реалізуйте HTML-сторінку з відповідними подіями на
//  кожному елементові:
//         1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
//         2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
//         3) 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий. При відпусканні – білий.
//         4) При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.
//         Приклад – курсор наведений на лінку.
// https://user-images.githubusercontent.com/9075641/228461056-455d4dbf-527b-43de-a3dd-7c079dfbffed.png
// const container = document.querySelector('.container');
// document.querySelector('.container button:first-child').onclick = function(){
//     container.style.background = 'blue';
// };
// document.querySelector('.container button:nth-child(2)').ondblclick = function(){
//     container.style.background = 'pink';
// };
// document.querySelector('.container button:nth-child(3)').onmousedown = function(){
//     container.style.background = 'brown';
// };
// document.querySelector('.container button:nth-child(3)').onmouseup = function(){
//     container.style.background = '';
// };
// document.querySelector('.container a').onmouseover = function(){
//     container.style.background = 'yellow';
// };
// document.querySelector('.container a').onmouseout = function(){
//     container.style.background = '';
// };

// 4. Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний елемент випадаючого списку. 
// Можуть видалятися всі елементи в будь-якому порядку.
// https://user-images.githubusercontent.com/9075641/228462160-e0584c12-eb4a-4973-b598-46e1cde9b941.png
// document.querySelector('button').onclick = function () {
//     try{
//         const select = document.querySelector('select');
//         const selectedUser = select.options[select.selectedIndex]; //get all options by using property options and get selected option by its index by using property selectedIndex
//         select.removeChild(selectedUser);
//         if (select.options.length < 1) throw new Error('All useers deleted');
//     }
//     catch (exception){
//         alert(exception.message);
//     }
// };

// 5.  Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення 
// "I was pressed!", при наведенні на кнопку виводитиме повідомлення "Mouse on me!", а при відведенні курсора миші виводитиме
// повідомлення "Mouse is not on me!".
// Приклад роботи:
// https://user-images.githubusercontent.com/9075641/228462490-a2ec423a-44e3-40f5-9c0a-7e9d207f2822.png 
// const liveBtn = document.getElementById('liveBtn');
// liveBtn.onmouseover = function(){
//     liveBtn.insertAdjacentHTML('afterend', '<p>Mouse is on me!</p>');
// };
// liveBtn.onmouseout = function(){
//     liveBtn.insertAdjacentHTML('afterend', '<p>Mouse is not on me!</p>');
// };
// liveBtn.onclick = function(){
//     liveBtn.insertAdjacentHTML('afterend', '<p>I was pressed!</p>');
// };

// 6. Реалізуйте програму, яка відслідковуватиме зміну розміру (ширини і висоти) вікна браузера і виводитиме на поточну 
// сторінку при її розтязі/стисканні відповідні значення.
// https://user-images.githubusercontent.com/9075641/228463011-5302f615-86e6-41dc-b09a-62bed3564596.png
// document.getElementById('showWindowSize').textContent = `Width: ${window.innerWidth}, Height: ${window.innerHeight}`;
// window.onresize = function (){
//     document.getElementById('showWindowSize').textContent = `Width: ${window.innerWidth}, Height: ${window.innerHeight}`;
// };

// 7. На сторінці потрібно реалізувати 2 випадаючих списки. У першому містяться назви країн, у другому – назви міст. 
// Реалізувати роботу таким чином, щоб коли вибирається з лівого випадаючого списку певна країна - в правому випадаючому 
//  списку з'являлися міста цієї країни. Список міст формується динамічно, через JavaScript. Також потрібно нижче вивести назву 
//  обраної країни і місто.
// https://user-images.githubusercontent.com/9075641/228463508-6225f4ee-7ad2-4130-b7fc-d97a2d236693.png
// const countries = document.querySelector('#countries');
// const cities = document.querySelector('#cities');
// const showData = document.querySelector('.showData');
// showCountryAndCity = () => showData.textContent = countries.value + ', ' + cities.value;
// showCountryAndCity();
// countries.onchange = function(){
//     const selectedCountry = countries.options[countries.selectedIndex];
//     selectedCountry.textContent === 'Ukraine' ? cities.innerHTML = '<option>Kyiv</option><option>Lviv</option><option>Kharkiv</option><option>Dnipro</option>'
//                                               : selectedCountry.textContent === 'Germany' ? cities.innerHTML = '<option>Berlin</option><option>Frankfurt</option><option>Munich</option><option>Bremen</option>'
//                                               : cities.innerHTML = '<option>New-York</option><option>Washington</option><option>Boston</option><option>Chikago</option>';
//      showCountryAndCity();
// };
// cities.onchange = function (){
//     showCountryAndCity();
// };