// Перетворення типів

//--------------------------------------------------------------------------------------
//--- Динамічна типізація

// let guessWho = 3.14;
// console.log(guessWho);
// guessWho = 'А тепер тут строка';
// console.log(guessWho);
// guessWho = false;
// console.log(guessWho);

//------------------------------------------------------------------------------------------------
/* --- Перевірка типів та використання typeof ---
Для перевірки типів даних та отримання інформації про тип об'єкта,
використовується оператор typeof.
Оператор typeof повертає рядкове значення, яке вказує на тип даних об'єкта.
*/

// console.log(typeof "Hello"); // Результат: ?
// console.log(typeof 42);    // Результат: ?
// console.log(typeof true);  // Результат: ?
// console.log(typeof "42");  // Результат: ?

// console.log(typeof [1, 2, 3]); // Результат: ?
// console.log(typeof { name: "John", age: 30 }); // Результат: ?
// console.log(typeof undefined); // Результат: ?
// console.log(typeof "" ); // Результат: ?

// let variable;
// console.log(typeof variable);  // Результат: ?

// let emptyValue = null;
// console.log(typeof emptyValue);  // Результат: ?

// console.log(typeof NaN); //  Результат: ?

// let username;
// console.log(typeof username); // Результат: ?

// let inputValue = null;
// console.log(typeof inputValue); // Результат: ?

// const quantity = 17;
// console.log(typeof quantity); // Результат: ?

// const message = "JavaScript is awesome!";
// console.log(typeof message); //  Результат: ?

// const isSidebarOpen = false;
// console.log(typeof isSidebarOpen); //  Результат: ?

// А як нам дізнатися якого типу яка змінна? На допомогу приходить NaN

// const validNumber = Number("51");
// console.log(Number.isNaN(validNumber));  // Результат: ?

// const invalidNumber = Number("qweqwe");
// console.log(Number.isNaN(invalidNumber));  // Результат: ?

//--------------------------------------------------------------------------------------------------
/**
 Перетворення типів

 - Перетворення до рядка
 - Перетворення до числа
 - Перетворення до логічного значення

 В JavaScript існують два типи перетворень даних: явні (які ви явно вказуєте у коді)
 та неявні (які відбуваються автоматично за певних обставин).*/

// --- Явне перетворення типів ---

//--------------------------------------------------------------------------------------------------
// Number(): Ця функція використовується для перетворення значень в числовий тип. Наприклад:

// const str = "42";
// console.log(str, typeof str)
// const num = Number(str);
// console.log(num, typeof num);   // Результат: ?

// let number = Number(undefined);
// console.log(number, typeof number);  // Результат: ?

// let number = Number(null);
// console.log(number, typeof number);  // Результат: ?

/* null в JavaScript використовується для позначення відсутності значення.
Коли функція Number отримує null як аргумент, вона перетворює його на число 0. */

// let number = Number(true);
// console.log(number, typeof number);  // Результат: ?

/* В JavaScript значення true використовується для представлення логічної істини.
Коли функція Number отримує true як аргумент, вона перетворює його на число 1. */

// let number = Number('kotletka');
// console.log(number, typeof number);  // Результат: ?

/* Рядок "kotletka" не містить дійсних числових символів.
Тому перетворення зазнає невдачі, і результатом стає NaN (Not a Number). */

//--------------------------------------------------------------------------------------------------
//String(): Ця функція перетворює значення в рядковий тип даних. Наприклад:

// const num = 42;
// console.log(num, typeof num) //Результат: ?

// const str = String(num);
// console.log(str, typeof str); // Результат: ?

// let text = String(undefined);
// console.log(text, typeof text);  // Результат: ?

// Коли функція String отримує undefined як аргумент, вона перетворює його на спеціальний рядок "undefined".

// let text = String(null);
// console.log(text, typeof text); // Результат: ?

// let text = String(false);
// console.log(text, typeof text); // Результат: ?

//--------------------------------------------------------------------------------------------------
/* Boolean(): Вона дозволяє перетворити значення в логічний тип (true або false)
 JavaScript визначив набір значень, які завжди перетворюються в false під час логічних операцій.
Ці значення: false, 0, "" (порожній рядок), null, undefined, NaN (Not a Number) */

// const num = 42;
// console.log(num, typeof num) // Результат: ?

