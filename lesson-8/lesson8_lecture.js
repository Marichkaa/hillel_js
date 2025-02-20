/* 
    1. Що таке масив та як його створити у JavaScript?

    2. Що таке елемент масиву та ідекс?

    3. Що станеться, якщо в масив на 5 елементів записати значения за індексом 10?

    4. Що станеться, якщо з масиву на 5 елементів прочитати значения індексу 10?

    5. Як можна вивести на екран yci значения масиву, коли розмір масиву заздалегздь невідомий? 

    6. Що таке цикл for ... of?

    7. Як можна видалити певне значения з масиву?

    8. Як додати нове значения в кінець масиву?

    9. Як додати нове значения на початок масиву?

    10. Як можна об'еднати два масиви?

    11. Як можна дізнатися, за яким індексом у массиві розташоване потрібне нам значения?
*/

// // Що буде виведене у консоль?
// const list = [1 + 2, 1 * 2, 1 / 2];
// console.log(list); // Результат: [ 3, 2, 0.5 ]

// // Що буде виведене у консоль?
// const arr = [1, 2, 3];
// arr.reverse();
// console.log(arr); // Результат: [ 3, 2, 1 ]

// // Що буде виведене у консоль?
// const array = [3, 4];
// array.unshift(2);
// array.unshift(0, 1);
// array.unshift([-1]);

// console.log(array); // Результат: [ [ -1 ], 0, 1, 2, 3, 4 ]

// // Що буде виведене у консоль?
// const words = ["a", "b", "c"];
// const result = words.concat(1, [2, [3]]);
// console.log(result); // Результат: [ 'a', 'b', 'c', 1, 2, [ 3 ] ]

// const result1 = result.flat(3);
// console.log(result1); // Результат: [ 'a', 'b', 'c', 1, 2, 3 ]

// // Що буде виведене у консоль?
// const x = [1, 2, 3];
// x[-1] = 4;

// console.log(x.length); // Результат: 3
// console.log(x); // Результат: [ 1, 2, 3, '-1': 4 ]
// console.log(x[-1]); // Результат: 4

// Що буде виведене у консоль?
const y = [1, 5, 10, 15];
console.log(y.fill(0, 2, 5)); // Результат: [ 1, 5, 0, 0 ]

/*
 --- array.fill(value, start, end)

 - value - значення, яким потрібно заповнити масив
 - start (необов'язковий) - початковий індекс (за замовчуванням - 0)
 - end (необов'язковий) - кінцевий індекс (за замовчуванням - до кінця масиву)

/* 
    ---- РЕГУЛЯРНІ ВИРАЗИ
    
    Регулярний вираз (англ. Regular Expression або RegExp) — це спеціальна послідовність символів, 
    яка описує шаблон для пошуку або маніпуляції текстом.
    Він використовується для перевірки, пошуку, заміни або виділення текстових даних у рядках.
    
    Регулярні вирази підтримуються в багатьох мовах програмування, таких як JavaScript, Python, 
    PHP, Java, C# і т.д.
    Вони використовуються для пошуку та заміни тексту в рядках, а також для валідації даних та інших задач.
*/

// let str = "миші, щури, знову миші, хом'яки, ховрахи";
// let pattern = /щури/; // це RegExp. Слеші /.../ говорять JavaScript про те, що це регулярний вираз.

// console.log("Тип регулярного виразу: " + typeof pattern);
// console.log("Знаходимо на якому індексі? " + str.search(pattern)); // Шукаємо шаблон у рядку
// console.log("А якщо не знайшли? " + str.search(/кіт/));
// console.log(
//   "Чи знайшли ми цей паттерн, шаблон у наданому реченні? " + pattern.test(str)
// ); // Метод test використовується для перевірки, чи відповідає рядок певному регулярному виразу.

/*
    Значок | - внутрішній оператор мови регулярних виразів, що означає "або"
*/

// const str1 = "vasja@yahoo.com";
// const str2 = "petja@gmail.com";
// const pattern = /@gmail|@ukrnet/;

