// const fruits = ["apple", "banana", "grapes", "mango", "orange"];
// const result = fruits.reduce((acc, fruit) => acc + fruit.length, 0);
// console.log(result); 
// // answer = 28
//-----------------------
// const array = [1, 2, 3, 4, 5];
// const result = array.slice(1, 4).map(num => num * 2).reverse();
// console.log(result);
// // answer = [8,6,4]
//-----------------------
// const date1 = new Date('2024-06-30');
// const date2 = new Date('2024-06-29');
// const result = date1 > date2;
// console.log(result);
// // answer = true
//----------------------
const numbers = [1, 4, 9, 16];
const sqrtSum = numbers.map(Math.sqrt).reduce((acc, val) => acc + val, 0);
console.log(sqrtSum);