function isPrime(number) {
  if (typeof (number) == "number") {
    if (number <= 1) {
      return false;
    }

    for (let i = 2; i * i <= number; i++) {
      if (number % i === 0) {
        return false;
      }
    }

    return true;
  }
  return `${number} invalid argument`;
}

console.log(isPrime(2)); // true
console.log(isPrime(6)); // false
console.log(isPrime("8")); // 'invalid argument'
