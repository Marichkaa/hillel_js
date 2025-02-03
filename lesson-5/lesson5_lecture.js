// Навіщо нам return?

// function sum() {
//   5 + 5;
// }

// console.log(sum());

// Чим буде відрізнятись результат двох блоків коду?

// Блок 1
// function sum() {
//   return 5 + 5;
// }

// console.log(sum());

// Блок 2
// function sum() {
//   console.log(5 + 5);
// }

// sum();

// Чому не працює?
// let x = 3;
// let y = 4;

// function sum(x, y) {
//   return x + y;
// }

// console.log(sum());
// Чому не працює?

// function sum() {
//   for (let i = 0; i < 5; i++) {
//     let result += i;
//   }
// }

// sum();

// Чому не працює?
// let result = 0;

// function sum() {
//   for (let i = 0; i < 5; i++) {
//     return (result += i);
//   }
// }

// console.log(sum());
// Перетворіть рядок на число

// let str = "123";

// let str1 = ?(str);
// console.log(str1, typeof str1)

// let str2 = Number.?(str);
// console.log(str2, typeof str2)

// Перевірити, чи є значення NaN
// console.log(Number.?(str));
// console.log(Number.?(str1));
// console.log(Number.?(str2));

// Округлити число 3.14 до цілого числа
// console.log(?(3.14));

// Знайти максимальне значення з двох чисел
// console.log(?(3,21));

// Перетворення рядка "123.45" на число з 2 десятковими знаками.
// console.log(?("123.45"));

// Перетворити число на рядок
// num = 123;
// console.log(?(num), typeof ?(num));

// Переведення рядка у верхній регістр
// str = "Привіт";
// console.log(str.?());

// Знаходження першого входження символу "о" у рядку "hohohoho"
// console.log("hohohoho".?("o"));

// Видалення пробілів з обох кінців рядка "  Привіт  "
// console.log("  Привіт  ".?())

// --------------------------------------------------------------

// /*--- ОБ'ЄКТИ ---*/

/* 
  Об'єкти дозволяють описати і згрупувати характеристики певної сутності - 
  користувача, книги, продукту в магазині, чого завгодно.
  Об'єкти ще називають словниками, тобто вони містять терміни (властивості) 
  та їх визначення (значення). 
*/

/* 
  --- Створення об'єкта​
  01. --- Для оголошення використовуються фігурні дужки {} - літерал об'єкта. 
      В об'єкті вказуються властивості об'єкту, які складаються з ключа та значення

      {
        key: value,
        key2: value2,
        ...
      }
*/

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// console.log(book);

/* 02. --- Ви також можете створити об'єкт за допомогою конструктора Object: */

// const book = new Object(); // Створюємо порожній об'єкт

// Присвоюємо об'єкту властивості
// book.title = "The Last Kingdom";
// book.author = "Bernard Cornwell";
// book.genres = ["historical prose", "adventure"];
// book.isPublic = true;
// book.rating = 8.38;

// console.log(book);

/* 03. --- Ви можете використовувати змінні для визначення властивостей об'єкта. */

// const title = "The Last Kingdom";
// const author = "Bernard Cornwell";
// const genres = ["historical prose", "adventure"];
// const isPublic = true;
// const rating = 8.38;

// Створення об'єкта з використанням змінних
// const book = {
//   title, // Додає властивість title зі значенням з відповідної змінної
//   author, // Додає властивість author
//   genres, // Додає властивість genres
//   isPublic, // Додає властивість isPublic
//   rating, // Додає властивість rating
// };

// console.log(book);

/* 
  Якщо ім'я змінної збігається з назвою властивості, можна просто записати ім'я змінної без додаткового присвоєння
  (title замість title: title).  
*/

/* --- 04. Ви можете створити порожній об'єкт і потім додати властивості до нього. */

// Створення порожнього об'єкта
// const book = {};

// Додавання властивостей до об'єкта
// book.title = "The Last Kingdom"; // Додаємо властивість title
// book.author = "Bernard Cornwell"; // Додаємо властивість author
// book.genres = ["historical prose", "adventure"]; // Додаємо властивість genres
// book.isPublic = true; // Додаємо властивість isPublic
// book.rating = 8.38; // Додаємо властивість rating

// console.log(book);

/* 
  --- Читання властивостей
  Ви можете отримати доступ до властивостей об'єкта за допомогю двох основних способів:
  доступу через крапку (.) та доступу через квадратні дужки ([]).
*/

