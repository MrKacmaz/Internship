// // Example 1 
// const obj = { 1: 'a', 2: 'b', 3: 'c' };
// const set = new Set([1, 2, 3, 4, 5]);

// console.log(obj.hasOwnProperty('1'));
// console.log(obj.hasOwnProperty(1));
// console.log(set.has('1'));
// console.log(set.has(1));

// // Example 2
// for (let i = 1; i < 5; i++) {
//     if (i === 3) continue;
//     console.log(i);
// }

// // Example 3
// const foo = () => console.log('First');
// const bar = () => setTimeout(() => console.log('Second'));
// const baz = () => console.log('Third');

// bar();
// foo();
// baz();

// // Example 4
// console.log([...'Lydia']);

// // Example 5
// const num = parseInt('7 * 6', 10);
// console.log(num);

// // Example 6
// (() => {
//     let x = (y = 10);
// })();

// console.log(typeof x);
// console.log(typeof y);

// // Example 7
// const set2 = new Set([1, 1, 2, 3, 4]);
// console.log(set2);

// // Example 8
// console.log(5 === 5);
// console.log(5 === '5');
// console.log(5 == '5');

// // Example 9
// console.log(typeof("asd"));
// console.log(typeof(55));
// console.log(typeof(55.98));
// console.log(typeof([1,2,3,4,5,6]));
// var wrap = new Number(3);
// console.log(wrap);

// // Example 10
// function isString(value) {
//     return typeof value === 'string' || value instanceof String;
// }
// console.log(isString("alperen"));


// // Example 11 MAPS-FILTER-REDUCE
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evens = numbers.map(x => x % 2 == 0);
// const evens2 = numbers.map((val, i, arr) => {
//     return val * 5;
// });
// console.log(evens);
// console.log(evens2);

// const odds = numbers.filter(x => x % 2 != 0);
// const odds2 = numbers.filter((currElement, i, arr) => {
//     return currElement * 2;
// });
// console.log(odds);
// console.log("odds2 " + odds2);

// const total = numbers.reduce((sum, val) => sum + val);
// console.log(total);