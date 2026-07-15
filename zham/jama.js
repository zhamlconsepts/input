const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

addBtn.addEventListener('click', () => {
    const taskText = todoInput.value.trim();

    if (taskText !== "") {
        const li = document.createElement('li');
        li.className = 'todo-item';

        const span = document.createElement('span');
        span.textContent = taskText;

        const deleteBtnSpan = document.createElement('span');
        deleteBtnSpan.innerHTML = `<button class="delete-btn">-</button>`;

        li.append(span);
        li.append(deleteBtnSpan);
        todoList.append(li);

        const deleteBtn = deleteBtnSpan.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            li.remove();
        });

        todoInput.value = "";
        todoInput.focus();
    }
});

todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addBtn.click();
    }
});