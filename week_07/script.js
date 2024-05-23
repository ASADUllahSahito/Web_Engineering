const todoList = document.getElementById('todo-list');
const newTaskInput = document.getElementById('new-task-input');
const addTaskForm = document.getElementById('add-task-form');

function addTask(task) {
    const listItem = document.createElement('li');
    listItem.innerText = task;
    // Add functionality to remove the task item (optional)
    listItem.addEventListener('click', function() {
        this.remove();
    });
    todoList.appendChild(listItem);
    newTaskInput.value = ''; // Clear the input field after adding the task
}

addTaskForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    const newTask = newTaskInput.value.trim(); // Get the new task text and trim whitespace
    if (newTask) {
        addTask(newTask);
    }
});


function addTodo() {
    var todoInput = document.getElementById("todoInput");
    var todoText = todoInput.value;
    if (todoText.trim() === "") {
        alert("Please enter a todo!");
        return;
    }
    var todoList = document.getElementById("todoList");
    var li = document.createElement("li");
    li.className = "todoItem";
    li.innerHTML = todoText + '<span class="deleteButton" onclick="removeTodo(this)">❌</span>';
    todoList.appendChild(li);
    todoInput.value = "";
}

function removeTodo(element) {
    var todoList = document.getElementById("todoList");
    todoList.removeChild(element.parentNode);
}