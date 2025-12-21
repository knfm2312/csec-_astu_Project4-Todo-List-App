document.addEventListener("DOMContentLoaded", function() {
            const user = localStorage.getItem('user');
            const isLoggedIn = localStorage.getItem('loggedIn');
            const logoutButton = document.getElementById("logoutButton");

            if (!user || !isLoggedIn) {
                window.location.href = "login.html";
                return;
            }

            const parsedUser = JSON.parse(user);
            const username = parsedUser.username;

            document.getElementById("welcomeMessage").innerHTML = 
                `Hello ${parsedUser.name}, welcome to your todo list app`;
            logoutButton.classList.remove("hidden");

            logoutButton.addEventListener("click", function() {
                localStorage.removeItem('user');
                localStorage.removeItem('loggedIn');
                window.location.href = "login.html";
            });

            const input = document.getElementById("todo-input");
            const addBtn = document.getElementById("add-btn");
            const todoList = document.getElementById("todo-list");
            const totalCount = document.getElementById("total");
            const completedCount = document.getElementById("completed");
            const clearBtn = document.getElementById("clear-btn");
            let todos = [];

            addBtn.disabled = true;

            input.addEventListener("input", () => {
                addBtn.disabled = input.value.trim() === "";
            });

            loadTodos();

            addBtn.addEventListener("click", () => {
                const text = input.value.trim();
                if (text === "") return;
                todos.push({ text, completed: false });
                input.value = "";
                addBtn.disabled = true; 
                saveTodos();
                renderTodos();
            });

   
            todoList.addEventListener("click", (e) => {
                const index = e.target.closest("li")?.dataset.index;
                if (index === undefined) return;
                if (e.target.classList.contains("complete-btn")) todos[index].completed = !todos[index].completed;
                if (e.target.classList.contains("delete-btn")) todos.splice(index, 1);
                if (e.target.classList.contains("edit-btn")) {
                    const newText = prompt("Edit your todo:", todos[index].text);
                    if (newText !== null && newText.trim() !== "") todos[index].text = newText.trim();
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
                localStorage.setItem(`todos_${username}`, JSON.stringify(todos));
            }

            function loadTodos() {
                todos = JSON.parse(localStorage.getItem(`todos_${username}`) || "[]");
                renderTodos();
            }

            function renderTodos() {
                todoList.innerHTML = todos.length === 0 ? `<p class="empty">No todos yet! 🎉</p>` : "";
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
                totalCount.textContent = todos.length;
                completedCount.textContent = todos.filter(t => t.completed).length;
            }
        });