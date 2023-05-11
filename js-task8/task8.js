// 8. REGULAR EXPRESSIONS. MEMORY MANAGEMENT

// 1. Напишіть функцію, яка перевірятиме чи перший символ в рядку написаний в верхньому регістрі, чи ні. 
// Приклад роботи:
// upperCase('regexp'); 
// // "String's not starts with uppercase character"
// upperCase('RegExp');
// // "String's starts with uppercase character"

// const regExp = /^[A-Z]/;
// upperCase = text => regExp.test(text) ? console.log("String starts with uppercase character") : console.log("String doesn't start with uppercase character");
// upperCase('regexp');

// 2. Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу. 
// Валідними вважаються всі символи на різних позиціях.
// Приклад роботи:
// checkEmail("Qmail2@gmail.com"); // true
// const regExp = /^\w+\W*\w+@{1}\w+.\w+\W*\w*$/;
// checkEmail = text => regExp.test(text) ? console.log('true') : console.log('false');
// checkEmail("Qmail2@gmail.com");

// 3. Напишіть регулярний вираз, який в рядковому тексті 2 підстрічки буде міняти місцями.
// Приклад роботи:
// Вхідний рядок: "Java Script"
// Вихід: “Script, Java”
// const text = 'Java Script';
// const swapWords = text.match(/\w+$/) + ', ' + text.match(/^\w+/);
// console.log(swapWords);

// 4. Напишіть функцію, яка виконуватиме валідацію номера банківської карти (9999-9999-9999-9999).
// const cardNumberValidator = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
// validateCardNumber = data => cardNumberValidator.test(data) ? console.log('Valid') : console.log('Not valid');
// validateCardNumber('9999-9999-9999-9999');

// 5. Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу.
// Вимоги:
//  •  Цифри (0-9).
//  •  Тільки латинські літери в великому (A-Z) і малому (a-z) регістрах.
//  •  В тілі емейла допустимі лишеі символи “_” і “-”. Але вони не можуть бути 1-им символом емейлу.
//  •  Символ “-” не може повторюватися.
// checkEmail('my_mail@gmail.com');
// "Email is correct!"
// checkEmail('#my_mail@gmail.com');
// "Email is not correct!"
// checkEmail('my_ma--il@gmail.com');
// "Email is not correct!"
// const emailValidator = /^\w+-?\w+@{1}\w+.\w+\W*\w*$/;
// checkEmail = email => emailValidator.test(email) ? console.log('Email is correct!') : console.log('Email is not correct!');
// checkEmail('my_mail@gmail.com');
// checkEmail('#my_mail@gmail.com');
// checkEmail('my_ma--il@gmail.com');

// 6. Напишіть функцію, яка перевіряє правильність логіна. Правильний логін - рядок від 2 до 10 символів, що містить лише 
// букви та числа, номер не може бути першим. Функція має приймати рядок і знаходити усі числа в цьому рядку, включаючи числа 
// з плаваючою комою (наприклад, 3.4).
// Приклад роботи:
// checkLogin('ee1.1ret3');
// true 
// //1.1, 3
// checkLogin('ee1*1ret3');
// false 
// //1, 1, 3
// const validateLogIn = /^[a-zA-Z][a-zA-Z0-9.]{2,10}$/;
// checkLogin = data => {
//     validateLogIn.test(data) ? console.log(true) : console.log(false);
//     const number = data.match(/[0-9]+(?:\.[0-9]+)?/g);
//     console.log(number);
// };
// checkLogin('ee1.1ret3');
// checkLogin('ee1*1ret3');