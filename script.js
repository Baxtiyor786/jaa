function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" onchange="toggleComplete(this)">
            <span>${taskText}</span>
            <div class="actions">
                <button onclick="editTask(this)">✏️</button>
                <button onclick="deleteTask(this)">🗑️</button>
            </div>
        `;
        document.getElementById('taskList').appendChild(li);
        taskInput.value = '';
    }
}

function toggleComplete(checkbox) {
    const taskItem = checkbox.parentElement;
    taskItem.classList.toggle('completed', checkbox.checked);
}

function editTask(button) {
    const taskItem = button.parentElement.parentElement;
    const taskText = taskItem.querySelector('span');
    const newTaskText = prompt('Edit your task:', taskText.textContent);
    if (newTaskText !== null && newTaskText.trim() !== '') {
        taskText.textContent = newTaskText;
    }
}

function deleteTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.remove();
}
