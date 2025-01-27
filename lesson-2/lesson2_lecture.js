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

// console.log(typeof "Hello"); // Результат: String
// console.log(typeof 42);    // Результат: Number
// console.log(typeof true);  // Результат: Boolean
// console.log(typeof "42");  // Результат: String

// const car = {
//     color: "red",
//     doors: 5
// }
// console.log(car.color);

// const carArray = ["BMW", "Lexus"]
// console.log(carArray[1]);

// console.log(typeof [1, 2, 3]); // Результат: Object
// console.log(typeof { name: "John", age: 30 }); // Результат: Object
// console.log(typeof undefined); // Результат: Undefined
// console.log(typeof ""); // Результат: String

// let a;
// let b = undefined;

// console.log(a, b)

// let variable;
// console.log(typeof variable);  // Результат: Undefined

// let emptyValue = null;
// console.log(typeof emptyValue);  // Результат: Object

// console.log(typeof NaN); //  Результат: Number

// let username;
// console.log(typeof username); // Результат: Undefined

// let inputValue = null;
// console.log(typeof inputValue); // Результат: Object

// const quantity = 17;
// console.log(typeof quantity); // Результат: Number

// const message = "JavaScript is awesome!";
// console.log(typeof message); //  Результат: String

// const isSidebarOpen = false;
// console.log(typeof isSidebarOpen); //  Результат: Boolean

// А як нам дізнатися якого типу яка змінна? На допомогу приходить NaN

// const validNumber = Number("51");
// console.log(Number.isNaN(validNumber));  // Результат: false

// const invalidNumber = Number("qweqwe");
// console.log(Number.isNaN(invalidNumber));  // Результат: true

// const invalidNumber = Number("52a13");
// console.log(Number.isNaN(invalidNumber));  // Результат: true

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
// console.log(str, typeof str); // Результат: 42, string
// const num = Number(str);
// console.log(num, typeof num);   // Результат: 42, number

// let number = Number(undefined);
// console.log(number, typeof number);  // Результат: NaN, number

// let number = Number(null);
// console.log(number, typeof number);  // Результат: 0, number

/* null в JavaScript використовується для позначення відсутності значення.
Коли функція Number отримує null як аргумент, вона перетворює його на число 0. */

// let number = Number(true);
// console.log(number, typeof number);  // Результат: 1, number

/* В JavaScript значення true використовується для представлення логічної істини.
Коли функція Number отримує true як аргумент, вона перетворює його на число 1. */

// let number = Number('kotletka');
// console.log(number, typeof number);  // Результат: ?

/* Рядок "kotletka" не містить дійсних числових символів.
Тому перетворення зазнає невдачі, і результатом стає NaN (Not a Number). */

//--------------------------------------------------------------------------------------------------
//String(): Ця функція перетворює значення в рядковий тип даних. Наприклад:

// const num = 42;
// console.log(num, typeof num); //Результат: 42, number

// const str = String(num);
// console.log(str, typeof str); // Результат: "42", string

// let text = String(undefined);
// console.log(text, typeof text);  // Результат: "undefined", string

// Коли функція String отримує undefined як аргумент, вона перетворює його на спеціальний рядок "undefined".

// let text = String(null);
// console.log(text, typeof text); // Результат: "null", string

// let text = String(false);
// console.log(text, typeof text); // Результат: "false", string

//--------------------------------------------------------------------------------------------------
/* Boolean(): Вона дозволяє перетворити значення в логічний тип (true або false)
 JavaScript визначив набір значень, які завжди перетворюються в false під час логічних операцій.
Ці значення: false, 0, "" (порожній рядок), null, undefined, NaN (Not a Number) */

// const num = 42;
// console.log(num, typeof num) // Результат: 42, number

// const bool = Boolean(num);
// console.log(bool, typeof bool); // Результат: true, boolean

// let bool = Boolean('2');
// console.log(bool, typeof  bool);  // Результат: true, boolean

// let bool = Boolean(undefined);
// console.log(bool, typeof  bool);  // Результат: false, boolean

// let bool = Boolean(null);
// console.log(bool, typeof  bool);  // Результат: false, boolean

// let bool = Boolean('');
// console.log(bool, typeof  bool);  // Результат: false, boolean

// let bool = Boolean(-9);
// console.log(bool, typeof  bool);  // Результат: true, boolean

