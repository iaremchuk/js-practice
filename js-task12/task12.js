// 1. Створити Node.js http-сервер, який слухатиме запити на порт 5000 на локальній  машині. 
// Сервер повинен повертати сторінку, що містить ім’я поточного користувача операційної системи, тип операційної 
// системи, час роботи системи в хвилинах (використати модуль OS), поточну робочу директорію і назву файлу сервера (використати модуль path)

// const http = require('http');
// const os = require('os');
// const path = require('path');
// const port = 5000;

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     const username = os.userInfo().username;
//     const osType = os.type();
//     const uptime = Math.floor(os.uptime() / 60);
//     const currentDirectory = process.cwd();
//     const serverFilename = path.basename(__filename);
//     const html = `
//     <html>
//         <head>
//           <title>System Information</title>
//         </head>
//         <body>
//           <h1>System Information</h1>
//           <p>Username: ${username}</p>
//           <p>Operating System: ${osType}</p>
//           <p>System Uptime (minutes): ${uptime}</p>
//           <p>Current Directory: ${currentDirectory}</p>
//           <p>Server Filename: ${serverFilename}</p>
//         </body>
//     </html>`;
//     res.end(html);
// });

// server.listen(port, () => {
//     console.log(`Server is listening on port ${port}`);
// });

// 2. Необхідно створити власний модуль personalmodule.js, який містить функцію, що приймає ім’я системного юзера і працює з поточним 
// часом та на основі пори доби виводить повідомлення із привітанням юзера. Щоб експортувати змінні чи функції модуля на зовні можна 
// використати об’єкт module.exports. 
// Створіть Node.js сервер, який з використанням функціоналу розробленого модуля повертатиме наступну сторінку:

// const http = require('http');
// const os = require('os');
// const port = 5000;
// const { greetUser } = require('./personalmodule');

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   const username = os.userInfo().username;
//   const html = `
//   <html>
//     <head>
//       <title>Say Hello to User</title>
//     </head>
//     <body>
//       <h1>${greetUser(username)}</h1>
//     </body>
//   </html>`;
//   res.end(html)
// });

// server.listen(port, () => {
//   console.log(`Server is listening on port ${port}`);
// });


// ⭐⭐⭐
// Створіть просту програму на Node.js, яка записує у файл текстову інформацію, яку користувач вводить з адресного рядка, а потім зчитує
//  цей файл та виводить вміст на екран.
// Кроки:
// Створити змінну, яка зберігатиме шлях до файлу, у який буде записана інформація.
// Використовуючи модуль fs (file system), створити функцію, яка дозволить записувати інформацію в файл.
// Використовуючи модуль http, створити сервер, який буде прослуховувати запити з адресного рядка та передавати
//  отриману інформацію функції writeToTextFile().
// Для зчитування даних з файлу, використовуйте модуль fs та функцію readFile()
// Для того, щоб вивести зчитану інформацію на екран, додайте відповідну логіку до серверу.*

// const fs = require('fs');
// const http = require('http');
// const url = require('url');
// const filePath = 'output.txt';

// function writeToTextFile(data) {
//   fs.writeFile(filePath, data, (err) => {
//     if (err) {
//       console.error('Error writing to file:', err);
//     } else {
//       console.log('Data written to file successfully.');
//     }
//   });
// }

// const server = http.createServer((req, res) => {
//     const query = url.parse(req.url, true).query;
//     const inputData = query.text;
  
//     if (inputData) {
//       writeToTextFile(inputData);
//       res.writeHead(200, { 'Content-Type': 'text/plain' });
//       res.write('Data written to file successfully.');
//       res.end();
//     } else {
//       fs.readFile(filePath, 'utf8', (err, data) => {
//         if (err) {
//           console.error('Error reading file:', err);
//           res.writeHead(500, { 'Content-Type': 'text/plain' });
//           res.write('Error reading file.');
//           res.end();
//         } else {
//           res.writeHead(200, { 'Content-Type': 'text/plain' });
//           res.write(data);
//           res.end();
//         }
//       });
//     }
//   });

//   server.listen(3000, () => {
//     console.log('Server is running on port 3000');
//   });