// console.log(str1 + ":" + str1.search(pattern)); // He знайшли
// console.log(str2 + ":" + str2.search(pattern)); // Знайшли
// console.log("Tecтyємo перший рядок: " + pattern.test(str1));
// console.log("Tecтyємo другий рядок: " + pattern.test(str2));

// // Перелік альтернативних варіантів можна укласти в дужки
// const str1 = "vasja@yahoo.com";
// const str2 = "petja@gmail. com"; // Зверніть увагу: тут помилка!
// const str3 = "petja@gmail9com";
// const str4 = "petja@gmail.com";
// const pattern = /(@gmail|@urknet).com/; // 3 крапкою тут не все так просто

// console.log(str1 + ": " + pattern.test(str1));
// console.log(str2 + ": " + pattern.test(str2));
// console.log(str3 + ": " + pattern.test(str3));
// console.log(str4 + ": " + pattern.test(str4));

/* 
    ---- Метасимволи
    
    Метасимволи — це спеціальні символи, які мають особливе значення в регулярних виразах.
*/

/* 

. — крапка. Збігається з будь-яким одним символом, окрім символу нового рядка (\n).

* — зірочка. Збігається з нульовою або більшою кількістю попереднього символа або групи.

+ — плюс. Збігається з однією або більше кількістю попереднього символа або групи.

? — знак питання. Збігається з нульовою або однією кількістю попереднього символа або групи.

^ — каретка. Позначає початок рядка.

$ — долар. Позначає кінець рядка.

[] — квадратні дужки. Позначають один символ з набору символів.

[^] — каретка в квадратних дужках. Позначає відсутність символа з набору в квадратних дужках.

{n,m} — кількісні оператори. Визначають кількість повторень попереднього символа або групи (від n до m разів).

`() — круглі дужки. Групують символи для застосування кількісних операторів або витягнення підрядків.

| — вертикальна риска. Позначає логічне "або".

\ — зворотний слеш. Екранує метасимволи або позначає спеціальні послідовності.

\d — будь-яка цифра (аналог [0-9]).

\D — будь-який символ, крім цифри.

\w — будь-яка буква (латиниця) або цифра  (аналог [a-zA-Z0-9_]).

\W — будь-який символ, крім букв або цифр.

\s — будь-який пробільний символ (пробіл, табуляція, новий рядок).

\S — будь-який непустий символ.

\b — границя слова. Позначає перехід між символом слова і не-словом.

\B — негативна границя слова. Позначає місце, яке не є границею слова.



/* 
    ---- Крапка 
     
    Крапка (.) — означає будь-який один символ (окрім нового рядка): 
*/

// const pattern = /h.llo/;
// const str = "hello world";

// console.log(pattern.test(str)); // Результат: true

// // Але не все так просто!
// let names = "txt file.txt log.txt file.png ltxt.doc one_txt.jpg";
// let pattern = /.txt/g;
// let matches = names.match(pattern);

// console.log(matches);   // Результат: [ '.txt', '.txt', 'ltxt', '_txt' ]

// // Ще приклад:
// let sentence = "The car parked in the garage.";
// let pattern = /.ar/g;
// const matches = sentence.match(pattern);

// console.log(matches);   // Результат: [ 'car', 'par', 'gar' ]

// // Бо крапка заміняє будь-який символ!
// const names = "Аня Ася Оля Аля Валя";
// const pattern = /А.я/g;
// const matches = names.match(pattern);

// console.log(matches); // Результат: [ 'Аня', 'Ася', 'Аля' ]

// // Щоб використовувати спеціальні символ як звичайний, додайте до нього зворотній слеш: \.
// let names = "file.txt log.txt file.png ltxt.doc one_txt.jpg .txt_am";
// let pattern = /\.txt/g;
// let matches = names.match(pattern);

// console.log(matches); // Результат: [ '.txt', '.txt', '.txt' ]

// // Ще приклад
// let str = "ivaniv_ruslan@yahoo.com";
// const pattern = /.com/;

