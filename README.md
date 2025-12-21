# Todo List Web App (with Login System)

A simple **Todo List Web Application** built using **HTML, CSS, and JavaScript**.  
This project helps users create, edit, complete, and delete tasks — with personal accounts and local data storage.

---

## Features

### User Authentication
- Users can **sign up (signin.html)** and **log in (login.html)**.
- Each user’s information is stored in **LocalStorage** (no backend required).
- Only logged-in users can access the todo list page (**index.html**).

### Todo Management
- Add new tasks easily.
- Edit or delete existing todos.
- Mark todos as **Completed/Undo**.
- View total and completed task count.
- Clear all todos at once.

### User-Specific Data
- Each user has their **own unique todo list** saved in the browser.
- Todos are saved under a key format like `todos_username`, so users never share data.

### Persistent Storage
- All data is saved in the browser using **localStorage**.
- Tasks remain even after refreshing or closing the page (until cleared).

---

## File Structure

