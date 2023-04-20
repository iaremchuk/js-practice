//HW2
// 1. Дано три цілих числа: a, b, c. Перевірте істинність висловлювання:
//  a < b < c
// const a = 3;
// const b = 5;
// const c = 7;
// const result = a < b && b < c ? console.log('True') : console.log('False');

// 2. Є такий код:
// let x = 1;
// let y = 2;

// let res1 = // Допишіть код, необхідно використовувати змінні x і y
// console.log(res1); // ""12""
// console.log(typeof res1); // ""string""
// let res1 = x.toString() + y;
// console.log(res1);
// console.log(typeof res1);

// let res2 = // Допишіть код, необхідно використовувати змінні x і y
// console.log(res2); // ""true2""
// console.log(typeof res2); // ""string""
// let res2 = Boolean(x) + y.toString();
// console.log(res2);
// console.log(typeof res2);

// let res3 = // Допишіть код, необхідно використовувати змінні x і y
// console.log(res3); // true
// console.log(typeof res3); // ""boolean""
// let res3 = (Boolean(x) === Boolean(y));
// console.log(res3);
// console.log(typeof res3);

// let res4 = // Допишіть код, необхідно використовувати змінні x і y
// console.log(res4); // NaN
// console.log(typeof res4); // ""number""
// let res4 = x.NaN + y.NaN;
// console.log(res4);
// console.log(typeof res4);


// Допишіть код, щоб в консолі браузера з'явилися рядки, які написані в коментарях, оперуючи при цьому змінними х і у.
// console.log(`${x.toString() + y} ${typeof (x.toString() + y)}; ${Boolean(x) + y.toString()} ${typeof (Boolean(x) + y.toString())}; ${(Boolean(x) === Boolean(y))} ${typeof ((Boolean(x) === Boolean(y)))}; ${x.NaN + y.NaN} ${typeof (x.NaN + y.NaN)}.`);

// 3. Використовуючи функцію prompt() задайте користувачу питання про досягнення ним повнолітнього віку. Результат запишіть в змінну isAdult. В залежності від отриманого значення виведіть відповідне повідомлення про статус особи. Наприклад: при виконанні умови вік більше 18 вивести “Ви досягли повнолітнього віку”. Якщо вік менше 18 років вивести “Ви ще надто молоді”, 
// const isAdult = +prompt('How old are you');
// isAdult >= 18 ? console.log('You a grownup') : console.log('You are too young');

// 4. Задано масив чисел, знайти число яке найбільш часто входить в масив, занести це число в новий масив і видалити всі входження цього числа із поточного масиву.
// let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5]
// let data = ... // 5
// ...
// console.log(arr) // [4, 2, 1, 6, 3, 2]]

// let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];
// let newArr = [];
// // Create an object to store the frequency count of each element
// let freq = {};
// // Loop through the array and increment the frequency count for each element
// arr.forEach(function (elem) {
// if (elem in freq) {
//         freq[elem]++;
//     } else {
//         freq[elem] = 1;
//     }
// });
// // Find the element with the highest frequency count
// let maxFreq = 0;
// let mostFreqElem = null;
// for (let key in freq) {
//     if (freq[key] > maxFreq) {
//         maxFreq = freq[key];
//         mostFreqElem = key;

//     }
// }
// // Create a new array with the most frequent element
// arr.forEach(function (elem) {
//     if (elem === +mostFreqElem) {
//         newArr.push(elem);
//     }
// });
// // Remove all entries of the most frequent element
// let i = 0;
// while (i < arr.length) {
//     if (arr[i] === +mostFreqElem) {
//         arr.splice(i, 1);
//         i--;
//     }
//     i++;
// };
// console.log(newArr);
// console.log(arr);

// 5. Користувач вводить три довжини сторін трикутника (використовуйте prompt () три рази для введення кожної сторони).
// Необхідно 
//     a) визначити і вивести в консоль площу трикутника 
//     b) перевірити чи цей трикутник є прямокутним і вивести в консоль результат перевірки.
// Здійснювати перевірку чи введені користувачем значення коректні, в іншому випадку вивести 'Incorrect data‘. Результат обчислення площі трикутника виводити в консоль з точністю 3 знаки після коми (наприклад:  8.42355465 =>  8.424).
// const heightOne = +prompt('Enter height');
// const heightTwo = +prompt('Enter height');
// const heightThree = +prompt('Enter height');
// if (isNaN(heightOne) || isNaN(heightTwo) || isNaN(heightThree)) {
//     console.log('Incorrect data');
// }
// else {
//     //The area is calculated using the Heron's formula
//     const triangleHalfPperimeter = (heightOne + heightTwo + heightThree) / 2;
//     const area = Math.sqrt(triangleHalfPperimeter * (triangleHalfPperimeter - heightOne) * (triangleHalfPperimeter - heightTwo) * (triangleHalfPperimeter - heightThree));
//     console.log(area.toFixed(3));
// }

