function calculate(a, b, operator) {
    switch(operator){
        case "+": {
            return a + b ;
        }
        case "-": {
            return a - b;
        }
        case "*": {
            return a * b ;
        }
        case "/": {
            if(b == 0){
                return 'invalid arguments';
            }
            return a / b ;
        }
    }
}
    console.log(calculate(2, 3, '+') ) // 5
    console.log(calculate(2, 3, '-') ) // -1
    console.log(calculate(2, 0, '/') ) // 'invalid arguments'
    console.log(calculate(2, 4, '*') ) // 8
    