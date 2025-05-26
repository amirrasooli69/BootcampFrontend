const taskInput = document.getElementById("task-input");
const dateInput = document.getElementById("date-input");
const addButton = document.getElementById("add-button");
const alertMessage = document.getElementById("alert-message");
const todosBody = document.querySelector("tbody");
const deleteAllButton = document.getElementById("delete-all-button");

let todos = JSON.parse(localStorage.getItem("todos")) || [];
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
  return Math.round(
    Math.random() * Math.random() * Math.pow(10, 15)
  ).toString();
};

const saveToLocalStorage = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const displayTodos = () => {
  todosBody.innerHTML = ""
  if (!todos.length) {
    todosBody.innerHTML = "<tr><td colspan='4'>No Task Found!</td></tr>";
    return;
  }

  todos.forEach((todo) => {
    todosBody.innerHTML += `
    <tr>
    <td>${todo.task}</td>
    <td>${todo.date || "No Date"}</td>
    <td>${todos.completed ? "Compeleted" : "Pending"}</td>
    <td>
      <button>Edit</button>
      <button>Do</button>
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
    compelete: false,
    task,
    date,
  };
  if (task) {
    todos.push(todo);
    saveToLocalStorage();
    displayTodos()
    taskInput.value = "";
    dateInput.value = "";
    console.log(todos);
    showAlert("Add to do successfuly", "success");
  } else {
    showAlert("You Have Error, please check todo!", "error");
  }
};

const deleteAllHandler = () => {
  if(todos.length) {
    todos = [];
    saveToLocalStorage();
    displayTodos();
    showAlert("DELETE ALL TODOS SUCCESSFULY", "success")
  } else {
    showAlert("NO TODO FOUND FOR DLETE", "error")
  }
}

const deleteHandler = (id) => {
  const newTodo = todos.filter(()=> {
    todos != id
  })

  todos = newTodo;
  saveToLocalStorage();
  displayTodos();
  showAlert("DELETE TODO SUCCESSFULY", "success")
}
window.addEventListener("load", displayTodos)
addButton.addEventListener("click", addHandler);
deleteAllButton.addEventListener("click", deleteAllHandler)
