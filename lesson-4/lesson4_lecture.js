// 1. Яке останне значення буде виведено на екран? Чому?
// let i = 7;

// while (i) {
//   console.log(--i);
// }

// console.log("Фінальне значееня: i = " + i);  // Результат: 0

// 2. Яке значення виведе цикл while?
// let q = 0;

// while (q++ < 5) {
//   console.log(q);
// }

// console.log(`Фінальне значееня: i = ${q}`); // Результат: ?

// Змінна q ініціалізується значенням 0
// q дорівнює 0, умова 0 < 5 істинна, q стає 1, виводиться 1.
// q дорівнює 1, умова 1 < 5 істинна, q стає 2, виводиться 2.
// q дорівнює 2, умова 2 < 5 істинна, q стає 3, виводиться 3.
// q дорівнює 3, умова 3 < 5 істинна, q стає 4, виводиться 4.
// q дорівнює 4, умова 4 < 5 істинна, q стає 5, виводиться 5.
// q дорівнює 5, умова 5 < 5 хибна,q стає 6, цикл завершується.

// 3. Чи потрібен else?

// function checkAge(age) {
//   // Як називається цей спосіб оголошення функції?
//   if (age >= 21) {
//     return true;
//   } else {
//     return console.log("Питай батьків");
//   }
// }

// checkAge(21);

// 4. Цей цикл безкінечний. Він ніколи не закінчується. Чому?

// let j = 0;

// while (j != 10) {
//   console.log(j += 0.2);
// }

// console.log(0.1 + 0.2);
// console.log(0.2 + 0.2 + 0.2 + 0.2 + 0.2);

// 5. Що буде виведено у консоль?

// for (let i = 1; i < 5; i++) {
//   if (i === 3) continue;
//   console.log(i);
// }

// 6. Що буде виведено у консоль?

// let a = 10;

// do {
//   a += 1;
//   console.log(a);
// } while (a < 5);

// console.log(`Після циклу: ${a}`);

// 7. Що буде виведено у консоль?

// let b = 10;
// if (b) {
//   let b = 3;
//   b *= b;
// }
// console.log(b);

// 8. Що буде виведено у консоль?

// const sum = (num1, num2 = num1) => {
//   // Як називається цей спосіб оголошення функції?
//   console.log(num1 + num2);
// };

// sum(); // Результат: NaN
// sum(10); // Результат: 20
// sum(10, 5); // Результат: 15

//------------------------------------------

// Які в нас є типи даних? Як вони називаються?

/* ---- Методи примітивів! ----

    Примітивні типи даних — це типи, які є базовими і не можуть бути розбиті на складові. 
    Вони є найпростішими типами даних і зберігають значення без додаткових методів або властивостей. 

    Number: Представляє числові значення (цілі числа і числа з плаваючою комою), наприклад, 42 або 3.14.
    String: Представляє рядки символів, наприклад, "Hello, world!".
    Boolean: Представляє логічні значення true або false.
    Undefined: Означає, що змінна була оголошена, але не має значення. 
    Null: Означає навмисну відсутність будь-якого об'єкта або значення.
    Symbol: Представляє унікальне і незмінне значення.
    BigInt: Представляє цілі числа довільної довжини. 
*/

/* ---- Методи Number ----

В JavaScript тип Number має різні методи для роботи з числами. 
Ці методи можна поділити на методи-екземпляри (використовуються на об'єктах Number) 
та статичні методи (викликаються безпосередньо на самому конструкторі Number). 

Ось декілька статичних методів: 

--- Методи Number.parseInt() і Number.parseFloat()​ 

Перетворюють рядок символ за символом, доки це можливо. 
У разі виникнення помилки повертається підсумкове число.

Метод Number.parseInt() парсить з рядка ціле число. 
*/

// const valueA = "5";
// console.log(Number(valueA)); // 5
// console.log(typeof Number(valueA));  // "number"

// const valueB = "random string";
// console.log(Number(valueB)); // NaN
// console.log(typeof Number(valueB));  // "number"

// console.log(Number.parseInt("5px")); // Результат: 5
// console.log(Number.parseInt("12qwe74")); // Результат: 12
// console.log(Number.parseInt("12.46qwe79")); // Результат: 12
// console.log(Number.parseInt("qweqwe")); // Результат: NaN

// Метод Number.parseFloat() парсить з рядка дробове число.