// const bool = Boolean(num);
// console.log(bool, typeof bool); // Результат: ?

// let bool = Boolean('2');
// console.log(bool, typeof  bool);  // Результат: ?

// let bool = Boolean(undefined);
// console.log(bool, typeof  bool);  // Результат: ?

// let bool = Boolean(null);
// console.log(bool, typeof  bool);  // Результат: ?

// let bool = Boolean('');
// console.log(bool, typeof  bool);  // Результат: ?

// let bool = Boolean(-9);
// console.log(bool, typeof  bool);  // Результат: ?

// --- Неявне перетворення ---

// Число + Рядок:

// const num = 42;
// const str = "Apple";
// const result = num + str;

// console.log(result)
// console.log(typeof result); // Результат: ?

// const num = 42;
// const str = "2";
// const result = num + str;
// console.log(result, typeof result); // Результат: ?

// Рядок + Булеве значення:

// const str = "true";
// const bool = true;
// const result = str + bool;  // Результат: ?
// console.log(result, typeof result);

//Question 0. Який буде результат та тип данних цього результату?
// console.log(3 + 4);
// console.log('3 + 4');
// console.log('3' + '4');

//Question 1. Який буде результат та тип данних цього результату?
// const num = 4;
// const str = "Kovbasa";
// const result = num + str + num;
// console.log(result, typeof result);

//Question 2. Який буде результат та тип данних цього результату?
// const num = 5;
// const str = "PlayStation";
// const result = "Hello" + str + num;
// console.log(result, typeof result);

//Question 3. Який буде результат та тип данних цього результату?
// let drinkName = "Rom";
// let count = (drinkName + 12).length;
// console.log(count);

//--------------------------------------------------------------------------------------------------
// --- Арифметичні опердції---

// Операнди і оператори

// - Додавання (+)
// - Віднімання (-)
// - Поділ (/)
// - Множення (*)
// - Залишок від поділу (%)
// - Зведення в ступінь (**)
// - Інкремент (++)
// - Декремент (--)

// console.log(4 + true);
// console.log(false + true);
// console.log("JS is cool: " + true);

// console.log("Hello" - 5);
// console.log("55" - 5);
// console.log(5 - null);

// let n = 2;

// n += 5;
// console.log(n); // Результат: ?

// n -= 2;
// console.log(n); // Результат: ?

// n *= 2;
// console.log(n); // Результат: ?

// n /= 2;
// console.log(n); // Результат: ?

// console.log(12 % 6); // Результат: ?
// console.log(-6 % 2); // Результат: ?

// let counter = 2;
// let counter1 = 2;

// counter = counter +1;
// console.log(counter);

// counter1++;
// console.log(counter1);

// --- Логічні операції ---

// Логічне «І»
// <вираз> && <вираз>

// const age = 20;
// console.log(age > 10 && age < 30); // true && true -> true

/* Оператор && в JavaScript працює за принципом короткого замикання (short-circuiting), 
перевіряючи всі операнди зліва направо та повертаючи перше "фальшиве" значення або останнє 
істинне, якщо всі операнди істинні. */

// const age = 50;
// console.log(age > 60 && age < 120); // true && false -> false
// console.log(age > 80 && age < 120); // false && true -> false

// console.log(1 && 5 && "" && false);
// console.log("Mango" && "Polly");

// Логічне «АБО»
// <вираз> || <вираз>

/* Оператор || в JavaScript також працює за принципом короткого замикання 
(short-circuiting), але він повертає перше "істинне" значення (truthy) або 
останнє "хибне" значення (falsy), якщо всі операнди хибні. */

// const age = 5;
// console.log(age < 10 || age > 30); // true || false -> true

// const age = 40;
// console.log(age < 10 || age > 30); // false || true -> true

// const age = 20;
// console.log(age < 10 || age > 30); // false || false -> false

// console.log( "" || false || 0 || null || undefined );

// Логічне «НЕ»
/*Оператор ! приводить операнд до значення типу Boolean, якщо необхідно, а потім - робить 
// інверсію - змінює його на протилежний true -> false або false -> true. */

// console.log(!true);
// console.log(!false);
// console.log(!3);
// console.log(!"Mango");
// console.log(!0);
// console.log(!"");

