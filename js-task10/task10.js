// 10. ECMASCRIPT 2015 (ES6)

// 1. Напишіть код в / Ваш код /, щоб він працював
// let names = {
//     first: "Tom",
//     second: "Sam",
//     third: "Ray",
//     fourth: "Bob",
// };
// let {first: f, second: s, third: x, fifth = 'John'} = names;
// console.log(f); // "Tom"
// console.log(x); // "Ray"
// console.log(fifth); // "Name №5"


// 2. Напишіть код в / Ваш код /, щоб він працював
// let data = {
//     names: ["Sam", "Tom", "Ray", "Bob"],
//     ages: [20, 24, 22, 26],
// };
// let {names: [name1, name2, name3, name4], ages: [age1, age2, age3, age4]} = data;
// console.log(name2); // "Tom"
// console.log(age2); // 24
// console.log(name4); // "Bob"
// console.log(age4); // 26


// 3. Напишіть функцію mul(), яка приймає будь-яку кількість параметрів різного типу і повертає 
// добуток параметрів типу Number.
// Якщо параметри типу Number відсутні, повертає число 0.
// function mul(...data) {
//     const numArr = [];
//     for (const elem of data) {
//         if(typeof elem === "number") numArr.push(elem);
//     };
//     return numArr.length > 0 ?  numArr.reduce((a, b) => a * b) : 0;
// }
// console.log(mul(1, "str", 2, 3, true)); // 6
// console.log(mul(null, "str", false, true)); // 0


// 4. Напишіть функцію mapBuilder (keysArray, valuesArrays), яка приймає два масиви однакової довжини.
//  Використовуючи ці масиви, функція повинна створювати об'єкт типу Map, ключами якого є значення з першого 
//  масиву, а значеннями Map - значення з другого масиву. Після цього функція повертає даний об'єкт Map.
// Приклади використання:
// function mapBuilder(k, v){
//     const newMap = new Map();
//     for(let i = 0; i < k.length; i++){
//         newMap.set(k[i], v[i]);
//     };
//     return newMap;
// };
// let keys = [1, 2, 3, 4];
// let values = ["div", "span", "b", "i"];
// let map = mapBuilder(keys, values);
// console.log(map.size); // 4
// console.log(map.get(2)); // "span"


// 5. За допомгою коду у нижче створюється масив, використовуючи цикл, до масиву записуються три функції
//  Логіка функцій проста, в консоль виводиться значення лічильника на момент створення функції.
// На вигляд код виглядає логічним, але, якщо запустити цей код без змін, в консоль буде виведено двічі число 3.
// Використовуючи механізм замикання, внесіть у код зміни, щоб у консоль вивелися число 0 та число 2
// (відповідно до виклику). 

// var arr = [];

// for (var i = 0; i <= 2; i++) {
//     arr[i] = (function (num) {
//         return function () {
//             console.log(num);
//         };
//     })(i);
// };

// arr[0](); // 0
// arr[arr.length - 1](); // 2