// --- Неявне перетворення ---

// Число + Рядок:

// const num = 42;
// const str = "Apple";
// const result = num + str;

// console.log(result, typeof result); // Результат: "42Apple", string

// const num = 42;
// const str = "2";
// const result = num + str;
// console.log(result, typeof result); // Результат: "422", string

// Рядок + Булеве значення:

// const str = "true";
// const bool = true;
// const result = str + bool;  // Результат: "truetrue", strng
// console.log(result, typeof result);

// Question 0. Який буде результат та тип данних цього результату?
// console.log(3 + 4); // 7
// console.log('3 + 4'); // "3 + 4"
// console.log('3' + '4'); // "34"

// Question 1. Який буде результат та тип данних цього результату?
// const num = 4;
// const str = "Kovbasa";
// const result = num + str + num;
// console.log(result, typeof result); // "4Kovbasa4", string

// Question 2. Який буде результат та тип данних цього результату?
// const num = 5;
// const str = "PlayStation";
// const result = "Hello" + str + num;
// console.log(result, typeof result); // "HelloPlayStation5", string

// Question 3. Який буде результат та тип данних цього результату?
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

// console.log(4 + true);  // 5
// console.log(false + true);  // 1
// console.log("JS is cool: " + true); //"JS is cool: true"

// console.log("Hello" - 5);   // NaN
// console.log("55" - 5);  // 50
// console.log(5 - null);  // 5

// let n = 2;
// n += 5;

// console.log(n); // Результат: 7

// n -= 2;
// console.log(n); // Результат: 5

// n *= 2;
// console.log(n); // Результат: 10

// n /= 2;
// console.log(n); // Результат: 5

// console.log(12 % 6); // Результат: 0
// console.log(-6 % 2); // Результат: -0

// console.log(50 % 6); // Результат: 2

// let counter = 2;
// let counter1 = 2;

// counter = counter + 1;
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
// console.log(age > 60 && age < 120); // false && true -> false
// console.log(age > 80 && age < 120); // false && true -> false
// console.log(age < 60 && age < 120); // true && true -> true

// console.log(1 && 5 && "" && false); // ""
// console.log("Mango" && "Polly");    // "Polly"

// Логічне «АБО»
// <вираз> || <вираз>

/* Оператор || в JavaScript також працює за принципом короткого замикання 
(short-circuiting), але він повертає перше "істинне" значення (truthy) або 
останнє "хибне" значення (falsy), якщо всі операнди хибні. */

// const age = 5;

// console.log(age < 10 || age > 30); // true || false -> true
// console.log(age > 10 || age > 30); // false || false -> false

// const age = 40;
// console.log(age < 10 || age > 30); // false || true -> true

// const age = 20;
// console.log(age < 10 || age > 30); // false || false -> false

// console.log("" || false || 0 || null || undefined); // false || false || false || false || false -> undefined

// Логічне «НЕ»
/* Оператор ! приводить операнд до значення типу Boolean, якщо необхідно, а потім - робить 
// інверсію - змінює його на протилежний true -> false або false -> true. */

// console.log(!true);
// console.log(!false);
// console.log(!3);
// console.log(!"Mango");
// console.log(!0);
// console.log(!"");

// const isOnline = true;
// const isNotOnline = !isOnline;
// console.log(isNotOnline, typeof isNotOnline)  // Результат: false, boolean

// Рівність та нерівність
// - Присвоєння (=)
// - Рівність (==)
// - Строга рівність (===)
// - Нерівність (!=)
// - Строга нерівність (!==)

// let num1 = 20;
// let num2 = "20";

// console.log(num1 == num2); // Результат: true
// console.log(num1 === num2); // Результат: false

// console.log(num1 != num2); // Результат: false
// console.log(num1 !== num2); // Результат: true

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
// const age = 13;

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

// SWITCH

// let cost;
// const subscription = "premium";

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

// if (subscription == "free") {
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
try {
  // Спробуємо виконати код, який може викликати помилку
  let result = 0 / 0; // Все ок
  console.log(result);
} catch (error) {
  // Якщо виникла помилка, обробляємо її тут
  console.log("Помилка:", error.message);
} finally {
  // Цей код виконується завжди, незалежно від того, чи була помилка
  console.log("Цей блок виконується завжди");
}
