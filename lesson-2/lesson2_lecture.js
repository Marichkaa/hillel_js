// Перетворення типів


//--------------------------------------------------------------------------------------
//--- Динамічна типізація

/* let guessWho = 3.14;
console.log(guessWho);
guessWho = 'А тепер тут строка';
console.log(guessWho);
guessWho = false;
console.log(guessWho); */

//------------------------------------------------------------------------------------------------
/* --- Перевірка типів та використання typeof ---
Для перевірки типів даних та отримання інформації про тип об'єкта,
використовується оператор typeof.
Оператор typeof повертає рядкове значення, яке вказує на тип даних об'єкта.
*/

/* console.log(typeof "Hello"); // "string"
console.log(typeof 42); // "number"
console.log(typeof true); // "boolean"
console.log(typeof "42"); */

/* console.log(typeof [1, 2, 3]); // "object"
console.log(typeof { name: "John", age: 30 }); // "object"
console.log(typeof undefined)
console.log(typeof "" ); */

/* let variable;
console.log(typeof variable); */ // "undefined"

/* let emptyValue = null;
console.log(typeof emptyValue); */ // "object"

// console.log(typeof NaN); // "number"

/*
let username;
console.log(typeof username); // "undefined"

let inputValue = null;
console.log(typeof inputValue); // "object"

const quantity = 17;
console.log(typeof quantity); // "number"

const message = "JavaScript is awesome!";
console.log(typeof message); // "string"

const isSidebarOpen = false;
console.log(typeof isSidebarOpen); // "boolean"
*/


// А як нам дізнатися якого типу яка змінна ? На допомогу приходить Nan

/* const validNumber = Number("51"); // 51
console.log(Number.isNaN(validNumber)); // false

const invalidNumber = Number("qweqwe"); // NaN
console.log(Number.isNaN(invalidNumber)); // true
 */

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

/* const str = "42";
console.log(typeof str)
const num = Number(str);
console.log(num, typeof num); */  // Результат: 42 (тип: number)

/* let number = Number("qwerty");
console.log(number, typeof number); */ // Оскільки undefined не є дійсним числом, перетворення зазнає невдачі, і результатом стає NaN (Not a Number)

/* let number = Number(true);
console.log(number, typeof number); */

/* null в JavaScript використовується для позначення відсутності значення.
Коли функція Number отримує null як аргумент, вона перетворює його на число 0. */

/* let number = Number(true);
console.log(number, typeof number); */
/* В JavaScript значення true використовується для представлення логічної істини.
Коли функція Number отримує true як аргумент, вона перетворює його на число 1. */

/* let number = Number('qwerty');
console.log(number, typeof number); */
/* Рядок "qwerty" не містить дійсних числових символів.
Тому перетворення зазнає невдачі, і результатом стає NaN (Not a Number). */


//--------------------------------------------------------------------------------------------------
//String(): Ця функція перетворює значення в рядковий тип даних. Наприклад:

/* const num = 42;
console.log(typeof num)

const str = String(num);
console.log(str, typeof str); */ // Результат: "42" (тип: string)

/* let text = String(undefined);
console.log(text, typeof text); */
// Коли функція String отримує undefined як аргумент, вона перетворює його на спеціальний рядок "undefined".

/* let text = String(null);
console.log(text, typeof text); 'null' */
/* 
let text = String(false);
console.log(text, typeof text); 'false' */


//--------------------------------------------------------------------------------------------------
/* Boolean(): Вона дозволяє перетворити значення в логічний тип (true або false)
 JavaScript визначив набір значень, які завжди перетворюються в false під час логічних операцій.
Ці значення: false, 0, "" (порожній рядок), null, undefined, NaN (Not a Number) */

/* const num = 42;
console.log(typeof num)

const bool = Boolean(num);
console.log(bool, typeof bool); */ // Результат: true (тип: boolean)

/* let bool = Boolean('2');
console.log(bool, typeof  bool);


let bool = Boolean(undefined);
console.log(bool, typeof  bool);

let bool = Boolean(null);
console.log(bool, typeof  bool); */

/* let bool = Boolean('');
console.log(bool, typeof  bool);
 */
/* let bool = Boolean(-9);
console.log(bool, typeof  bool); */

// --- Неявне перетворення ---

// Число + Рядок:

/* const num = 42;
const str = "Naturo";
const result = num + str;
console.log(result)
console.log(typeof result)
 */
/* const num = 42;
const str = "2";
const result = num + str; // Результат: "422" (тип: string)
console.log(result, typeof result) */

// Рядок + Булеве значення:

/* const str = "true";
const bool = true;
const result = str + bool; // Результат: "truetrue" (тип: string)
console.log(result, typeof result)
 */

/* //Question 0. Який буде результат та тип данних цього результату?
console.log(3 + 4);
console.log('3 + 4');
console.log('3' + '4'); */

//Question 1. Який буде результат та тип данних цього результату?
/* const num = 4;
const str = "Kovbasa";
const result = num + str + num;
console.log(result, typeof result) */

//Question 2. Який буде результат та тип данних цього результату?
/* const num = 4;
const str = 'Playstation';
const result = 'Hello' + str + num;
console.log(result, typeof result)
 */

//Question 3. Який буде результат та тип данних цього результату?
/* let name = "Rom";
let count = (name +12).length; "Rom12"
console.log(count)
 */


//--------------------------------------------------------------------------------------------------
// --- Арифметичні опердції---

// операнди і оператори ? 

/** 
- Додавання (+)
- Віднімання (-)
- Поділ (/)
- Множення (*)
- Залишок від поділу (%)
- Зведення в ступінь (**)
- Інкремент (++)
- Декремент (--)
**/