// console.log(str + " - " + pattern.test(str)); // Результат: true

// str = "ivanov_commer@gmail";
// const pattern = /.com/;
// console.log(str + " - " + pattern.test(str)); // Результат: true

// // Ще раз, крапка значить будь-який символ !!!
// const str1 = "vasja@yahoo.com";
// const str2 = "petja@gmail. com";
// const str3 = "petja@gmail9com";

// const pattern = /\.com/;
// console.log(str1 + ": " + pattern.test(str1));
// console.log(str2 + ": " + pattern.test(str2));
// console.log(str3 + ": " + pattern.test(str3));

// // пошук '/'
// const str1 = "Строка з /";
// const pattern = /\//;

// console.log(str1 + ": " + pattern.test(str1));

// // пошук '\' один слеш чи два?
// const str1 = "Строка з \\";
// const pattern = /.\\/;

// console.log(str1 + ": " + pattern.test(str1));

// // Давайте розберемо такий приклад:
// const str =
//   'У цьому тексті зустрічається символ " | ". Як знайти його через регулярний вираз?';
// console.log(str);
// const pattern = /\||\./;

// console.log("Тестуємо: " + pattern.test(str));

// const str1 = "apple|orange";
// const str2 = "hello.world";
// const pattern = /\||\./;

// console.log("Тестуємо: " + pattern.test(str1));
// console.log("Тестуємо: " + pattern.test(str2));

/* 
    ---- Інтервал символів 

    Інтервал або набір символів також називають символьним класом.
    Для його позначення використовуються квадратні дужки.

    Щоб вказати діапазон символів у середені класу, необхідно поставити знак тире.
    Порядок ряду символів у наборі неважливий.
*/

// const sentance = "The car parked in the garage.";
// const pattern = /[Tt]he/g;

// const matches = sentance.match(pattern);
// console.log(matches); // Результат: [ 'The', 'the' ]

// // Варто зазначити, що крапка, поміщена у квадратні дужки, означає саме крапку, і ніщо інше.
// const sentance = "A gdtdge is a good place to park a car.";
// const pattern = /ar[.]/g;

// const matches = sentance.match(pattern);
// console.log(matches); // Результат: [ 'ar.' ]

// // А якщо нам потрібно знайти Аллу чи Анну?
// const names = "Анна Алла авіпавпа Аркан А@#$а Абба";
// const pattern = /А..а/g;

// const matches = names.match(pattern);
// console.log(matches);  // Результат: [ 'Анна', 'Алла', 'Арка', 'Абба' ]

// // Нам тоді потрібно використовувати пошук за різними значеннями
// const names = "Анна Алла авіпавпа Аркан А@#$а Абба Ална Анла";
// const pattern = /А[нл][нл]а/g;
// const matches = names.match(pattern);
// console.log(matches); // Результат: [ 'Анна', 'Алла', 'Ална', 'Анла' ]

// // Ще приклад:
// const str = "vasja@gmail.com";
// const pattern = /[bcdi]/;

// console.log("Чи є тут співпадіння? " + pattern.test(str));  // Результат: true
// console.log("На якій позиції? " + str.search(pattern)); // Результат: 9

/* 
    ---- Класси символів 

    Класи символів у регулярних виразах дозволяють нам визначити групи символів, 
    які ви шукаєте у тексті.
    Вони представлені в квадратних дужках [...] і дозволяють вам вказати, які 
    символи приймаються як відповідні символи у тексті.
    
    Ось декілька прикладів класів символів: 

    /[a-z]/ - діапазон значень від a до z. Всі малі англійскі літери
    /[A-Z]/ - діапазон значень від a до z. Всі великі англійскі літери
    /[0-9]/ - всі цифри
    /[a-zA-Z0-9]/ - загалом усі літери латинського алфавіту.

    Сорочення: 

    /\d/ — будь-яка цифра (аналог [0-9]).

    /\w/ — будь-яка буква (латиниця), цифра або підкреслення (аналог [a-zA-Z0-9_]).

    /\s/ — будь-який пробільний символ (пробіл, табуляція, новий рядок, тощо).

    За вийнятком классу [^...] - відповідає будь-яким символам, але крім тих, які вказані у квадратних дужках
*/

