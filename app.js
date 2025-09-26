let todos = [];

function addTodo() {
    const input = document.getElementById('todoInput');
    if (input.value) {
        todos.push(input.value);
        input.value = '';
        renderTodos();
    }
}

function renderTodos() {
    const list = document.getElementById('todoList');
    list.innerHTML = todos.map((todo, i) => 
        `<div class="todo-item">${todo} <button onclick="deleteTodo(${i})">削除</button></div>`
    ).join('');
}

function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}