// console.log(Number.parseFloat("5px"));  // Результат: 5
// console.log(Number.parseFloat("12qwe74"));  // Результат: 12
// console.log(Number.parseFloat("12.46qwe79"));   // Результат: 12.46
// console.log(Number.parseFloat("qweqwe"));   // Результат: NaN

/* --- Перевірка на число
    Є два схожі методи для перевірки операнда на число: 
    isNaN(val) та Number.isNaN(val). 

    isNaN(val) конвертує значення в число і перевіряє, чи вказане значення є NaN і повертає:
    true - якщо значення val - NaN
    false - якщо значення val - не NaN  
*/

// let a = 'qwerty' / 10;

// console.log(isNaN(a)); // Результат: true
// console.log(isNaN(NaN)); // Результат: true
// console.log(isNaN(undefined)); // Результат: true
// console.log(isNaN(null)); // Результат: false
// console.log(isNaN(20)); // Результат: false
// console.log(isNaN("20")); // Результат: false
// console.log(isNaN("qwerty")); // Результат: true

/* 
    Number.isNaN(val) тільки перевіряє, чи значення val є NaN та НЕ намагається перевести val в число.
    Він повертає: 
    і повертає:
    true - якщо значення val - NaN
    false - якщо значення val - не NaN
 */

// let a = "qwerty" / 10;

// console.log(Number.isNaN(a));    // Результат: true
// console.log(Number.isNaN(NaN));  // Результат: true
// console.log(Number.isNaN(undefined));    // Результат: false
// console.log(Number.isNaN(null)); // Результат: false
// console.log(Number.isNaN(20));   // Результат: false
// console.log(Number.isNaN("20")); // Результат: false
// console.log(Number.isNaN("qwerty")); // Результат: false

// Приклад використання:

// let yourAge = null;
// if (isNaN(yourAge)) {
//   console.log("Age is invalid. Please enter a valid number.");
// } else {
//   console.log(`Your age is ${yourAge}.`);
// }

// let yourAge = '10';
// if (Number.isNaN(yourAge)) {
//     console.log("Age is invalid. Please enter a valid number.");
// } else {
//     console.log(`Your age is ${yourAge}.`);
// }

// Number.isInteger - використовується для перевірки, чи є переданне значення цілим числом.
// Метод НЕ буде намагатись перетворити операнд в ціле число

// console.log(Number.isInteger(42)); // Результат: true
// console.log(Number.isInteger(42.12)); // Результат: false
// console.log(Number.isInteger("qwerty")); // Результат: false
// console.log(Number.isInteger(true)); // Результат: false
// console.log(Number.isInteger(NaN)); // Результат: false
// console.log(Number.isInteger(Infinity)); // Результат: false

// Number.isFinite - використовується для перевірки, чи є передене значення скінченим числом
// Метод НЕ буде намагатись перетворити операнд в ціле число

// console.log(Number.isFinite(5)); // Результат: true
// console.log(Number.isFinite(42.12)); // Результат: true
// console.log(Number.isFinite("5")); // Результат: false
// console.log(Number.isFinite(true)); // Результат: false
// console.log(Number.isFinite(NaN)); // Результат: false
// console.log(Number.isFinite(Infinity)); // Результат: false

// value.toFixed() - скорочення до певного знаку після коми.
// Важливо пам'ятати, що value.toFixed() БУДЕ округляти value в результаті скорочення

// let n = 12.4544322;
// let str = n.toFixed(4);
// console.log(str);

// console.log(0.17 + 0.24); // 0.41000000000000003
// console.log((0.17 + 0.24).toFixed(2)); // Результат: 0.41

// value.toPrecision() - метод встановлює загальну кількість цифр у числі, включаючи цілу частину, та знаки після коми.
// ????? А от value.toPrecision() - буде округляти значення.

// let num = 123.34356546;
// let formattedNum = num.toPrecision(6);

// console.log(12345..toPrecision(4)) // Поверне число в шіснадцятковій системі числення

// console.log(num);
// console.log(formattedNum); // Результат: 123.344

//----------------------------------------------------------------------------

/* 
------ Класс Math

    Один із вбудованих класів, який надає набір методів для роботи з числами. 
    Знання всіх методів напам'ять не вимагається, тільки деяких, найбільш корисних.
 */

// Округлення