// // Клас [a-z]
// const text = "apple Banana cherry";
// const pattern = /[a-z]+/g;
// const matches = text.match(pattern);

// console.log(matches); // Результат: [ 'apple', 'anana', 'cherry' ]

// // Клас [A-Z]
// const text = "apple Banana cherry";
// const pattern = /[A-Z]+/g;
// const matches = text.match(pattern);

// console.log(matches); // Результат: [ 'B' ]

// // Клас[0 - 9];
// const text = "12345 apples, 6789 bananas";
// const pattern = /[0-9]+/g;
// const matches = text.match(pattern);

// console.log(matches); // Результат: [ '12345', '6789' ]

// // Клас [a-zA-Z0-9_]
// const text = "Hello123 World_456";
// const pattern = /[a-zA-Z0-9_]+/g;
// const matches = text.match(pattern);

// console.log(matches); // Результат: [ 'Hello123', 'World_456' ]

// // Ще приклад
// const names = "Аня, Ася, Оля, Аля, Валя, Александрія";
// const pattern = /А[а-я]я/g;
// const matches = names.match(pattern);

// console.log(matches); // Результат: [ 'Аня', 'Ася', 'Аля' ]

// const str = "Сьогодні 4 день тижня";
// const pattern = /[1-7asd] день тижня/g;

// console.log("Чи є співпадіння? " + pattern.test(str)); // Результат: true
// console.log("на якій позиції? " + str.search(pattern)); // Результат: 9

// Діапазон "крім"
// // Приклад 0
// const text = "The car parked in the garage";
// const pattern = /[^c]ar/g;
// const matches = text.match(pattern);

// console.log(matches); // Результат: [ 'par', 'gar' ]

// // Приклад 1
// const text = "apple banana chery";
// const pattern = /[^aeiou]+/g;
// const matches = text.match(pattern);

// console.log(matches); // Результат: [ 'ppl', ' b', 'n', 'n', ' ch', 'ry' ]

// // Приклад 2
// const str = "Приклад в якому немає англійських букв і цифр";
// // const str = "Loremispum";
// const pattern = /[^\w]/; // Чи є щось, крім англійського алфавіту та цифр?

// console.log(pattern.test(str)); // Результат: true
// console.log(str.search(pattern)); // Результат: 0

// const str = "98";
// const pattern = /[^\w]/; // Чи є щось, крім англійського алфавіту та цифр?

// console.log(pattern.test(str)); // Результат: false
// console.log(str.search(pattern)); // Результат: -1

// Приклад 3
// const str = "Приклад в якому немає англійських букв і цифр";
// const pattern = /[^а-я]/; // Чи є в нас великі літери?

// console.log("Перша спроба: " + pattern.test(str)); // Результат: true
// console.log(str.search(pattern)); // Результат: 0

// const str = "приклад";
// const pattern = /[^а-я]/; //Чи є в нас великі літери?

// console.log("Друга спроба: " + pattern.test(str)); // Результат: false
// console.log(str.search(pattern)); // Результат: -1

// // Приклад 4
// const names = "file.txt log.txt file_1.txt 1.txt fileatxt";
// const pattern = /[^0-9].txt/g;

// const matches = names.match(pattern);
// console.log(matches); // Результат: [ 'e.txt', 'g.txt', 'eatxt' ]

// Давайте спробуємо знайти дату - 01.01.1999
// dd.mm.yyyy
// const dates =
//   "01.01.1999 05.08.2015 03.02.2000 07.09.1976 08.08.8888 99.99.2000";
// const pattern = /[0-9][0-9]\.[0-9][0-9]\.[0-9][0-9][0-9][0-9]/g;

// const matches = dates.match(pattern);
// console.log(matches);

