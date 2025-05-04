const numbers = [5, 12, 8, 130, 44];
let numberDes= numbers.sort((a,b) => a - b)
console.log(numberDes);
//------------------
let les30 = [];
numbers.forEach(item => {
    if(item < 30){
        les30.push(item)
    }
});
console.log(les30);
//------------------
const sum = numbers.reduce((acc, cur) => acc + cur)
console.log(sum);
//------------------
const convertToString = numbers.toLocaleString();
console.log(convertToString);
//------------------
let minesIndex = []
numbers.map((item, index) => {
    minesIndex.push(item - index)
})
console.log(minesIndex);