// Math.floor(num) - повертає найменше ціле число, менше, або яке дорівнює зазначеному числу
// console.log(Math.floor(1.7)); // 1

// Math.ceil(num) - повертає найбільше ціле число, більше, або яке дорівнює зазначеному числу.
// console.log(Math.ceil(1.2)); // 2

// Math.round(num) - повертає значення числа, округленого до найближчого цілого
// console.log(Math.round(1.2)); // 1
// console.log(Math.round(1.5)); // 2

// Math.max(num1, num2, ...) - повертає найбільше ціле число з набору
// console.log(Math.max(20, 10, 50, 40)); // 50

// Math.min(num1, num2, ...) - повертає найменше ціле число з набору
// console.log(Math.min(20, 10, 50, 40)); // 10

// Math.pow(base, exponent) - піднесення до степеня
// console.log(Math.pow(2, 4));    // Результат: 16

// Math.random() - повертає псевдовипадкове число в діапазоні [0, 1), тобто, від 0 включно до 1 не включно

// console.log(Math.random()); // випадкове число між 0 і 1

// let rnd = Math.random();
// console.log(rnd);

// Ми можемо перетворити повернене число на Integer

// let rnd = Math.random();
// // console.log(rnd);

// rnd *= 10;
// // console.log(rnd);

// rnd = Math.round(rnd);
// console.log(rnd);

// let rnd = Math.round(Math.random() * 100)
// console.log(rnd);

// Створення випадкового числа з плаваючою крапкою від min до max (не враховуючи max)

// function random(min, max) {
//   return min + Math.random() * (max - min);
// }

// console.log(random(1, 5));

// -------------------------------------------------------------------------------------

// Методи String

// Найпростіший рядок
// console.log("Бачиш лапки - це рядок");
// console.log('І не важливо, які саме лапки');

// Але, якщо ми захочемо передати в середені рядка слово у лапках?
// console.log("Мій улюблений фільм - "Тітанік"");

// Екранування символів

/* 
    Екранування символів (escaping) в JavaScript — це процес використання спеціальних символів для представлення символів, 
    які інакше мали б особливе значення або не могли б бути представлені прямо в коді. Екранування забезпечує правильне оброблення 
    та відображення спеціальних символів.
*/

// console.log("Мій улюблений фільм - \"Тітанік\"");

// Лапки  - це далеко не єдиний випадок, коли може знадобитись екранування:

// Рядок з одинарними лапками та зворотним слешем
// let singleQuoted = 'It\'s a beautiful day!';
// console.log(singleQuoted);

// Рядок з подвійними лапками
// let doubleQuoted = "She said, \"Hello!\"";
// console.log(doubleQuoted);

// Рядок з новим рядком та табуляцією
// let multiLine = "Line 1\n\tLine 2\n\t\tLine 3";
// console.log(multiLine);

// Рядок зі зворотними слешами
// let path = "C:\\ProgramFiles\\MyApp";
// console.log(path);

// lenght - вказує на кількість символів
// const myString = "Hello";
// console.log(myString.length); // Результат: 5

// charAt - дозволяє отримати символ за певним індексом у рядку
// Якщо символу з таким індексом немає, він повертає "" - пусту строку
// const str = "Hello, World!";

// console.log(str.charAt(0)); // Результат: H
// console.log(str.charAt(6)); // Результат: " " - пробіл
// console.log(str.charAt(7)); // Результат: W
// console.log(str.charAt(13)); // Результат: "" - пуста строка

// Наразі є новий стандарт для отримання символу за індексом в рядку,
// який отримує доступ через індекс у масиві
// Якщо символу з таким індексом немає, він повертає undefined - не визначено

// const str = "Hello, World!";

// console.log(str[0]); // Результат: H
// console.log(str[3]); // Результат: друга l
// console.log(str[5]); // Результат: ,
// console.log(str[13]); // Результат: undefined

// repeat - дозволяє повторити вміст рядка декілька разів і стоворити новий рядок

// const str = "QA pro";
// const repeatStr = str.repeat(3);
// console.log(repeatStr);  // Результат: "QA proQA proQA pro"

// Всім вже відома конкатенація

// let str = "QA ";
// console.log(str.concat("Pro!"));
// console.log(str.concat("Pro!", " in Hillel! ")); // Результат: "QA Pro! in Hillel! "

// endsWith - використовується для перевірки, чи закінчується рядок заданим підрядком
// чутливий до регістру

