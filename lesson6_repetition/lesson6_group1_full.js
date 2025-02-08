/*
    Завдання 1: 
    пояснити результати виконання коду нижче
*/

// 1
let str = "JavaScript";
let letter = str[1];
console.log(letter);

// 2
let text = "Джаваскріпт - це весело";
let length = text.length;
console.log(length);

// 3
var divisionResult = 0 / 0;
console.log(divisionResult, typeof divisionResult);

// 4
let guessWho = 3.14;
guessWho = "А тепер тут строка";
guessWho = false;
guessWho = 9.14;
console.log(guessWho, typeof guessWho);

// 5
const num = 42;
const str1 = "Shuba";
const sumResult = num + str1;
console.log(sumResult, typeof sumResult);

// 6
let subtractionResult = "40" - 4;
console.log(subtractionResult, typeof subtractionResult);

// 7
let n = 7;
n *= 9 + 1;
console.log(n);

// 8
var a = 4;
var b = 3;
var c = (a = b);
console.log(c);

// 9
var number = 65;
number %= 2;
console.log(number);

// 10
console.log(17 !== "17");

// 11
console.log(+null);

// 12
let sex = "male";
let birthday = 19;
let discount;
if (sex === "male") {
  discount = birthday >= 25 ? "30%" : "10%";
} else if (sex === "female") {
  discount = birthday === 19 ? "30%" : "10%";
} else {
  discount = birthday === 7 ? "10%" : "5%";
}
console.log(discount);

// 13
let firstName = "";
let lastName = "Bulochka";
let nickName = "";
console.log(firstName || lastName || nickName || "Анонім");

// 14
console.log(null || 2 && 3 || 4);

// 15. Яке буде останне значення?
var i = 0;
do {
  i += 3;
  console.log("i = " + i);
} while (i < 8);

/* 
    Завдання 2:
    Вирахуйте значення площі кола на основі наданих значень.
    Площа кола дорівню добутку квадрату радіуса на число Пі(3.1415)
    Виведіть результат 
*/

var r = 15; // радіус
var Pi = 3.1415; // число Пі

/* 
    Завдання 3:
    Виведіть на екран загальну вартість всіх продуктів, які є на складі
*/

let productPrice1 = 101.5; // ціна 1го продукту
let productPrice2 = 50.25; // ціна 2го продукту
let productPrice3 = 10.11; // ціна 3го продукту

let productQuantity1 = 5; // кількість одениць 1го продукту на складі
let productQuantity2 = 9; // кількість одениць 2го продукту на складі
let productQuantity3 = 15; // кількість одениць 3го продукту на складі

/* 
    Завдання 4:
    Змініть switch на if...else. 
    Поведінка сценарія, після зміни, повинно залишитись без змін 
    (зверніть увагу на варіанти USA и Great Britain). 
*/

let country = prompt("Введіть назву країни");

switch (country) {
  case "USA":
  case "Great Britain":
    alert("Англійська мова");
    break;

  case "Germany":
    alert("Німецька мова");
    break;

  case "France":
    alert("Французька мова");
    break;

  default:
    alert("Вказаної країни немає в списку");
}

/* 
    Завдання 4:
    За допомогою цикла for виведіть всі числа котрі НЕ діляться на 6 між 0 и 100 
*/

/* 
    Завдання 5:
    Створіть функцію max(a, b), яка повертає більше число із чисел а и b без 
    використання бібліотеки Math
*/
