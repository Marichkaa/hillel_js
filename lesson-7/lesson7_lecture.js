/* 
  ----- МАССИВИ
  
  Масив - структура даних для зберігання і маніпулювання колекцією індексованих значень.
  Використовується для зберігання впорядкованих колекцій даних, наприклад, списку курортів, 
  товарів, клієнтів в готелі тощо.
 */

/* 
  ---- Створення
  
  Масив оголошується і береться у квадратні дужки [] - літералом масиву. 
  Всередині дужок кожен елемент масиву розділяється комою.
  
*/

/* 
  Літеральний спосіб:
*/

// const clients = ["Mango", "Poly", "Ajax"];
// console.log(clients);

/*
  Використання конструктора Array:
*/

// // Порожній масив
// const emptyArray = new Array();
// console.log(emptyArray);

// // Масив з визначеними елементами
// const numbers = new Array(1, 2, 3, 4, 5);
// console.log(numbers);

// // Масив з певною довжиною (без ініціалізації елементів)
// const emptySlots = new Array(6); // створює масив з 5 "порожніми" місцями
// console.log(emptySlots); // [ <6 empty items> ]

/*
  Додавання елементів
*/
// const emptySlots = new Array(6); // створює масив з 5 "порожніми" місцями
// console.log(emptySlots); // [ <6 empty items> ]

// emptySlots[0] = "A";
// emptySlots[1] = "B";
// emptySlots[3] = "C";
// console.log(emptySlots);

// За допомогою розгорнутих виразів (spread operator):

// Розгорнутий масив з іншого масиву:

// const oldClients = ["Mango", "Poly", "Ajax"];
// const newClients = [...oldClients, "Kiwi"];

// console.log(oldClients);
// console.log(newClients);

/* 
  ---- Доступ до елементів
  
  Для доступу до значення елемента масиву використовується синтаксис квадратних дужок масив[індекс].
  Між іменем змінної, що зберігає масив, і квадратними дужками не повинно бути пробілу.
 */

// const clients = ["Mango", "Poly", "Ajax"];

// // Зазначаючи в квадратних дужках індекс елемента, ми отримуємо його значення
// console.log(clients[0]); // Mango
// console.log(clients[1]); // Poly
// console.log(clients[2]); // Ajax

/* 
  ---- Перевизначення
  
  На відміну від рядків, елементи масиву можна змінювати, звернувшись до них за індексом 
  і присвоївши інше значення.
*/

// const clients = ["Mango", "Poly", "Ajax"];
// clients[0] = "Kiwi";
// clients[1] = "Pango";
// console.log(clients); // ["Kiwi", "Pango", "Ajax"]

/* 
  --- Delete не змінює довжину масиву: Метод delete видаляє елемент із масиву
  але не змінює його довжину.
  Це залишає "пусте" місце в масиві, яке буде представлене, як undefined 
  в місцях, де елементи були видалені.
*/

// const array = ["apple", "banana", "cherry", "date", "elderberry"];
// console.log(array.length);

// delete array[2];
// delete array[4];

// console.log(array);
// console.log(array.length);

/* 
  Щоб зменшити розмір масиву та видалити елементи, краще використовувати методи,
  такі як splice() або фільтрування за допомогою методів filter() чи reduce().
*/

/* 
  --- Розряджені масиви (Sparse Arrays) в JavaScript - це масиви, які мають "порожні" 
  або відсутні індекси між елементами.
*/

// const sparseArray = [1, 2, , 4, 5];

// console.log(sparseArray);
// console.log(sparseArray.length);
// console.log(sparseArray[2]);

/* 
  ----- Багатовимірні масиви (масиви масивів)
*/

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// // Доступ до елементів багатовимірного масиву:
// console.log(matrix[0][1]); // Результат: ?
// console.log(matrix[2][0]); // Результат: ?

// Зміна значення елементів багатовимірного масиву:

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// // Зміна значення елемента на позиції [1][2] (другий рядок, третій стовпець)
// matrix[1][2] = 10;

// // Тепер масив виглядає так:
// console.log(matrix);

