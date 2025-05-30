const createStepButton = document.getElementById("create-step");
const nextStepButton = document.getElementById("next-button");
const prevStepButton = document.getElementById("prev-button");
const progressBar = document.getElementById("progress-bar");
const inputNumber = document.getElementById("input-number");
let tagNode = [];

let step = 0;
let counterStep = 0;

const createStepHanler = () => {
  progressBar.innerHTML = "";
  step = inputNumber.value;
  for (let i = 1; i <= step; i++) {
    progressBar.innerHTML += `
        <div class="node">
         ${i}
        </div>`;
  }
  tagNode = document.querySelectorAll(".node");
};

const stepHander = () => {
  while ((counterStep) => 1 && counterStep <= step) {
    for (let i = 1; i <= step; i++) {
      if (i <= counterStep) {
        tagNode[i].style.backgroundColor = "#699cdd";
      } else {
        tagNode[i].style.backgroundColor = "#ffffff";
      }
    }

    if (counterStep === step) {
      prevStepButton.disabled = false;
      nextStepButton.disabled = true;
      return;
    }
    if (counterStep > 0 && counterStep < step) {
      prevStepButton.disabled = false;
      nextStepButton.disabled = false;
      return;
    }
    if (counterStep <= 1) {
      prevStepButton.disabled = true;
      nextStepButton.disabled = false;
      return;
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
// console.log(step, "  ", counterStep);

createStepButton.addEventListener("click", createStepHanler);
nextStepButton.addEventListener("click", () => nextStepHandler());
prevStepButton.addEventListener("click", () => prevStepHandler());
