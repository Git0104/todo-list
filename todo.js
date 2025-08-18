const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList")

window.addEventListener("load", () => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    savedTodos.forEach(text => addTodoToList(text));

});
addBtn.addEventListener("click", () => {
    const todoText = input.value.trim();
    if (!todoText) return;

    addTodoToList(todoText)

    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push(todoText);
    localStorage.setItem("todos", JSON.stringify(todos));

    input.value = "";

});

    function addTodoToList(todoText) {
        const li = document.createElement("li");
        li.textContent = todoText;

    li.addEventListener("click", () => {
        li.style.textDecoration = li.style.textDecoration === "line-through" ? "none" : "line-through";
    });

    const delBtn = document.createElement("button");
    delBtn.textContent = "削除";
    delBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        li.remove();
        removeTodoFromStorage(todoText);
    });
    li.appendChild(delBtn);

todoList.appendChild(li);
    }

function removeTodoFromStorage(todoText) {

    let todos = JSON.parse(localStorage.getItem("todos")) || [];

    todos = todos.filter(t => t !== todoText);

    localStorage.setItem("todos", JSON.stringify(todos));
}