//Давайте трохи додато валідацію
//dd.mm.yyyy
// const dates =
//   "01.01.1999 05.08.2015 03.02.2000 07.09.1976 08.08.8888 99.99.2000";
// const pattern = /[0-3][0-9]\.[0-1][0-9]\.[12][09][0-9][0-9]/g;
// const matches = dates.match(pattern);
// console.log(matches);

/* 
    Пояснення:
    [0-3][0-9] — день може бути від 00 до 39. Це не є повністю валідною перевіркою, 
    оскільки дні можуть бути тільки до 31, але це обмежує діапазон до потенційно коректних значень.
    [0-1][0-9] — місяці від 00 до 19, що також не є точною перевіркою 
    (місяць може бути тільки від 01 до 12), але обмежує діапазон.
    [12][09][0-9][0-9] — перевіряє рік, починаючи з 1000 до 2999. 
*/

// Давайте окремо розберемо дні. Вони бувають від 1 до 31

// 0 - друга може бути від 1 до 9 - 0[1-9]
// 1,2 - друга може бути від 0 до 9 - [12][0-9]
// 3 - друга тільки 0 та 1 - 3[01]

// const dates = "01 02 11 12 13 21 22 23 25 30 31 32 41 42 50";
// const pattern = /0[1-9]|[12][0-9]|3[0-1]/g;

// const matches = dates.match(pattern);
// console.log(matches);

/* 
    --- Квантифікатори та кількісні обмеження  
    
    Квантифікатори та кількісні обмеження в регулярних виразах дозволяють нам визначити, 
    скількі разів певний символ або група символів повинні з'являтися для того, щоб 
    відповідати шаблону. 
    Це дає можливість задавати точні умови для пошуку або перевірки тексту.
    
    Вони роблять регулярні вирази більш гнучкими та потужними. Ось декілька типових квантифікаторів: 

    * — нуль або більше входжень попереднього елементу
    + — один або більше входжень попереднього елементу
    ? — нуль або один раз входжень попереднього елементу (робить його не обов'язковим)
    {n} — відповідає точно n входженням попереднього елементу
    {n,} — відповідає принаймні n входженням попереднього елементу
    {n,m} — від n до m входжень попереднього елементу
    {n}? — мінімальний квантифікатор, співставлюється найменьшій можливій кількості входжень

    Тобто, 
    ? - 0 чи 1 повторення
    * - 0 чи більше повторень
    + - 1 чи більше повторення

*/

// * - 0 чи більше повторень
// Приклад 1
// const names = "Осіпов Осіпова Осіпову Осіповаааа";
// const pattern = /Осіпов.*/g;
// const matches = names.match(pattern);

// console.log(matches);    // Результат: [ 'Осіпов Осіпова Осіпову Осіповаааа' ]

// // Приклад 2
// const re = /ab*c/; // Або немає, або є скількі завгодно

// console.log(re.test("abc")); // Результат: true
// console.log(re.test("abbbbbbbbbbbbbbbc")); // Результат: true
// console.log(re.test("ac")); // Результат: true

// // Приклад 3
// const names = "log.txt log1.txt log2.txt log3.txt log33.txt, logs.txt";
// const pattern = /log\d*\.txt/g;
// const matches = names.match(pattern);

// console.log(matches);   // Результат: [ 'log.txt', 'log1.txt', 'log2.txt', 'log3.txt', 'log33.txt' ]

// // Також ми можемо вказати кількість повторень
// console.log(/abc/.test("abbc")); // Результат: false
// console.log(/ab{2,4}c/.test("abc")); // Результат: false
// console.log(/ab{2,4}c/.test("abbbbbbbc")); // Результат: false
// console.log(/ab{2,4}c/.test("abbbc")); // Результат: true
// console.log(/ab{2,}c/.test("abbbbbbbbbbbc")); // Результат: true
// console.log(/ab{2,}c/.test("abc")); // Результат: false
// console.log(/ab{2}c/.test("abc")); // Результат: false
// console.log(/ab{2}c/.test("abbc")); // Результат: true
// console.log(/ab{2}c/.test("abbbc")); // Результат: false

