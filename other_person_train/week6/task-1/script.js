function calculate() {
  const a = parseFloat(document.getElementById('num1').value);
  const b = parseFloat(document.getElementById('num2').value);
  const operator = document.getElementById('operator').value;
  const resultDiv = document.getElementById('result');

  if (isNaN(a) || isNaN(b)) {
    resultDiv.textContent = 'لطفاً اعداد معتبر وارد کنید.';
    return;
  }

  let result;
  switch (operator) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      if (b === 0) {
        resultDiv.textContent = 'تقسیم بر صفر مجاز نیست.';
        return;
      }
      result = a / b;
      break;
    default:
      resultDiv.textContent = 'عملگر نامعتبر است.';
      return;
  }

  resultDiv.textContent = `نتیجه: ${result}`;
}
