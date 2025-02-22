// let x = + '5';
// let y = - '5';

// console.log(x + y)

// // 0  10

// let x = 10;
// console.log(typeof typeof x)

// // string number

// let x = 2;
// let y = 3;

// console.log(x ** y)

// // 8 6

// let x = 1;
// let y = x++;

// console.log(x, y)

// // 1 2          2 1

// let x = '42';
// let y = Number(x);

// console.log(x === y)

// // false        true

// let x = 5

// console.log(x++)
// console.log(x)

// // 6 6        5 6

// let x = 0
// let y = [];

// console.log(x == y)

// // false        true

// let x = 5
// let y = 2

// console.log(x % y)

// // 1        0

// let x = +!!'Hello'

// console.log(typeof x)

// // string        number

// let x = '2' + 2 + '2'

// console.log(x)

// // '222'        6

// let x = '10';
// let y = 5;

// console.log(x - y)
// console.log(x + y)

// // 5, 15        5, '105'

// let x = '1';
// let y = 1;

// console.log(x == y)

// // true        false

// let x = 3 > 2 > 1

// console.log(x)

// // true        false

// let x = 99;
// let y = typeof x;

// console.log(typeof y)

// // number        string

// let x = 1;
// x = x + (x += 2)

// console.log(x)

// // 3        4

// const value = 0;

// if (value === '0'){
//     console.log('Equal')
// } else{
//     console.log('Not Equal')
// }

// if (true)
//   if(!false)
//      console.log('A')
//   else
//     console.log('B')
// else
// console.log('C')

// let p = 10;
// if (p === 10){
//     let p = 20;
// }
// console.log(p)

// // 20   10

// let s = (x, y) => x * y;
// let r = s(3, 4) + s(2, 2);

// console.log(r)

// //12    16

// let numbers = [1, 2, 3, 4]
// let total = 1;
// for (let num of numbers){
//     total *= num;
// }

// console.log(total)

// //24    10

// function mystery(){
//     console.log(x);
//     var x = 10;
// }

// mystery();

// //undefined    10

// let calc = (x, y = 2) => {
//     return x > 3 ? x + y : x * y;
// }

// console.log(calc(3))

// //5    6

// for (let i = 1; i < 5; i++){
//     if (i === 3) continue;
//     console.log(i);
// }

// //3    1 2 4

// let x = 5;
// let y = x >= 6 ? 'm' : 'n';

// console.log(y)

// //m    n

// let obj = { name: 'Alice', age: 30};
// let keys = Object.keys(obj)

// console.log(keys)

// //name age      Alice 30

// let user = {
//     name: 'Alice',
//     address: {
//         city: 'Wonderland'
//     },
// };

// console.log( Object.keys(user).length)

// //2      3

// const x = [1, 2, 3];
// const y = x.fill(0);

// console.log(y);

// //0 0 0      1 2 3 0

// let x = [1, 2, 3, 4, 5];
// const y = x.some((x) => {
//     return x % 2 === 0;
// });

// console.log(y)

// //false     true

// let x = [1, 2, 3, 4, 5];
// const y = x.every((x) => x >= 0);

// console.log(y)

// //false     true

// let x = [1, 2, 3];
// const y = x.indexOf(2) * 2;

// console.log(y)

// //2      4      6

// let x = [1, 2, 3, 2];
// const y = x.lastIndexOf(2);

// console.log(y)

// //1            3

// let x = [1, 2, 3, 2];
// const y = x[8];

// console.log(y)

// //null         undefined

// let x = [1, 2, 3, 2];
// const y = x.slice(0, 2);

// console.log(y.length)

// //3         2

// let x = [1, 2, 3, 2];
// const y = x.pop();

// console.log(y)

// //1         2
