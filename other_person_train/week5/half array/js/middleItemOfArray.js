// sample of input
//  ['+989393676765', '+989393456123', '+989393455465', '+989393456722', '+989393456765']

// result
//‘+989393455465’ => ‘09393455465’

function middleArray() {
  let message;

  const data = document
    .getElementById("arrayNumbers")
    .value.replace(/[\[\]]/g, "");

  const listOfNumber = data.split(",");

  const index = listOfNumber.length / 2;

  if (Math.floor(index) == 0) message = 0;
  else if (index === Math.round(index)) message = 1;
  else {
    const item = listOfNumber[Math.floor(index)];
    const result = item.replace("+98", "0");
    message = result;
  }

  printAnswer(message);
}

function printAnswer(message) {
  let finalMessage;
  switch (message) {
    case 0:
      finalMessage = "Your array <b>EMPTY</b>, please try again.";
      document.getElementById("message").classList.add("red");
      document.getElementById("message").classList.remove("green");
      break;
    case 1:
      finalMessage =
        "Your array has an <b>even</b> number of elements and <b> no middle </b>element.";
      document.getElementById("message").classList.add("red");
      document.getElementById("message").classList.remove("green");
      break;
    default:
      finalMessage = `Your phone number is:<b>  ${message} </b>`;
      document.getElementById("message").classList.add("green");
      document.getElementById("message").classList.remove("red");
  }
  document.getElementById("arrayNumbers").value = " ";
  document.getElementById("message").innerHTML = finalMessage;
}
