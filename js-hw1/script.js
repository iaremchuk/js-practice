// HW1
// 1. Напишіть скріпт всередині HTML-документу, який виводить на екран ваше імя за допомогою функції alert().

// 2. Напишіть скріпт в зовнішньому файлі, який виводить в консоль ваше прізвище. Підключіть створений файл до HTML-документу.
console.log('Iaremchuk');

// 3. a) оголосіть дві змінні;
//     b) запишіть у змінні будь-які значення;
//     c) виведіть на екран значення змінних;
//     d) скопіюйте значення однієї змінної в іншу;
//     e) виведіть на екран значення змінних.
// let firstVariable;
// let secondVariable;
// firstVariable = 'It is spring';
// secondVariable = 'The weather is nice';
// alert(firstVariable);
// alert(secondVariable);
// firstVariable = secondVariable;
// alert(firstVariable);
// alert(secondVariable);

// 4. Створіть об’єкт з 5-ма наступними властивостями: “String”, “Number”, “Boolean”, “Undefined”, “Null”. Значення кожної властивості повинно відповідати відповідному примітивному типу даних.
// const objectOfValues = {
//     string: 'I love spring',
//     number: 2,
//     boolean: true,
//     undefined: undefined,
//     null: null
// }
// console.log(typeof (objectOfValues.string));
// console.log(typeof (objectOfValues.number));
// console.log(typeof (objectOfValues.boolean));
// console.log(typeof (objectOfValues.undefined));
// console.log(typeof (objectOfValues.null));

// 5. Використовуючи функцію confirm() задайте користувачу питання про досягнення ним повнолітнього віку. Результат запишіть в змінну isAdult і виведіть в консоль.
// const isAdult = confirm('If you are 18 years old or older press "Yes", if you are younger than 18 press "Cancel"');
// isAdult === true ? console.log('The user is a grownup') : console.log('The user is not a grownup');

// 6. В зовнішньому файлі напишіть скріпт, в якому оголосіть змінні, для збереження таких даних:
// - ваше ім’я
// - ваше прізвище
// - навчальна група
// - ваш рік народження.
// Присвойте змінним відповідні значення. 
// Створіть та проініціалізуйте логічну змінну для збереження вашого сімейного стану.
// Визначте тип кожної змінної. 
// Виведіть значення змінних в консоль, відповідно до їх типу, в такому порядку: Number, Boolean, String. 
// Створіть 2 довільних змінних типу Null і Undefined відповідно. Виведіть їх тип в консоль.
// const userName = 'Olia';
// const userSurname = 'Iaremchuk';
// const userGroup = 'JS';
// const userBirthYear = 1989;
// const userMaritalStatus = true;
// console.log(userBirthYear, userMaritalStatus, userName, userSurname, userGroup);
// const userUdefined = undefined;
// const userNull = null;
// console.log(userUdefined, userNull);

// 7. За допомогою функції prompt() напишіть скріпт, який послідовно запитує в користувача логін, емейл та пароль, і виводить на екран повідомлення із введеними даними. Наприклад “Dear User, your email is usermale@gmail.com, your password is qwerty”.
// const userName = prompt('Enter your name');
// const userEmail = prompt('Enter your email');
// const userPassword = prompt('Enter your password');
// document.write(`Dear ${userName}, your email is ${userEmail}, your password is ${userPassword}.`);

// 8. Напишіть скріпт, який вираховує кількість секунд в годині, в добі, в місяці, записує результати в відповідні змінні, і виводить їх значення на екран.
// const quantityOfSecondsInHour = 60*60 + ' seconds'; 
// const quantityOfSecondsInDay = 60*60*24 + ' seconds';
// const quantityOfSecondsInMonth = 60*60*24*30 + ' seconds';
// document.write(`There are ${quantityOfSecondsInHour} in one hour. There are ${quantityOfSecondsInDay} in one day. There are ${quantityOfSecondsInMonth} in one month that has 30 days.`);