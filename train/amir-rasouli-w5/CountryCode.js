const numbers = ["+989393676765", "+989393456123", "+989393455465", "+989393456722", "+989393456765"]
numbers.forEach((number, i) => {
    if(number.startsWith("+98")){
         numbers[i] = number.replace("+98","0")
    }
});
console.log(numbers);