// --- Доступ через крапку: Використовується, коли ви точно знаєте назву властивості.
// Це найчитабельніший спосіб.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };

// Доступ до властивостей об'єкта через крапку
// console.log(book);
// console.log(book.title);
// console.log(book.author);
// console.log(book.rating);

// звернутися до властивості якої немає
// console.log(book.absentProperty)

// --- Доступ через квадратні дужки: Необхідний, коли назва властивості динамічна,
// зберігається у змінній, містить пробіли або інші символи, які не підходять для доступу через крапку.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };

// Доступ до властивостей об'єкта через квадратні дужки
// console.log(book["title"]);
// console.log(book["author"]);
// console.log(book["rating"]);

// Доступ до властивостей за допомогою змінної
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };

// const propertyName = "author";
// console.log(book[propertyName]);

/* 
  --- Зміна властивостей

  Перезапис властивостей об'єкта в JavaScript дозволяє змінювати значення 
  існуючих властивостей об'єкта, просто присвоюючи нове значення вже існуючій 
  властивості.
  
  Це зручно, коли потрібно оновити інформацію в об'єкті.
*/

// const user = {
//   name: "John",
//   age: 30,
//   isActive: true,
// };

// console.log(user);

// Перезапис властивостей
// user.name = "Jane";
// user.age = 25;
// user.isActive = false;

// console.log(user);

/* 
  --- Додавання властивостей

  Операція додавання нової властивості після створення об'єкта нічим не відрізняється 
  від зміни значення вже існуючої властивості. Якщо під час запису значення за 
  ім'ям, така властивість в об'єкті відсутня, вона буде створена.
*/

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.pageCount = 836;
// book.originalLanguage = "en";
// book["translations"] = ["ua", "ru"];

// console.log(book.pageCount); // Результат: ?
// console.log(book.originalLanguage); // Результат: ?
// console.log(book.translations); // Результат: ?

/* 
  --- Видалення властивостей
  
  Видалення властивостей з об'єкта в JavaScript здійснюється за допомогою оператора delete.
*/

// const user = {
//   name: "Alice",
//   age: 28,
//   isAdmin: true,
// };

// console.log(user);

// Видалення властивості
// delete user.age;

// console.log(user); // Результат: ?

/* 
  --- Обчислювальні значення
  
  Бувають ситуації, коли під час оголошення об'єкта необхідно 
  додати властивість з ім'ям, яке ми заздалегідь не знаємо, 
  тому що воно зберігається у якості значення змінної або у
  якості результату виконання функції.
*/

/* 
  Синтаксис обчислювальних властивостей (computed properties) 
  допомагає уникнути зайвого коду і, в деяких випадках, 
  спростити його. Значенням обчислювальної властивості може бути 
  будь-який валідний вираз.
*/

// const propName = "name";
// const user = {
//   age: 25,
//   // Ім'я цієї властивості буде взяте зі значення змінної propName
//   [propName]: "Генрі Сибола",
// };

// console.log(user.name); // 'Генрі Сибола'

/* 
  --- Об'єкт в об'єкті
  
  Значенням властивості може бути інший об'єкт, для того, щоб зберігати вкладені і згруповані дані.
*/

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// console.log(user.location.city);

/* 
  --- Методи
  
  Методи використовуються для виконання дій або обробки даних всередині об'єкта.
  Методи надають об'єктам функціональність, що дозволяє працювати з їх властивостями.
*/

// --- Object.keys(obj)
// Повертає масив ключів (імен властивостей) об'єкта.

// const user = { name: "Alice", age: 25 };
// console.log(Object.keys(user)); // Результат: ['name', 'age']

// --- Object.values(obj)
// Повертає масив значень властивостей об'єкта.

// const user = { name: "Alice", age: 25 };
// console.log(Object.values(user)); // Результат: ['Alice', 25]

// --- Object.entries(obj)
// Повертає масив пар [ключ, значення] для кожної властивості об'єкта.

// const user = { name: "Alice", age: 25 };
// console.log(Object.entries(user)); // Виведе: [['name', 'Alice'], ['age', 25]]

// --- Object.create(proto)
// Дозволяє створювати об'єкти з певним набором властивостей і методів, успадкованих від іншого об'єкта

// Базовий об'єкт book, який буде використовуватися як прототип
// const book = {
//   title: "1984",
//   author: "George Orwell",
// };

// Створення нового об'єкта з прототипом book
// const newBook = Object.create(book);