/*
  ---- Деструктуризація масивів
*/

// const numbers = [1, 2, 3];
// const [first, second, third] = numbers;

// console.log(first);
// console.log(second);
// console.log(third);

// // Деструктуризація масиву з пропуском значень

// const colors = ['red', 'green', 'blue'];
// const [, secondColor] = colors;

// console.log(secondColor);

/* 
  ---- Залишок масиву (rest parameters)
*/

// const fruits = ["apple", "banana", "cherry", "date"];
// const [firstFruit, secondFruit, ...otherFruits] = fruits; // ...otherFruits: використовує оператор розширення (...), який збирає всі залишкові елементи масиву, починаючи з третього, в новий масив otherFruits.

// console.log(firstFruit);
// console.log(secondFruit);
// console.log(otherFruits);

/* 
  ---- Довжина масиву
  
  Довжина масиву, тобто кількість його елементів, зберігається у властивості length. 
  Це динамічна величина, яка змінюється автоматично під час додавання або видалення елементів.
*/

// const clients = ["Mango", "Poly", "Ajax"];
// console.log(clients.length);

// clients[3] = "Kovbaska";
// console.log(clients.length);

/* 
  ---- Індекс останнього елемента 
  
  Найчастіше, ми заздалегідь не знаємо яка буде довжина масиву в коді. 
  Для того, щоб отримати значення останнього елемента, застосовується наступний підхід - 
  довжина масиву завжди на одиницю більша, ніж індекс останнього елемента. 
  Використовуючи формулу довжина_масиву - 1, можна отримати значення останнього елемента масиву 
  довільної довжини.
*/

// const clients = ["Mango", "Poly", "Ajax"];
// const lastElementIndex = clients.length - 1;

// console.log(lastElementIndex); // Результат: ?
// console.log(clients[lastElementIndex]); // Результат: ?

/*  
  ---- Методи масивів 
*/

/* 
  --- push та pop
  
  Додають або видаляють крайні елементи масиву. 
  Працюють тільки з крайнім лівим і крайнім правим елементом, і не можуть вставити або 
  видалити елемент з довільної позиції.
*/

/* 
  Метод push() додає один або декілька елементів наприкінці масиву, 
  без необхідності зазначати індекси елементів, що додаються. 
 */

// const numbers = [];

// numbers.push(1);
// console.log(numbers);

// numbers.push(2);
// console.log(numbers);

// numbers.push(3);
// console.log(numbers);

// numbers.push(4);
// console.log(numbers);

// numbers.push(5, 6);
// console.log(numbers);

/* 
  Метод pop() видаляє останній елемент з кінця масиву і повертає видалений елемент.
  Якщо масив порожній, метод повертає undefined.
*/

// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.pop());
// console.log(numbers);

// console.log(numbers.pop());
// console.log(numbers);

// console.log(numbers.pop());
// console.log(numbers);

// console.log(numbers.pop());
// console.log(numbers);

// console.log(numbers.pop());
// console.log(numbers);

// console.log(numbers.pop());
// console.log(numbers);

/* 
  --- unshift і shift — це методи масиву в JavaScript, які використовуються для додавання 
  та видалення елементів на початку масиву.
  Ці методи змінюють оригінальний масив і повертають різні значення залежно від операції. 
*/

/* 
  Метод unshift() додає елемент або елементи на початок масиву і 
  повертає довжину масиву із вже доданими значеннями.
  Якщо масив порожній, метод повертає undefined.
*/

// const fruits = ["Apple", "Banana"];
// // console.log(fruits);

// // Додаємо елементи на початок масиву
// fruits.unshift("Mango", "Orange");
// console.log(fruits);

// // Повертає нову довжину масиву
// console.log(fruits.unshift("Grapes"));
// console.log(fruits);

/* 
  Метод shift() видаляє перший елемент з масиву і повертає його значення.
  Масив змінюється — його довжина зменшується на одиницю. 
*/

// const numbers = [10, 20, 30, 40];
// console.log(numbers); // [10, 20, 30, 40]

