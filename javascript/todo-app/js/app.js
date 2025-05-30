const taskInput = document.getElementById("task-input");
const dateInput = document.getElementById("date-input");
const addButton = document.getElementById("add-button");
const edditButton = document.getElementById("edit-button");
const alertMessage = document.getElementById("alert-message");
const todosBody = document.querySelector("tbody");
const deleteAllButton = document.getElementById("delete-all-button");
const filterButtons = document.querySelectorAll(".filter-todos");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

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
  return Math.round(
    Math.random() * Math.random() * Math.pow(10, 15)
  ).toString();
};

const saveToLocalStorage = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const displayTodos = () => {
  todosBody.innerHTML = "";
  if (!todos.length) {
    todosBody.innerHTML = "<tr><td colspan='4'>No Task Found!</td></tr>";
    return;
  }

  todos.forEach((todo) => {
    todosBody.innerHTML += `
    <tr>
    <td>${todo.task}</td>
    <td>${todo.date || "No Date"}</td>
    <td>${todo.completed ? "Completed" : "Pending"}</td>
    <td>
      <button onClick={editHandler('${todo.id}')}>Edit</button>
      <button onClick={toggleHandler('${todo.id}')}>${
      todo.completed ? "Undo" : "Do"
    }</button>
      <button onClick={deleteHandler('${todo.id}')}>Delete</button>
    </td>
    </tr>
    `;
  });
};

const addHandler = () => {
  const task = taskInput.value;
  const date = dateInput.value;
  const todo = {
    id: generateId(),
    completed: false,
    task,
    date,
  };
  if (task) {
    todos.push(todo);
    saveToLocalStorage();
    displayTodos();
    taskInput.value = "";
    dateInput.value = "";
    showAlert("Add to do successfuly", "success");
  } else {
    showAlert("You Have Error, please check todo!", "error");
  }
};

const deleteAllHandler = () => {
  if (todos.length) {
    todos = [];
    saveToLocalStorage();
    displayTodos();
    showAlert("DELETE ALL TODOS SUCCESSFULY", "success");
  } else {
    showAlert("NO TODO FOUND FOR DLETE", "error");
  }
};

const deleteHandler = (id) => {
  const newTodos = todos.filter((todo) => todo.id != id);

  todos = newTodos;
  saveToLocalStorage();
  displayTodos();
  showAlert("DELETE TODO SUCCESSFULY", "success");
};

const toggleHandler = (id) => {
  const todo = todos.find((todo) => todo.id === id);
  todo.completed = !todo.completed;
  saveToLocalStorage();
  displayTodos();
  showAlert("TODO STATUS CHANGED SUCCESSFULLY", "success");
};

const editHandler = (id) => {
  const todo = todos.find((todo) => todo.id === id);
  addButton.style.display = "none";
  edditButton.style.display = "inline-block";

  taskInput.value = todo.task;
  dateInput.value = todo.date;
  edditButton.dataset.id = id;
};

const applyEditHandler = (event) => {
  console.log(event.target.dataset.id);
  const id = event.target.dataset.id;
  const todo = todos.find((todo) => todo.id === id);
  todo.task = taskInput.value;
  todo.date = dateInput.value;
  taskInput.value = "";
  dateInput.value = "";
  addButton.style.display = "inline-block";
  edditButton.style.display = "none";
  saveToLocalStorage();
  displayTodos();
  showAlert("TODO EDITED SUCCESSFULLY", "success");
};

const filterHandler = (event) => {
  filterTodos = null;
  const filter = event.target.dataset.filter;
console.log(filter);
  switch (filter) {
    case "pending":
      filterTodos = todos.filter((todo) => todo.completed === false);
      break;
    case "completed":
      filterTodos = todos.filter((todo) => todo.completed === true);
      break;
    default:
      filterTodos = todos;
  }
  console.log(filterTodos);
  // displayTodos();
};
window.addEventListener("load", displayTodos);
addButton.addEventListener("click", addHandler);
deleteAllButton.addEventListener("click", deleteAllHandler);
edditButton.addEventListener("click", applyEditHandler);
filterButtons.forEach((button) => {
  button.addEventListener("click", filterHandler);
});
