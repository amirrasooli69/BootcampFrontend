const taskInput = document.getElementById("task-input");
const dateInput = document.getElementById("date-input");
const addButton = document.getElementById("add-button");
const alertMessage = document.getElementById("alert-message");
const todos = JSON.parse(localStorage.getItem("todos")) || [];
console.log(todos);
const showAlert = (message, type) => {
  alertMessage.innerHTML = "";

  const alert = document.createElement("p");
  alert.innerHTML = message;
  alert.classList.add("alert");
  alert.classList.add(`alert-${type}`);
  alertMessage.append(alert);
  setTimeout(() => {
    alert.style.display = "none";
  }, 2000);
};

const generateId = () => {
  return Math.round(Math.random() * Math.random() * Math.pow(10, 15)).toString();
};

const saveToLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
}
const addHandler = () => {
  const task = taskInput.value;
  const date = dateInput.value;
  const todo = {
    id: generateId(),
    compelete: false,
    task,
    date,
  };
  if (task) {
    todos.push(todo);
    saveToLocalStorage();
    taskInput.value = "";
    dateInput.value = "";
    console.log(todos);
    showAlert("Add to do successfuly", "success");
  } else {
    showAlert("You Have Error, please check todo!", "error");
  }
};

addButton.addEventListener("click", addHandler);