// const str = "script.js";

// console.log(str.endsWith("js")); // Результат: true
// console.log(str.endsWith("Js")); // Результат: false
// console.log(str.endsWith("script")); // Результат: false

// includes - метод перевіряє, чи містить рядок певний підрядок, і повертає true або false.
// чутливий до регістру

// let phrase = "Hello, world!";

// console.log(phrase.includes("world"));   // Результат: true
// console.log(phrase.includes("llo, w"));  // Результат: true
// console.log(phrase.includes("World"));   // Результат: false
// console.log(phrase.includes("foo")); // Результат: false

// startsWith  - метод перевіряє, чи починається рядок з певної підрядка.
// чутливий до регістру

// let text = "JavaScript is fun";

// console.log(text.startsWith("JavaScript")); // Результат: true
// console.log(text.startsWith("javascript")); // Результат: false
// console.log(text.startsWith("fun")); // Результат: false

// indexOf / lastIndexOf
/*

    indexOf(): Повертає перше входження підрядка в рядок або -1, якщо підрядок не знайдено.
    lastIndexOf(): Повертає останнє входження підрядка в рядок або -1, якщо підрядок не знайдено.

    Входження - це співпадіння підстоки в строці. Перше входження - це перше співпадіння, і повертатиметься індекс
    першого символу у співпадінні.
*/

let sentence = "Find the location of the word 'the' in this sentence.";

// console.log(sentence.indexOf("the")); // Результат: 5 (перше входження)
// console.log(sentence.lastIndexOf("the")); // Результат: 31 (останнє входження)
// console.log(sentence.indexOf("word")); // Результат: 25
// console.log(sentence.indexOf("missing")); // Результат: -1

// padStart/padEnd
/*  
    --- padStart(targetLength, padString): Додає padString до початку рядка, щоб досягти targetLength.
    --- padEnd(targetLength, padString): Додає padString до кінця рядка, щоб досягти targetLength. 

    Якщо не вказувати другий параметр, додаватимуться пробіли
*/

// let number = "5";

// console.log(number.padStart(3));    // Результат: "  5"
// console.log(number.padEnd(3));  // Результат: "5  "

// console.log(number.padStart(3, "0"));   // Результат: "005"
// console.log(number.padEnd(3, "0")); // Результат: "500"

// console.log(number.padStart(3, "qsa")); // Результат: "qs5"
// console.log(number.padEnd(3, "*")); // Результат: 5**

// trim, trimStart, trimEnd
/* 
    --- trim(): Видаляє пробіли з обох кінців рядка.
    --- trimStart(): Видаляє пробіли тільки з початку рядка.
    --- trimEnd(): Видаляє пробіли тільки з кінця рядка. 
*/

// let str = "   Hello, world!   ";

// console.log(str.trim()); // Результат: "Hello, world!"
// console.log(str.trimStart()); // Результат: "Hello, world!   "
// console.log(str.trimEnd()); // Результат: "   Hello, world!"

// replace
/* 
    Метод replace() замінює перше входження підрядка або регулярного виразу на новий рядок. 
*/

// let greeting = "Hello, John!";
// let newGreeting = greeting.replace("John", "Jane");

// console.log(newGreeting); // Результат: "Hello, Jane!"

// substring/ substr/ slice
/*  
    --- substring(start, end): Повертає частину рядка між start і end (не включаючи end).
    --- substr(start, length): Повертає частину рядка, починаючи з start на length символів.
    --- slice(start, end): Повертає частину рядка між start і end (не включаючи end), підтримує від'ємні індекси. 
*/

// let text = "JavaScript";

// console.log(text.substring(0, 4));  // Результат: "Java"
// console.log(text.substr(4, 6)); // Результат: "Script"
// console.log(text.slice(4)); // Результат: "Script"
// console.log(text.slice(-6));    // Результат: "Script"
// console.log(text.slice(-5, -1));    // Результат: "crip"

// toUpperCase / toLowerCase

// let greeting = "Hello, World!";
// let upperCaseGreeting = greeting.toUpperCase();

// console.log(upperCaseGreeting); // Результат: "HELLO, WORLD!"

// let greeting = "Hello, World!";
// let lowerCaseGreeting = greeting.toLowerCase();

// console.log(lowerCaseGreeting); // Результат: "hello, world!"