// let str1 = "The number was 9.9997 but we rounded it off to 10.0.";
// const regex = /[0-9]{2,3}/g; // буде знаходити всі підрядки, які складаються з двох або трьох цифр у рядку.

// console.log(regex.test(str1)); // Результат: true
// console.log(str1.match(regex)); // Результат: [ '999', '10' ]

// let str1 = "The number was 9.9997 but we rounded it off to 10.0.";
// const regex = /[0-9]{2,}/g; // означає 2 або більше цифр

// console.log(regex.test(str1)); // Результат: true
// console.log(str1.match(regex)); // Результат: [ '9997', '10' ]

// let str1 = "The number was 9.9997 but we rounded it off to 10.0.";
// const regex = /[0-9]{3}/g; // знаходитиме лише 3 цифри, ні меньше і ні більше

// console.log(regex.test(str1)); // Результат: true
// console.log(str1.match(regex)); // Результат: [ '999' ]

// ? - 0 чи 1 повторення
// console.log(/ab?c/.test("abc")); // Результат: true
// console.log(/ab?c/.test("ac")); // Результат: true
// console.log(/ab?c/.test("abbc")); // Рядок "abbc" не відповідає шаблону, оскільки після 'a' і 'b', є ще один 'b', а регулярний вираз очікує максимум один 'b'.

// Ще приклад з ?
// let str1 = "The car is parked in the garage.";
// const regex = /[T]he/g;

// console.log(regex.test(str1)); // Результат: true
// console.log(str1.match(regex)); // Результат: [ 'The' ]

// console.log("------------------");

// const regex1 = /[T]?he/g;

// console.log(regex1.test(str1)); // Результат: true
// console.log(str1.match(regex1)); // Результат: [ 'The', 'he' ]

// + - 1 чи більше повторення
// const pattern = /ab*c/;

// console.log(pattern.test("abc")); // Результат: true
// console.log(pattern.test("abbbbbbbbbbbbc")); // Результат: true
// console.log(pattern.test("ac")); // Результат: true

// // Приклад з +
// let str1 = "The fat cat sat on the mat.";
// const regex = /c.+t/;

// console.log(regex.test(str1)); // Результат: true
// console.log(str1.match(regex)); // Результат: [ 'cat sat on the mat' ]

// --- Якоря ---

//  Початок рядка '^'
// let str1 = "Mary had a little lamb";
// const regex = /^Mary/;

// console.log(str1.match(regex)); // Результат: [ 'Mary', index: 0, input: 'Mary had a little lamb',  groups: undefined]

// let str1 = "Belle had a little lamb";
// const regex = /^Mary/; // [^...] - має інше значення - заперечення

// console.log(str1.match(regex)); // Результат: null

// let str1 = "The car is parked in the garage.";
// const regex = /^(T|t)he/;

// console.log(str1.match(regex)); // Результат: 'The'

// Кінець рядка '$'
// let str1 = "it's fleece was white as snow";
// const regex = /snow$/;

// console.log(str1.match(regex)); // Результат: ['snow', index: 25, input: "it's fleece was white as snow", groups: undefined]

// let str1 = "Today was rain";
// const regex = /snow$/;

// console.log(str1.match(regex)); // Результат: null

// let str1 = "The fat cat. sat on the mat.";
// const regex = /(at\.)$/;

// console.log(str1.match(regex)); // Результат [ 'at.', 'at.', index: 25, input: 'The fat cat. sat on the mat.', groups: undefined]

// // Більш складний приклад
// let goodInput = "12:34";
// let badInput = "12:345";
// let badInput1 = "012:34";

// const regexp = /^\d\d:\d\d$/;

// console.log(regexp.test(goodInput)); // Результат: true
// console.log(regexp.test(badInput)); // Результат: false
// console.log(regexp.test(badInput1)); // Результат: false

/* 
    ---- Прапори регулярних виразів ----
*/

