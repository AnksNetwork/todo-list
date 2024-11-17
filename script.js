// script.js
// Add Task
document.getElementById('add-btn').addEventListener('click', function () {
    const input = document.getElementById('todo-input');
    const task = input.value.trim();

    if (task !== '') {
        addTaskToList(task);
        input.value = '';
    } else {
        alert('Please enter a task!');
    }
});

// Function to Add Task to List
function addTaskToList(task) {
    const todoList = document.getElementById('todo-list');
    const li = document.createElement('li');
    li.innerHTML = `
        ${task}
        <button onclick="deleteTask(this)">Delete</button>
    `;
    todoList.appendChild(li);
}

// Function to Delete Task
function deleteTask(button) {
    button.parentElement.remove();
}
