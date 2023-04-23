// 1. Написати функцію createArray(start, end), яка приймає на вхід 2 параметри:
// - початкове значення
// - кінцеве значення
// а на виході отримує масив із діапазоном цих значень (реалізувати достатньо лише із числовими значеннями)
// let arr = createArray(2, 9);
// console.log(arr); // [2,3,4,5,6,7,8,9]
// function createArray(start, end) {
//     const arr = [];
//     for (let i = start; i <= end; ++i) {
//         arr.push(i);
//     }
//     return arr;
// }
// let arr = createArray(2, 9);
// console.log(arr); // [2,3,4,5,6,7,8,9];

// 2. Задані цілі числа a і b (a < b). Виведіть усі цілі числа від a до b включно, при цьому a виводится 1 раз, число а+1 - два рази і т.д.
// // 1,2,2,3,3,3...
// showNumbers = (a, b) => {
//     for (let i = a; i <= b; i++) {
//         for (let j = i - a + 1; j > 0; j--) { //prints each number i as many times as the distance between that number and a (i.e., j = i-a+1)
//             console.log(i);
//         }
//     }
// }
// showNumbers(1, 3);

// 3. Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами. Випадкові числа генеруються із діапазону 1-500.
// randArray(5);  // [399,310,232,379,40]
// function randArray(k) {
//     const arr = [];
//     let randomNumber = 0;
//     for (let i = 0; i < k; ++i) {
//         randomNumber = Math.floor(Math.random() * 500);
//         arr.push(randomNumber);
//     }
//     return arr;
// }
// console.log(randArray(5));
// console.log(randArray(9));
// console.log(randArray(7));

// 4. Написати функцію compact() яка має приймати на вхід масив, а на вихід має повертати значення нового масиву без повторень.
// приклад:
// const arr = [5, 3, 4, 5,6,7,3];
// const arr2 = compact(arr);
// console.log(arr2) ; // [5,3,4,6,7]
// compact = array => {
//     const uniqueArr = [];
//     for (let i = 0; i < array.length; i++) {
//         if (!uniqueArr.includes(array[i])) {
//             uniqueArr.push(arr[i]);
//         }
//     }
//     return uniqueArr;
// }
// const arr = [5, 3, 4, 5, 6, 7, 3];
// const arr2 = compact(arr);
// console.log(arr2); // [5,3,4,6,7];

// 5. Є масив [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”]
// Написати функцію яка виведе нові масиви які складаються із даних початкового масиву, але одного типу даних (не приводити тип стрінг в число навіть якщо там лише число)
// funcName = arr => {
//     const stringArray = [];
//     const numberArray = [];
//     for (const elem of arr) {
//         if (typeof elem === 'string') {
//             stringArray.push(elem);
//         }
//         else if (typeof elem === 'number') {
//             numberArray.push(elem);
//         }
//         else {
//             for (let i = 0; i < elem.length; i++) {
//                 if (typeof elem[i] === 'string') {
//                     stringArray.push(elem[i]);
//                 }
//                 else if (typeof elem[i] === 'number') {
//                     numberArray.push(elem[i]);
//                 }
//             }
//         }
//     }
//     return [stringArray, numberArray];
// };
// let arr = [5, 'Limit', 12, 'a', '3', 99, 2, [2, 4, 3, '33', 'a', 'text'], 'strong', 'broun'];
// let arrNew = funcName(arr);
// console.log(arrNew);
/*
[
[5, 12, 99, 2, 2, 4, 3],
[”Limit”, “a”, “3”, “33”, “a”, “text”, “strong”, “broun”
]
*/


// 6. Напишіть функцію calc(a, b, op), яка виконує над числами a і b одну із арифметичних операцій та повертає її результат. Вид операції визначається цілим числом op: 1 – віднімання, 2 – добуток, 3 – ділення, інші значення – додавання.
// calc(10, 3, 1); // => 7
// calc = (a, b, op) => {
//     switch (op) {
//         case 1:
//             return a - b;
//             break;
//         case 2:
//             return a * b;
//             break;
//         case 3:
//             return a / b;
//             break;
//         default:
//             return a + b;
//     }
// }
// console.log(calc(10, 3, 1));
// console.log(calc(10, 3, 4));

// 7. Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи. Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.
// findUnique([1, 2, 3, 5, 3]);  // => false
// findUnique([1, 2, 3, 5, 11]); // => true
// findUnique = arr => {
//     const freq = {};
//     let sum = 0;
//     let size = 0;
//     // Loop through the array and increment the frequency count for each element
//     arr.forEach(function (elem) {
//         if (elem in freq) {
//             freq[elem]++;
//         } else {
//             freq[elem] = 1;
//         }
//     });
//     // Loop through  the properties of an object, sum values of the properties and count how many keys in object
//     for (const x in freq) {
//         sum += freq[x];
//         size++;
//     }
//     // Check if sum of the values in object is the same as object key quantity  and return true if yes and false if no
//     return sum === size ? true : false;
// }
// console.log(findUnique([1, 2, 3, 5, 3]));  // => false
// console.log(findUnique([1, 2, 3, 5, 11])); // => true

// ⭐⭐⭐
// (Ускладнене. Задача не оцінюється. Для тих, кому хочеться поробити ще щось)
// Створити функцію create() , яка приймає один аргумент у вигляді рядка. Ця функція повертає анонімну функцію, яка перевіряє чи переданий в неї аргумент збігається з аргументом зовнішньої функції.  (потребує використання closure)
// const tom = create("pass_for_Tom");
// tom("pass_for_Tom"); //повертає true 
// tom("pass_for_tom"); //повертає false
// create = x => {
//     return function (y) {
//         return x === y ? true : false;
//     };
// }
// const tom = create("pass_for_Tom");
// console.log(tom("pass_for_Tom")); //повертає true 
// console.log(tom("pass_for_tom")); //повертає false 