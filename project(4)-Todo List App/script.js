document.addEventListener("DOMContentLoaded", function() {

        const user = localStorage.getItem('user');
        const isLoggedIn = localStorage.getItem('loggedIn');
    if (!user || !isLoggedIn) {
        window.location.href = "login.html";
    }

        if (user){
            const parsedUser = JSON.parse(user);
            document.getElementById("welcomeMessage").innerHTML= `Hello ${parsedUser.name} welcome to your todo list app`;
            document.getElementById('logoutButton').classList.remove("hidden");
        }
        document.getElementById("logoutButton").addEventListener("click", function(){
            localStorage.removeItem('user');
            localStorage.removeItem('loggedIn')
            window.location.href="login.html";
        });


// for tudo part


        const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
const totalCount = document.getElementById("total");
const completedCount = document.getElementById("completed");
const clearBtn = document.getElementById("clear-btn");

let todos = []; 

window.addEventListener("DOMContentLoaded", loadTodos);
input.addEventListener("input", () => {
  addBtn.disabled = input.value.trim() === "";
});

addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (text === "") return;

  const newTodo = { text, completed: false };
  todos.push(newTodo);
  input.value = "";
  addBtn.disabled = true;

  saveTodos();
  renderTodos();
});

todoList.addEventListener("click", (e) => {
  const index = e.target.closest("li")?.dataset.index;
  if (index === undefined) return;

  if (e.target.classList.contains("complete-btn")) {
    todos[index].completed = !todos[index].completed;
  }

  if (e.target.classList.contains("delete-btn")) {
    todos.splice(index, 1);
  }

  if (e.target.classList.contains("edit-btn")) {
    const newText = prompt("Edit your todo:", todos[index].text);
    if (newText !== null && newText.trim() !== "") {
      todos[index].text = newText.trim();
    }
  }

  saveTodos();
  renderTodos();
});

clearBtn.addEventListener("click", () => {
  todos = [];
  saveTodos();
  renderTodos();
});

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function loadTodos() {
  const saved = localStorage.getItem("todos");
  todos = saved ? JSON.parse(saved) : [];
  renderTodos();
}

function renderTodos() {
  todoList.innerHTML = "";

  if (todos.length === 0) {
    todoList.innerHTML = `<p class="empty">No todos yet! 🎉</p>`;
  }

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.dataset.index = index;
    li.className = todo.completed ? "completed" : "";

    li.innerHTML = `
      <span class="todo-text">${todo.text}</span>
      <div>
        <button class="complete-btn">${todo.completed ? "Undo" : "Complete"}</button>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
      </div>
    `;

    todoList.appendChild(li);
  });

  updateCounts();
}

function updateCounts() {
  totalCount.textContent = todos.length;
  completedCount.textContent = todos.filter(t => t.completed).length;
}

    });