const createStepButton = document.getElementById("create-step");
const nextStepButton = document.getElementById("next-button");
const prevStepButton = document.getElementById("prev-button");
const progressBar = document.getElementById("progress-bar");
const inputNumber = document.getElementById("input-number");
let tagNode = [];

let step = 0;
let counterStep = 0;
prevStepButton.disabled = true;
nextStepButton.disabled = true;
const createStepHanler = () => {
  step = 0;
  counterStep = 0;

  step = parseInt(inputNumber.value);
  if (isNaN(step) || step <= 0) {
    alert("لطفا عدد وارد کنید");
    return;
  }
  prevStepButton.disabled = false;
  nextStepButton.disabled = false;
  progressBar.innerHTML = "";
  step = inputNumber.value;
  for (let i = 1; i <= step; i++) {
    progressBar.innerHTML += `
        <div class="node">
         ${i}
        </div>`;
  }
  tagNode = document.querySelectorAll(".node");
  console.log(tagNode[0].style.backgroundColor);
};

const stepHander = () => {
  if (counterStep == step) {
    prevStepButton.disabled = false;
    nextStepButton.disabled = true;
    // console.log("end");
  } else if (counterStep > 0 && counterStep < step) {
    prevStepButton.disabled = false;
    nextStepButton.disabled = false;
  } else if (counterStep < 1) {
    prevStepButton.disabled = true;
    nextStepButton.disabled = false;
    // console.log("first");
  }

  for (let i = 0; i < step; i++) {
    if (i < counterStep) {
      tagNode[i].style.backgroundColor = "#699cdd";
    } else {
      tagNode[i].style.backgroundColor = "#ffffff";
    }
  }
};

const nextStepHandler = () => {
  counterStep++;
  stepHander();
};

const prevStepHandler = () => {
  counterStep--;
  stepHander();
};

createStepButton.addEventListener("click", createStepHanler);
nextStepButton.addEventListener("click", () => nextStepHandler());
prevStepButton.addEventListener("click", () => prevStepHandler());