// Додавання нової властивості до об'єкта newBook
// newBook.year = 1949;

// Виклик властивостей з прототипу та нової властивості
// console.log(newBook.title); // Результат: "1984" (успадкована властивість)
// console.log(newBook.author); // Результат: "George Orwell" (успадкована властивість)
// console.log(newBook.year); // Результат: 1949 (власна властивість)

// --- Object.hasOwnProperty(propertyName)

// Базовий об'єкт з властивістю 'name'
// const person = {
//   name: "Alice",
// };

// Створюємо новий об'єкт з прототипом person
// const newPerson = Object.create(person);
// newPerson.age = 30;

// console.log(newPerson.hasOwnProperty("age")); // Виведе: true, бо 'age' є власною властивістю
// console.log(newPerson.hasOwnProperty("name")); // Виведе: false, бо 'name' успадкована від person

/* --- This */

/* 
  Досі ми розглядали об'єкти тільки як сховища взаємопов'язаних 
  даних, наприклад, інформація про книгу тощо.
  Об'єкти-сховища, зазвичай, знаходяться в масиві таких самих об'єктів, 
  який є колекцією однотипних елементів.

  Об'єкти можуть зберігати не тільки дані, але і функції для роботи з цими даними - методи.
  Якщо значення властивості - це функція, така властивість називається методом об'єкта. 
*/

// ✅ Логічно і синтаксично згруповані сутності

// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
//   // Це метод об'єкта
//   getBooks() {
//     console.log("Цей метод буде повертати всі книги - властивість books");
//   },
//   // Це метод об'єкта
//   addBook(bookName) {
//     console.log("Цей метод буде додавати нову книгу у властивість books");
//   },
// };

// Виклики методів
// bookShelf.getBooks();
// bookShelf.addBook("Нова книга");

/*  
  Такі об'єкти можна назвати «моделями».
  Вони пов'язують дані і методи для роботи з цими даними.
  Наприклад, можна було оголосити змінну books і дві функції 
  getBooks() і addBook(bookName), але тоді це були б три незалежні 
  сутності без явного синтаксичного, і зі слабким логічним зв'язком.
*/

// ❌ Слабкопозв'язані, незалежні сутності
// const books = ["The Last Kingdom", "Dream Guardian"];

// function getBooks() {
//   console.log("Цей метод буде повертати всі книги");
// };

// function addBook() {
//   console.log("Цей метод буде додавати нову книгу у властивість books");
// };

// --- Доступ до властивостей об'єкта в методах

/* 
  Методи використовуються для роботи з властивостями об'єкта, їх зміни.
  Для доступу до об'єкта в методі використовується не ім'я змінної, 
  наприклад bookShelf, а ключове слово this - контекст. Значенням 
  this буде об'єкт перед «крапкою», тобто об'єкт, який викликав цей метод, 
  у нашому випадку - це посилання на об'єкт bookShelf.
*/

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     console.log(`this повертає об'єкт: ${this}`);
//     console.log(
//       `this.books повертає значення властивості books в об'єкті: ${this.books}`
//     );
//   },
// };

// // Перед крапкою знаходиться об'єкт bookShelf,
// // тому, викликаючи метод, this буде зберігати посилання на нього.
// bookShelf.getBooks(); // {books: ['The Last Kingdom'], getBooks: f}

/* 
  Для того, щоб отримати доступ до властивостей об'єкта в методах, 
  ми звертаємось до нього через this і далі, стандартно - «через крапку» 
  до властивостей.
*/

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // Результат: ?

// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// console.log(bookShelf.getBooks()); // Результат: ?

// bookShelf.removeBook("The Mist");
// console.log(bookShelf.getBooks()); // Результат: ?

/* 
  --- Pозпаковування властивостей об'єкта (деструктуризація об'єктів)
  
  Це синтаксис, що дозволяє витягти властивості об'єкта в окремі змінні.
  Деструктуризація робить код більш чистим і зручним для читання,
  особливо коли потрібно працювати з кількома властивостями об'єкта одночасно.
*/

// const user = {
//   uname: "Alice",
//   age: 25,
//   email: "alice@example.com",
// };

// // Деструктуризація об'єкта
// const { uname, age, email } = user;

// console.log(uname, typeof uname); // Результат: Alice, string
// console.log(age, typeof age); // Результат: 25, number
// console.log(email, typeof email); // Результат: alice@example.com, string