// if (isNaN(heightOne) || isNaN(heightTwo) || isNaN(heightThree)) {
//     console.log('Incorrect data');
// }
// else {
//     const sides = [heightOne, heightTwo, heightThree].sort((x, y) => x - y); // Sort sides in ascending order
//     let [short1, short2, longest] = sides;
//     const checkTriangleIsRight = Math.abs(Math.pow(longest, 2) - Math.pow(short1, 2) - Math.pow(short2, 2)) < Number.EPSILON;
//     console.log(checkTriangleIsRight);
// }

// 6. Написати умовну конструкцію, яка в залежності від часу доби виводитиме відповідне привітання.Потрібно отримати реальний час доби із системи.Зробити 2 способами через 2 різних умовних оператора.
//     В діапазоні годин 23 - 5 – має виводитися привітання “Доброї ночі”
//     В діапазоні годин 5 - 11 – має виводитися привітання “Доброго ранку”
//     В діапазоні годин 11 - 17 – має виводитися привітання “Доброго дня”
//     В діапазоні годин 17 - 23 – має виводитися привітання “Доброго вечора”.
// const showHours = new Date().getHours();
// if (showHours === 23 || showHours === 24 || showHours > 1 && showHours <= 5) console.log('Good night');
// if (showHours > 5 && showHours <= 11) console.log('Good morning');
// if (showHours > 11 && showHours <= 17) console.log('Good day');
// if (showHours > 17 && showHours < 23) console.log('Good evening');
// switch (new Date().getHours()) {
//     case 23: case 0: case 1: case 2: case 3: case 4: case 5:
//         console.log("Good night"); break;
//     case 6: case 7: case 8: case 9: case 10: case 11:
//         console.log("Good morning"); break;
//     case 12: case 13: case 14: case 15: case 16: case 17:
//         console.log("Good day"); break;
//     case 18: case 19: case 20: case 21: case 22:
//         console.log("Good evening"); break;
// }

// ⭐⭐⭐
// (Ускладнене.Задача не оцінюється.Для тих, кому хочеться поробити ще щось)
// Вася працює програмістом і отримує 50$ за кожні 100 рядків коду(99 рядків - 0$, 199 рядків - 50$).За кожне третє запізнення Васю штрафують на 20$.Реалізувати меню:
// - користувач вводить бажаний дохід Васі і кількість запізнень, порахувати, скільки рядків коду йому треба написати
// const enterDesirableIncome = +prompt('Please enter desirable income');
// const enterLateness = +prompt('Please enter how many times the employee was late');
// const incomePlusLatenessPenalty = enterLateness % 3 === 0 ? enterDesirableIncome + (enterLateness / 3 * 20) : enterDesirableIncome + ((enterLateness - enterLateness % 3) / 3 * 20);
// const codeLines = incomePlusLatenessPenalty % 50 === 0 ? incomePlusLatenessPenalty / 50 * 100 : ((incomePlusLatenessPenalty - incomePlusLatenessPenalty % 50) / 50 * 100) + 100;
// console.log('The employe must do ' + codeLines + ' code lines');

// - користувач вводить кількість рядків коду, написану Васею, і бажаний обсяг коштів.Порахувати, скільки разів Вася може запізнитися.
// const enterCodeLinesNumber = +prompt('Please enter code lines number');
// const enterDesirableIncome = +prompt('Please enter desirable income');
// const currentIncome = enterCodeLinesNumber % 100 === 0 ? enterCodeLinesNumber / 100 * 50 : (enterCodeLinesNumber - enterCodeLinesNumber % 100) / 100 * 50;
// const differenceBetweenCurrentAndDesirableIncome = currentIncome - enterDesirableIncome;
// if (enterDesirableIncome > currentIncome) {
//     console.log('You have not reached your desirable income yet, therefore you cannot be late');
// }
// else {
//     differenceBetweenCurrentAndDesirableIncome % 20 === 0 ? console.log(`You can be ${differenceBetweenCurrentAndDesirableIncome / 20 * 3} times late`)
//         : console.log(`You can be ${(differenceBetweenCurrentAndDesirableIncome - differenceBetweenCurrentAndDesirableIncome % 20) / 20 * 3} times late`);
// }

// - користувач вводить кількість рядків коду і кількість запізнень, визначити, скільки грошей заплатять Васі і чи заплатять взагалі.
// const enterCodeLinesNumber = +prompt('Please enter code lines number');
// const enterLateness = +prompt('Please enter how many times the employee was late');
// if (enterCodeLinesNumber < 100 || enterLateness >= 9) {
//     console.log('Your salary is 0');
// }
// else {
//     let incomeForCodeLines = enterCodeLinesNumber % 100 === 0 ? enterCodeLinesNumber / 100 * 50 : (enterCodeLinesNumber - enterCodeLinesNumber % 100) / 100 * 50;
//     enterLateness === 0 ? console.log(incomeForCodeLines)
//         : enterLateness % 3 === 0 ? console.log(incomeForCodeLines -= (enterLateness / 3 * 20))
//             : console.log(incomeForCodeLines -= ((enterLateness - enterLateness % 3) / 3 * 20));
// }