/* 
    Регулярні вирази можуть мати прапори, які впливають на пошук або надають додаткову інформацію.

    У JS їх усього сім:

    i - З цим прапором пошук не залежить від регістру
    g - Із цим пракором пошук шукає всі збіги, без нього - тільки перший
    m - Прапор m змінює поведінку символів ^ та $, які зазвичай позначають початок і кінець всього рядка відповідно.
    s - Прапор s дозволяє крапці . відповідати будь-якому символу, включаючи символи нового рядка (\n).
    u -  режим обробки символів Unicode (unicode). Прапор u вмикає повноцінну підтримку символів Unicode. 
    Він дозволяє правильно обробляти багатобайтові символи, такі як емодзі або спеціальні знаки.
    y - прив’язка до позиції в рядку (sticky). Прапор y робить пошук прив'язаним до поточної позиції у рядку 
    (стартує з місця, де попередній збіг закінчився). Використовується разом із lastIndex, зупиняючись на першому невдалому збігу.
    d -  захоплення індексів (indices). Прапор d зберігає індекси збігів у масиві результатів. Цей прапор 
    з'явився в нових версіях JavaScript і дозволяє отримувати індекси початку та кінця знайдених підрядків.
*/

// Найпростіший випадок - реєстронезалежний пошук

// const str = "Ох вже ця вічно ВОзНЯ з регістром";
// const regex = /возня/;

// console.log("Знайшли щось? " + regex.test(str));
// console.log("А що саме? " + str.match(regex));

// // А якщо так?
// const str = "Ох вже ця вічно ВОзНЯ з регістром";
// const regex = /возня/i;

// console.log("Знайшли щось? " + regex.test(str));
// console.log("А що саме? " + str.match(regex));

// // Ще приклад
// const str = "The fat cat sat on the mat.";
// const regex = /The/gi;

// console.log("А що саме? " + str.match(regex));

// Наша задача - замінити мишей на ховрахів

// const str = "миші щури, знову миші, хом'яки, ховрахи";
// const regexp = /миші/;
// const res = str.replace(regexp, "ховрахи");
// console.log("Було: " + str + "\nСтало: " + res);

// спробуємо з прапором - g
// Знайдеться все. Наш перший приклад:

// const str = "миші щури, знову миші, хом'яки, ховрахи";
// const regexp = /миші/g;
// const res = str.replace(regexp, "ховрахи");
// console.log("Було: " + str + "\nСтало: " + res);

// // Ще приклад
// const str = "The fat cat sat on the mat.";
// const regexp = /.(at)/;
// console.log(str.match(regexp));

// const str = "The fat cat sat on the mat.";
// const regexp = /.(at)/g;
// console.log(str.match(regexp));

// прапор m (multiline)
// let str = `1е місце: Іванко
// 2е місце: Михайло
// 3е місце: Ганна`;

// console.log(str.match(/^\d/g));

// // Виправляємо:
// let str = `1е місце: Іванко
// 2е місце: Михайло
// 3е місце: Ганна`;

// console.log(str.match(/^\d/gm));

// Наступна задача - замінити перші літери на *
// const str = "abc\ndef\nghi";
// const regex = /^[a-z]/g;
// const res = str.replace(regex, "*");
// console.log(res);

// // Виправляємо!
// const str = "abc\ndef\nghi";
// const regex = /^[a-z]/gm;
// const res = str.replace(regex, "*");
// console.log(res);

// // Приклад з кінцем речення
// let str = `Іванко: 1
// Михайло: 2
// Ганна: 3`;

// console.log(str.match(/\d$/gm));

// Посилання у регулярних виразах

// const regex = /['"][^'"]*['"]/;
// let str = 'abc"def"ghijk';
// let str = "abc'def'ghijk";
// let str = "abc\"def'ghijk";

// console.log(str);
// console.log(regex.test(str));
// console.log(str.match(regex));

/* 
    Частину шаблону можна укласти в дужки (...). Це назвається "дужкова група".


    У такого вияввлення є два ефекти:
    - Дозволяє помістити частину збігу в окремий масив
    - Якщо встановити квантифікатор після дужок, то він застосовуватиметься до всього вмісту дужки, а не до окремого символу, 
    що стоїть перед ним.
*/