/*  
  Як працює деструктуризація:

  1. Синтаксис: Ви вказуєте властивості об'єкта в фігурних дужках { } 
  зліва від оператора присвоєння = .
  2. Розпаковування: Змінні name, age, і email створюються і їм присвоюються 
  значення відповідних властивостей об'єкта user.
  3. Порядок неважливий: Властивості об'єкта можна витягувати в будь-якому 
  порядку, незалежно від їх розташування в об'єкті.
*/

/*   
  1. Деструктуризація з перейменуванням:
  Ви можете перейменувати змінні під час деструктуризації. 
*/

// const product = {
//   title: "Laptop",
//   price: 1200,
// };

// // Перейменування властивостей
// const { title: productName, price: productPrice } = product;

// console.log(productName); // Результат: ?
// console.log(productPrice); // Результат: ?

/*   
  2. Деструктуризація з значеннями за замовчуванням:
  Якщо властивість відсутня, можна задати значення за замовчуванням. 
*/

// const car = {
//   brand: "Toyota",
// };

// // Додання значення за замовчуванням для властивості, якої немає в об'єкті
// const { brand, model = "Unknown" } = car;

// console.log(brand);
// console.log(model);

/*   
  3. Деструктуризація вкладених об'єктів:
  Можна деструктурувати властивості вкладених об'єктів. 
*/

// const student = {
//   firstName: "John",
//   address: {
//     city: "New York",
//     country: "USA",
//   },
// };

// // Деструктуризація вкладених властивостей
// const {
//   firstName,
//   address: { city, country },
// } = student;

// console.log(firstName); // Результат: John
// console.log(city); // Результат: New York
// console.log(country); // Результат: USA

/* 
  --- Сеттери (setters) і гетери (getters) у JavaScript дозволяють керувати 
  доступом до властивостей об'єктів.
  Вони використовуються для того, щоб контролювати, як значення властивостей 
  встановлюються і отримуються.
  Зазвичай вони застосовуються в класах, але також можуть бути використані в об'єктах. 
*/

/*
  let obj = {
    get propName() {
     // гетер, код виконано під час отримання obj.propName
    },
    set propName(value) {
      // сетер, код виконано під час встановлення obj.propName = value
    },
  };
*/

// let user = {
//   name: "John",
//   surname: "Snow",

//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   },

//   set fullName(value) {
//     [this.name, this.surname] = value.split(" ");
//   },
// };

// console.log(user.fullName); // Результат: John Snow

// user.fullName = "Arya Stark";

// console.log(user.fullName); // Результат: Arya Stark
// console.log(user.name); // Результат: Arya
// console.log(user.surname); // Результат: Stark

/* 
  ---  In
  
  Оператор in в JavaScript використовується для перевірки наявності 
  властивості в об'єкті.
  Цей оператор може бути корисним для перевірки як власних властивостей 
  об'єкта, так і властивостей, які успадковані через ланцюг прототипів.
*/

// const person = {
//   name: "John",
//   age: 30,
// };

// console.log("name" in person); // Виведе: true
// console.log("age" in person); // Виведе: true
// console.log("address" in person); // Виведе: false

// давайте розглянемо наступну ситуацію:

// let user = {
//   login: 25,
//   unsubscribeDate: undefined,
// };

// if (user.login) {
//   console.log("Властивість user.login існує");
// } else {
//   console.log("Властивість user.login не знайдено");
// }

// let user = {
//     login: 25,
//     unsubscribeDate: undefined
// }

// if("unsubscribeDate" in user) {
//     console.log("Властивість unsubscribeDate існує");
// } else {
//     console.log("Властивість unsubscribeDate не знайдено");
// }

/* 
  --- For .. in
  
  це цикл в JavaScript, який дозволяє перебирати властивості об'єкта.
  Цей цикл ітерує через всі власні та наслідувані перераховувані властивості об'єкта
  включаючи ті, що знаходяться в ланцюгу прототипів).
*/

// for (let key in object) {
//   // Виконати код для кожної властивості
// }

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
// };

// for (let key in person) {
//   console.log(key); // Виведе: firstName, lastName, age
//   console.log(person[key]); // Виведе: John, Doe, 30
// }

/* 
  Потрібно написати код, який буде перевіряти чи є властивість власна,
  та після цього виводити всі властивості об'єкта у вигляді пар "ключ: значення".
*/

// let obj = {
//   name: "John",
//   age: 30,
//   profession: "developer",
// };
