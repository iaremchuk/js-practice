// 04. DEBUGGING. HANDLING EXCEPTIONS

// 1. Напишіть функцію sumSliceArray(arr, first, second), яка приймає масив arr і два числа(first и second) – порядкові номери
// елементів масиву, які необхідно скласти.Наприклад, якщо ввели 3 та 5 – сумуються 3 - й та 5 - й елементи.Функція повинна 
// генерувати винятки, якщо були введені не числа, і коли одне з чисел або обидва більшого розміруза довжину масиву.Напишіть 
// код, який використовує цю функцію, передбачте обробку можливих винятків.
// sumSliceArray = () => {
//     const arr = +prompt('Enter numbers in array');
//     const firstNumber = +prompt('Enter first number');
//     const secondNumber = +prompt('Enter second number');
//     if (isNaN(arr) || isNaN(firstNumber) || isNaN(secondNumber)) throw new Error('Please enter number');
//     const newArr = arr.toString().split('');
//     if (firstNumber >= newArr.length || secondNumber >= newArr.length) throw new Error('Please enter number that is smaller than length of the array');
//     return +newArr[firstNumber] + +newArr[secondNumber];
// }
// try {
//     console.log(sumSliceArray());
// } catch (exception) {
//     console.log(exception);
// }

// 2. Створіть функцію checkAge(), яка запитує у користувача його ім'я, вік та статус (адмін, модератор, користувач) та генерує 
// модальне вікно з помилкою, якщо:вік користувача менше 18 або більше 70 років (генерується помилка типу RangeError).
// користувач не ввів жодних даних в будь-якому полі (виводиться повідомлення The field is empty! Please enter your age з типом
// помилки Error). У полі статус введено неправильне слово (тип помилки EvalError).в полі вік введено нечислове значення.
// У всіх інших випадках користувач отримає доступ до перегляду фільму. У блоці catch передбачена можливість виведення назви 
// та опису помилки.
// function checkAge() {
//     const userName = prompt('Enter name');
//     const userAge = +prompt('Enter age');
//     const userStatus = prompt('Enter status');
//     if (!userName || !userAge || !userStatus) throw new Error('The field is empty! Please enter your age');
//     if (userAge < 18 || userAge > 70) throw new RangeError('You are out of age range for this film');
//     if (userStatus !== 'admin' && userStatus !== 'moderator' && userStatus !== 'user') throw new EvalError('Invalid status');
//     return 'Enjoy your film';
// }
// try {
//     console.log(checkAge());
// }
// catch (exception) {
//     console.log(exception.name);
//     console.log(exception.message);
// }
// 3. Реалізуйте функцію calcRectangleArea(width, height), яка приймає 2 параметри ширина прямокутника width і висота
// прямокутника height і обраховує його площу.Передбачити припинення виконання програми і генерацію винятку у випадку, 
// якщо функції передано не числові параметри.
// Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.
// calcRectangleArea = () => {
//     const rectangleHeight = +prompt('Enter height');
//     const rectangleWidth = +prompt('Enter width');
//     if (isNaN(rectangleHeight) || isNaN(rectangleWidth)) {
//         throw new Error('Please enter number');
//     }
//     return rectangleWidth * rectangleHeight;
// }
// try {
//     console.log(calcRectangleArea());
// } catch (exception) {
//     console.log(exception);
// }
// 4. Створіть клас MonthException, конструктор якого приймає параметр message і ініціалізує поле name значенням MonthException.
// Реалізуйте функцію showMonthName(month), в якій параметр month – це порядковий номер місяця в році.Функція повертає
// назву місяця відповідно до введеного номера місяця.У випадку некоректного вводу кидається ексепшн у вигляді 
// об’єкта класу MonthException з повідомленням Incorrect month number.
// Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
// Приклад роботи програми:
// console.log(showMonthName(5));  // May
// console.log(showMonthName(14)); // MonthException Incorrect month number
// class MonthException {
//     constructor(message) {
//         this.name = 'MonthException';
//         this.message = message;
//     }
// }
// showMonthName = month => {
//     switch (month) {
//         case 1: return 'January'; break;
//         case 2: return 'February'; break;
//         case 3: return 'March'; break;
//         case 4: return 'April'; break;
//         case 5: return 'May'; break;
//         case 6: return 'June'; break;
//         case 7: return 'July'; break;
//         case 8: return 'August'; break;
//         case 9: return 'September'; break;
//         case 10: return 'October'; break;
//         case 11: return 'November'; break;
//         case 12: return 'December'; break;
//         default: throw new MonthException('Incorrect month number.');
//     }
// }
// try {
//     console.log(showMonthName(5));
//     console.log(showMonthName(14));
// }
// catch (exception) {
//     console.log(exception);
// }
// 5. Реалізуйте функцію showUser(id), яка приймає параметром користувацьке id і повертає об’єкт, який містить значення
// переданої id.Також функція викидає помилку у разі якщо введено від’ємне id.
// Реалізуйте функцію showUsers(ids), яка приймає параметром масив користувацьких айді ids, перевіряє з використанням 
// функції showUser() кожен елемент масиву ids на коректність, в разі виключної ситуації виводить повідомлення про помилку.
// Функція showUsers(ids) повертає масив об’єктів, де значеннями ключів є коректні елементи ids.
// Приклад роботи програми:
// showUsers([7, -12, 44, 22]);
// Error: ID must not be negative: -12
// [ {id: 7}, {id: 44}, {id: 22} ]
// function showUser(id) {
//     if (id < 0) throw new Error(`ID must not be negative: ${id}`);
//     return { id: id };
// }
// function showUsers(ids) {
//     const arrayWithValidIds = [];
//     for (const elem of ids) {
//         try {
//             const checkUserId = showUser(elem);
//             arrayWithValidIds.push(checkUserId);
//         }
//         catch (exception) {
//             console.log(exception.message);
//         }
//     }
//     return arrayWithValidIds;
// }
// console.log(showUsers([7, -12, 44, 22]));