// // Видаляємо перший елемент масиву
// let firstElement = numbers.shift();
// console.log(firstElement); // 10
// console.log(numbers); // [20, 30, 40]

// // Якщо викликаємо shift на порожньому масиві, повернеться undefined
// let emptyShift = [].shift();
// console.log(emptyShift); // undefined

/* 
  --- concat(). 
  
  Об'єднує два або більше масивів в один. Він не змінює масив, на якому викликається, а повертає новий. 
  Порядок аргументів методу впливає на порядок елементів нового масиву.
*/

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Monkong", "Singu"];

// const allClientsWithOldFirst = oldClients.concat(newClients);
// console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

// const allClientsWithNewFirst = newClients.concat(oldClients);
// console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]

// console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
// console.log(newClients); // ["Monkong", "Singu"]

/* 
  --- slice(begin, end).

  Повертає новий масив, що містить копію частини вихідного масиву, не змінюючи його. 
  Копія створюється з begin і до end, але НЕ включно, end - індекси елементів вихідного масиву.
*/

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(1, 3)); // Результат: ?
// console.log(clients); // Результат: ?

// // Якщо begin і end не зазначені, буде створена повна копія вихідного масиву.
// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice()); // Результат: ?

// // Якщо не зазначено end, копіювання буде зі start і до кінця вихідного масиву.
// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(1)); // Результат: ['Ajax', 'Poly', 'Kiwi']
// console.log(clients.slice(2)); // Результат: ?

/* 
  --- splice(position, num)
  
  Метод splice змінює вихідний масив і повертає масив, що містить видалені елементи.  
*/

// const scores = [1, 2, 3, 4, 5];

// // Видаляємо три елементи масиву, починаючи з першого елемента (індекс 0)
// const deletedScores = scores.splice(0, 3);

// // Тепер масив scores містить два елементи
// console.log(scores); // Результат: ?

// // А масив deletedScores містить три видалені елементи
// console.log(deletedScores); // Результат: ?

/* 
  --- Метод sort() в JavaScript використовується для сортування елементів масиву. 
  За замовчуванням sort() сортує елементи як строки в алфавітному порядку, навіть якщо це числа. 
  Це може призвести до неочікуваних результатів, особливо при роботі з числами.
*/

// const fruits = ["Banana", "Apple", "Cherry", "Mango"];
// fruits.sort();
// console.log(fruits);

// const numbers = [10, 5, 40, 25, 100];
// numbers.sort();
// console.log(numbers);

// У цьому випадку числа сортуються як рядки, тобто за першими цифрами, а не за числовим значенням.
// Для правильного сортування чисел треба використовувати функцію порівняння.

/* 
  --- callback-функції

 Функції не відрізняються від чисел, рядків або масивів - це просто спеціальний тип даних (об'єкт вищого порядку), 
 значення, яке можна зберігати у змінній або передавати у якості аргументу в іншу функцію.
*/

/*
  --- Стрілочні функції як колбеки​

  Анонімні стрілочні функції відмінно підходять як колбеки для перебираючих 
  методів масиву завдяки коротшому синтаксису оголошення, особливо, якщо 
  не потрібне тіло функції.
*/

// const numbers = [5, 10, 15, 20, 25];

// // Оголошення функції
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// console.log("---------------------");

// // Анонімна стрілочна функція
// numbers.forEach((number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

/* 
  ---- Ітеративні методи массивів
*/

/* 
  --- forEach. 
  
  Метод перебирання масиву, який використовується для заміни циклів for і 
  for...of в роботі з колекцією даних. 
*/

/*
  array.forEach(function callback(element, index, array) {
    // Тіло колбек-функції
  });
*/

// const numbers = [5, 10, 15, 20, 25];

// // Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// }

// console.log("------------------------");

// // Метод перебирання forEach
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

/* 
  --- Метод map(callback) використовується для трансформації масиву. 
  
  Він викликає колбек-функцію для кожного елемента вихідного масиву, 
  а результат її роботи записує у новий масив, який і буде результатом виконання методу.
*/

/* 
  array.map((element, index, array) => {
    // Тіло колбек-функції
  }); 
*/