// const isOnline = true;
// const isNotOnline = !isOnline;
// console.log(isNotOnline, typeof isNotOnline)  // Результат: ?

// Рівність та нерівність
// - Присвоєння (=)
// - Рівність (==)
// - Строга рівність (===)
// - Нерівність (!=)
// - Строга нерівність (!==)

// let num1 = 20;
// let num2 = 30;

// console.log(num1 == num2); // Результат: ?
// console.log(num1 === num2); // Результат: ?

// console.log(num1 != num2); // Результат: ?
// console.log(num1 !== num2); // Результат: ?

//--------------------------------------------------------------------------------------------------
// --- Умовні конструкції ---

// IF

// let cost = 0;
// const subscription = "pro";

// if (subscription === "pro") {
//   cost = 100;
// }

// console.log(cost); // 100

// IF...ELSE

// let cost;
// const subscription = "free";

// console.log(cost);

// if (subscription === "pro") {
//   cost = 100;
// } else {
//   cost = 0;
// }

// console.log(cost); // 0

//ELSE...IF

// let cost;
// const subscription = "none";

// if (subscription === "free") {
//   cost = 0;
// } else if (subscription === "pro") {
//   cost = 100;
// } else if (subscription === "premium") {
//   cost = 500;
// } else {
//   console.log("Invalid subscription type");
// }

// console.log(cost);

// ТЕРНАРНИЙ ОПЕРАТОР

// let type;
// const age = 20;

// if (age >= 18) {
//   type = "adult";
// } else {
//   type = "child";
// }

// console.log(type); // "adult"

// <умова> ? <вираз_якщо_умова_правдива> : <вираз_якщо_умова_хибна>

// const age = 13;
// const type = age >= 18 ? "adult" : "child";
// console.log(type);

// const num1 = 5;
// const num2 = 10;
// let biggerNumber = num1 > num2 ? num1 : num2;
// console.log(biggerNumber); // 10

//SWITCH

// let cost;
// const subscription = "free";

// switch (subscription) {
//   case "free":
//     cost = 0;
//     break;

//   case "pro":
//     cost = 100;
//     break;

//   case "premium":
//     cost = 500;
//     break;

//   default:
//     console.log("Invalid subscription type");
// }

// console.log(cost); // 500

// let cost;
// const subscription = "qwee";

// if (subscription > "free") {
//   cost = 0;
// } else if (subscription === "pro") {
//   cost = 100;
// } else if (subscription === "premium") {
//   cost = 500;
// } else {
//   console.log("Invalid subscription type");
// }

// PROMT, ALERT, CONFIRM

// const message = "JavaScript is awesome!";
// alert(message);

// Просимо клієнта підтвердити бронювання готелю
// і зберігаємо результат роботи confirm у змінну

// const isComing = confirm("Please confirm hotel reservation");
// alert(`Is the guest comming: ${isComing}`);

// Запитуємо назву готеля, в якому хотів би зупинитися клієнт
// і зберігаємо результат виклику prompt у змінну.

// const hotelName = prompt("Please enter desired hotel name");
// alert(`Our guest picked the ${hotelName} hotel, yay!`);

// const value = prompt("Please enter a number!");
// alert(`The value is ${value} and it's type is ${typeof value}.`);

// TRY...CATCH

// try {
//   let result = someFunction(); // Припустимо, що ця функція не існує
//   console.log(result);
// } catch (error) {
//   console.log("Сталася помилка: " + error.message);
// }

// function divide(a, b) {
//   try {
//     if (b === 0) {
//       throw new Error("Ділення на нуль недопустиме.");
//     }
//     return a / b;
//   } catch (error) {
//     console.error("Помилка: " + error.message);
//     return null;
//   }
// }

// const result = divide(10, 0);
// if (result === null) {
//   console.log("Ділення не вдалося.");
// } else {
//   console.log("Результат: " + result);
// }

// TRY...CATCH...FANALLY
// try {
//   // Спробуємо виконати код, який може викликати помилку
//   let result = 10 / 2; // Все ок
//   console.log(result);
// } catch (error) {
//   // Якщо виникла помилка, обробляємо її тут
//   console.log("Помилка:", error.message);
// } finally {
//   // Цей код виконується завжди, незалежно від того, чи була помилка
//   console.log("Цей блок виконується завжди");
// }