/* console.log (4 + true);
console.log (false + true);
console.log ("JS is cool:"+ true); */


/* console.log("Hello" - 5);
console.log("55" - 5);
console.log(5 - null); */


/* let n = 2;
n += 5;  // n = n + 5 =  7
n *= 2; // n = n * 2 = 7 * 2
console.log(n) */

/* console.log(12 % 6); 
console.log(-6 % 2); 
 */


/* var counter1 = 2;
console.log(counter1);
//counter = counter +1;
counter1++;
console.log(counter1);
 */

/* console.log(20 != "20");


== та != рівність / нерівність

=== та !== строга рівність / нерівність

 */


// --- Логічні операції ---


// Логічне «І»
// вираз && вираз

/* 
const age = 20;
console.log(age > 10 && age < 30); // true && true -> true
 */

// Якщо хоча б один із операндів буде приведений до false, результатом виразу буде його значення.


/* const age = 50;
console.log(age > 60 && age < 120); // true && false -> false
console.log(age > 80 && age < 120); // false && true -> false

console.log( 1 && 5  && "" && false);
console.log("Mango" && "Polly") 
 */

// Логічне «АБО»
// вираз || вираз

// логічне «АБО» зупиняється на правді і повертає те, на чому зупинилося або останній операнд.


/* const age = 5;
console.log(age < 10 || age > 30); // true || false -> true



const age = 40;
console.log(age < 10 || age > 30); // false || true -> true



const age = 20;
console.log(age < 10 || age > 30); // false || false -> false
 */



/* console.log( "" || false || 0 || null || undefined ); 

 */

// Логічне «НЕ»
// Оператор ! приводить операнд до буля, якщо необхідно, а потім робить інверсію - змінює його на протилежний true -> false або false -> true.



/* console.log(!true); 
console.log(!false); 
console.log(!3); 
console.log(!"Mango"); 
console.log(!0); 
console.log(!"");

const isOnline = true;
const isNotOnline = !isOnline; // !isOnline -> !true -> false

 */

//--------------------------------------------------------------------------------------------------
// --- Умовні конструкції ---


// IF


/* let cost = 0;
const subscription = "pro";

if (subscription === "pro") {
 cost = 100;
}

console.log(cost); // 100

const cost1 = subscription ==="pro" ? 100 : 0; 
console.log(cost1); // 100 */
 
// IF...ELSE

/* let cost;
const subscription = "free";
console.log(cost); 

if (subscription === "pro") {
 cost = 100;
} 

else {
 cost = 0;
}

console.log(cost); // 0 */



//ELSE...IF


/* let cost;
const subscription = "qwee";

if (subscription === "free") {
 cost = 0;
} 

else if (subscription === "pro") {
 cost = 100;
} 
else if (subscription === "premium") {
 cost = 500;
}

else {
 console.log("Invalid subscription type");
}

console.log(cost); // 500

 */

// ТЕРНАРНИЙ ОПЕРАТОР


/* let type;
const age = 20;

if (age >= 18) {
 type = "adult";
} else {
 type = "child";
}

console.log(type); // "adult"
 */

// <умова> ? вираз_якщо_умова_правдива> : <вираз_якщо_умова_хибна>

/* const age = 13;
const type = age >= 18 ? "adult" : "child"; 
console.log(type); */

const num1 = 5;
const num2 = 10;
let bigNumber2 = num1 > num2 ? num1 : num2;
console.log(bigNumber2); // 10


//SWITCH


let cost;
const subscription = "free";

switch (subscription) {
 case "free":
  cost = 0;
  break;

 case "pro":
  cost = 100;
  break;

 case "premium":
  cost = 500;
  break;

 default:
  console.log("Invalid subscription type");
}

console.log(cost); // 500


let cost;
const subscription = "qwee";

if (subscription > "free") {
 cost = 0;
} 

else if (subscription === "pro") {
 cost = 100;
} 
else if (subscription === "premium") {
 cost = 500;
}

else {
 console.log("Invalid subscription type");
}



// PROMT, ALERT, CONFIRM


const message = "JavaScript is awesome!";
alert(message);




// Просимо клієнта підтвердити бронювання готелю
// і зберігаємо результат роботи confirm у змінну
/*
const isComing = confirm("Please confirm hotel reservation");
console.log(isComing);
*/


// Запитуємо назву готеля, в якому хотів би зупинитися клієнт
// і зберігаємо результат виклику prompt у змінну.
/*
const hotelName = prompt("Please enter desired hotel name");
console.log(hotelName);

*/


/*
const value = prompt("Please enter a number!");
console.log(typeof value); // "string"
console.log(value); // "5"
*/


// TRY...CATCH

/* 
function divide(a, b) {
  try {
      if (b === 0) {
          throw new Error("Ділення на нуль недопустиме.");
      }
      return a / b;
  } catch (error) {
      console.error("Помилка: " + error.message);
      return null;
  }
}

const result = divide(10, 0);
if (result === null) {
  console.log("Ділення не вдалося.");
} else {
  console.log("Результат: " + result);
};
 */


/* try {
  let result = someFunction(); // Припустимо, що ця функція не існує
  console.log(result);
} 
catch (error) {
  console.log("Сталася помилка: " + error.message);
}
 */

// TRY...CATCH...FANALLY
/* try {
 // Спробуємо виконати код, який може викликати помилку
 let result = 10 / 2; // Все ок
 console.log(result);
} 

catch (error) {
 // Якщо виникла помилка, обробляємо її тут
 console.log("Помилка:", error.message);
} 

finally {
 // Цей код виконується завжди, незалежно від того, чи була помилка
 console.log("Цей блок виконується завжди");
} */