// const planets = ["Земля", "Марс", "Венера", "Юпітер"];

// const planetsInUpperCase = planets.map((planet) => planet.toUpperCase());

// console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПІТЕР']

// const planetsInLowerCase = planets.map((planet) => planet.toLowerCase());
// console.log(planetsInLowerCase); // ['земля', 'марс', 'венера', 'юпітер']

// // Оригінальний масив не змінився
// console.log(planets); // ['Земля', 'Марс', 'Венера', 'Юпітер']

// const numbers = [1, 2, 3, 4, 5];

// const detailedNumbers = numbers.map((number, index, array) => {
//   return `Елемент ${number} має індекс ${index} у масиві ${array}`;
// });

// console.log(detailedNumbers);

/*  
  --- Метод filter(callback) використовується для єдиної операції - фільтрації масиву, 
  тобто, коли необхідно вибрати більше одного елемента з колекції за певним критерієм. 
*/

/* 
  array.filter((element, index, array) => {
    // Тіло колбек-функції
  }); 
*/

// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter((value) => value >= 0);

// console.log(positiveValues); // Результат: [51, 27, 21, 42]

// const negativeValues = values.filter((value) => value < 0);
// console.log(negativeValues); // Результат: ?

// const bigValues = values.filter((value) => value > 1000);
// console.log(bigValues); // Результат: ?

// // Оригінальний масив не змінився
// console.log(values); // Результат: [51, -3, 27, 21, -68, 42, -37]

/* 
  --- reduce(callback, initialValue) використовується для послідовної обробки кожного елемента 
  масиву із збереженням проміжного результату, як акумулятор. 
*/

/* 
  array.reduce((previousValue, element, index, array) => {
    // Тіло колбек-функції
}, initialValue);
*/

// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
//   console.log(
//     `previousValue: ${previousValue} + number: ${number} = ${
//       previousValue + number
//     }`
//   );
//   return previousValue + number;
// }, 0);

// console.log(`Total: ${total}`); // 32

/* 
  Перший параметр колбек-функції (previousValue) - це акумулятор, тобто проміжний результат. 
  Значення, яке поверне колбек-функція на поточній ітерації, буде значенням цього параметра 
  на наступній ітерації.
  
  Другим аргументом для reduce() можна передати необов'язкове початкове значення 
  акумулятора - параметр initialValue. 
*/

/* 
  Спочатку метод reduce() створює внутрішню змінну-акумулятор і
  присвоює їй значення параметра initialValue або першого елемента масиву, 
  що перебирається, якщо initialValue не задане.
  
  previousValue = 0

  Потім колбек-функція викликається для кожного елемента масиву. Поточне значення
  параметра previousValue - це те, що повернула колбек-функція на минулій ітерації.
*/

/*   
  Ітерація 1 -> previousValue = 0 -> number = 2 -> return 0 + 2 -> return 2
  Ітерація 2 -> previousValue = 2 -> number = 7 -> return 2 + 7 -> return 9
  Ітерація 3 -> previousValue = 9 -> number = 3 -> return 9 + 3 -> return 12
  Ітерація 4 -> previousValue = 12 -> number = 14 -> return 12 + 14 -> return 26
  Ітерація 5 -> previousValue = 26 -> number = 6 -> return 26 + 6 -> return 32
  
  Після завершення перебирання всього масиву, метод reduce() повертає значення акумулятора.
  Результат - 32 
*/

/* 
  --- every()​ 
  
  Перевіряє, чи проходять всі елементи масиву тест колбек-функції. 
  Повертає true або false. 
*/

/* 
  array.every((element, index, array) => {
    // Тіло колбек-функції
  }); 
*/

// // Усі елементи більші або дорівнюють нулю? - так
// console.log([1, 2, 3, 4, 5].every((value) => value >= 0));

// // Усі елементи більші або дорівнюють нулю? - ні
// console.log([1, 2, 3, -10, 4, 5].every((value) => value >= 0));

/* 
  --- some()​ 

  Перевіряє, чи проходить хоча б один елемент масиву тест колбек-функції. Повертає true або false.
*/