// const str = "Publication Date: 2021-09-06"; // Якщо ми хочемо отримати окремі компоненти дат: рік, місяц та день
// const regex = /(\d{4})-(\d{2})-(\d{2})/;
// const res = str.match(regex);

// console.log(res); // Результат: ['2021-09-06', '2021', '09', '06', index: 18, input: 'Publication Date: 2021-09-06', groups: undefined]

// // До групи можно звернутися у шаблоні, використовуючи \N, де N - це номер группи
// let str = `He said: "She's the one!".`;
// let regexp = /['"](.*?)['"]/g; // (.*?) - це неіменована захоплююча група, яка збігається з будь-яким текстом (включаючи пробіли) з найменшою можливою кількістю символів до першого збігу з наступною частиною шаблону.

// console.log(str.match(regexp)); // Результат не той, що хотілось би

// Для того, щоб шаблон шукав закриваючу лапку таку саму, як і відкриваючу, обгорнемо відкриваючі лапки в дужки,
// створивши захоплюючу групу, а потім використаємо \1, щоб звернутися до цієї групи в шаблоні, гарантуючи, що
// закриваюча лапка буде такою ж, як і відкриваюча.

// let str = `He said: "She's the one!." `;
// let regexp = /(['"])(.*?)\1/g;

// console.log(str.match(regexp));

/*
     ---- Складніші посилання - зовнішні
    
    Згаданий вище replace працює не тільки (і не стільки) з рядками, а й з регулярними виразами
*/
// let str = "12aaa54fhj554b6bmi456nm456";
// console.log("Зразок: " + str);

// const regexp = /\d+[a-z]+/; // Пошук послідовностей, які містять одну або більше цифр, за якою слідує .. закінчи речення
// const res = str.replace(regexp, '-+++-');
// console.log("Після редагування: " + res);

// // А тепер ми хочемо не просто замінити знайдену групу, а поміняти місцями цифри і літери
// let str = "12aaa54fhj554b6bmi456nm456";
// console.log("Зразок: " + str);
// const regexp = /(\d+)([a-z]+)/g; // Замінює те що знайшли в регкесі на |$2-$1|. |$2-$1| - (\d+) - захоплює одну або більше цифр (група 1), і ([a-z])+ — захоплює одну або більше літер (група 2). У заміні ми використовуємо $2 і $1 для перестановки літер і цифр місцями.
// const res = str.replace(regexp, "|$2-$1|");
// console.log("Після редагування: " + res);

// // Ще кілька слів про дужкові групи
//  const str = "Великий і жахливий Вася Пупкін вийшов на ганок";
// console.log("Зразок: " + str);

// const regexp = /(Вася) (Пупкін)/;
// // const res = str.replace(regexp, "$2 $1");
// // const res = str.replace(regexp, "$1 $`"); // ` - частина рядка до збігу
// // const res = str.replace(regexp, "$1 _$'_"); // ` - частина рядка після збігу
// const res = str.replace(regexp, "$1 _$&_"); //  Збіг цілком

// console.log(res);

/* 
    Якщо скобочна група потрібна нам тільки для угрупування елементів і
    ми не хочемо "заплямовувати" її захоплюючими групами, ми використовуємо (?:...), 
    яка створює незахоплюючу групу. Це дозволяє нам угруповувати частини шаблону без збереження
    їх у змінних $1, $2 тощо. 
*/

// const str = "Великий і жахливий Петя Пяточкін вийшов на ганок";
// const regexp = /(?:Вася|Петя)\s*(?:Пупкін|Пяточкін)/; // Регулярний вираз шукає вказані підрядки
// const res = str.match(regexp);

// console.log(res);

/* 
    У регулярних виразах \b є метасимволом, який позначає границю слова. 
    Це спеціальний символ, який допомагає знайти межі слів у тексті. 
*/

// const str = "The word is on the list. Wordsmith is a different case.";
// const regex = /\bword\b/gi;
// const result = str.match(regex);

// console.log(result); // ["word"]
