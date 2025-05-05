function checkPrime() {
  const num = parseInt(document.getElementById('number').value);
  const resultDiv = document.getElementById('primeResult');

  if (isNaN(num)) {
    resultDiv.textContent = 'لطفاً یک عدد معتبر وارد کنید.';
    return;
  }

  if (num < 2) {
    resultDiv.textContent = 'عدد باید بزرگ‌تر از ۱ باشد.';
    return;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      resultDiv.textContent = `${num} عدد اول نیست.`;
      return;
    }
  }

  resultDiv.textContent = `${num} یک عدد اول است.`;
}