/* 
  array.some((element, index, array) => {
    // Тіло колбек-функції
  }); 
*/

// // Чи є хоча б один елемент, що більший або дорівнює нулю? - так
// console.log([1, 2, 3, 4, 5].some((value) => value >= 0));

// // Чи є хоча б один елемент, що більший або дорівнює нулю? - так
// console.log([-7, -20, 3, -10, -14].some((value) => value >= 0));

// // Чи є хоча б один елемент, що менший нуля? - ні
// console.log([1, 2, 3, 4, 5].some((value) => value < 0));

// // Чи є хоча б один елемент, що менший нуля? - так
// console.log([1, 2, 3, -10, 4, 5].some((value) => value < 0));

/* 
  --- метод find(callback) 
  
  Дозволяє знайти і повернути перший відповідний елемент, після чого перебирання 
  масиву припиняється. 
  Тобто він шукає до першого збігу. 
*/

/* 
  array.find((element, index, array) => {
    // Тіло колбек-функції
  }); 
*/

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// console.log(colorPickerOptions.find((option) => option.label === "blue"));
// console.log(colorPickerOptions.find((option) => option.label === "pink"));
// console.log(colorPickerOptions.find((option) => option.label === "white"));

/* 
  --- findIndex(callback) - це сучасна заміна методу indexOf(). 
  
  Дозволяє виконувати пошук за складнішими умовами, ніж просто рівність. 
  Використовується як для пошуку у масиві примітивів, так і в масиві об'єктів.
*/

/* 
  array.findIndex((element, index, array) => {
    // Тіло колбек-функції
  }); 
*/

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// console.log(colorPickerOptions.findIndex((option) => option.label === "blue"));
// console.log(colorPickerOptions.findIndex((option) => option.label === "pink"));
// console.log(colorPickerOptions.findIndex((option) => option.label === "white"));

// ---- Ітерація по масиву

/* 
  Цикл for можна використовувати для ітерації по масиву, тобто «перебрати» його поелементно.
*/

// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

/* 
  Конструкція for...of оголошує цикл, що перебирає ітерабельні об'єкти, 
  як-от масиви і рядки. 
  Тіло циклу буде виконуватися для значення кожного елемента. Це хороша 
  заміна циклу for, якщо не потрібен доступ до лічильника ітерації.
*/

/* 
  for (const variable of iterable) {
    // тіло циклу
  } 
*/

/* 
  variable — змінна, яка буде зберігати значення елемента на кожній ітерації.
  iterable — колекція, яка містить ітерабельні (що можна порахувати) елементи, наприклад масив. 
*/

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// console.log("-------------------");

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// -- Складні об'єкти та рекурсивний підхід

/* 
  Рекурсія — це коли функція викликає сама себе для розв’язання задачі, що повторюється, 
  але з кожним разом обробляє меншу або іншу частину задачі. 
*/

// function countdown(number) {
//   console.log(number);
//   if (number > 0) {
//     // Базовий випадок: якщо число більше нуля, продовжуємо
//     countdown(number - 1); // Рекурсивний виклик із зменшенням числа
//   }
// }

// countdown(5);

// const companies = [
//   { name: "Компанія A", quantity: 100 },
//   { name: "Компанія B", quantity: 50 },
//   { name: "Компанія C", quantity: 80 },
// ];

// function findCompanyByName() {}

// console.log(findCompanyByName()); // Знайде компанію B */

// const familyTree = {
//   name: "Іван",
//   role: "Дідусь",
//   children: [
//     {
//       name: "Марія",
//       role: "Дочка",
//       children: [
//         {
//           name: "Олег",
//           role: "Внук",
//         },
//         {
//           name: "Катя",
//           role: "Внучка",
//           children: [
//             {
//               name: "Настя",
//               role: "Правнучка",
//             },
//           ],
//         },
//       ],
//     },
//     {
//       name: "Петро",
//       role: "Син",
//     },
//   ],
// };

// function findPersonByName() {}

// console.log(findPersonByName());
