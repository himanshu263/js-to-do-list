
document.getElementById('add-btn').addEventListener('click', addTask);

function addTask() {
  const taskInput = document.getElementById('task-input');
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const taskList = document.getElementById('todo-list');

  // Create new task element
  const taskItem = document.createElement('li');
  taskItem.classList.add('task-item');

  taskItem.innerHTML = `
    <div class="task-content">
      <span class="task-text">${taskText}</span>
    </div>
    <div class="task-status">
      <select class="status">
        <option value="hold" class="status hold">Hold</option>
        <option value="pending" class="status pending">Pending</option>
        <option value="inprocess" class="status inprocess">In-Process</option>
        <option value="reject" class="status reject">Reject</option>
        <option value="complete" class="status complete">Complete</option>
      </select>
    </div>
    <div class="task-actions">
      <button class="edit-btn"><i class="fas fa-edit"></i></button>
      <button class="delete-btn"><i class="fas fa-trash-alt"></i></button>
    </div>
  `;

  // Add the task to the list
  taskList.appendChild(taskItem);

  // Clear the input field
  taskInput.value = '';

  // Edit task event
  taskItem.querySelector('.edit-btn').addEventListener('click', () => editTask(taskItem));

  // Delete task event
  taskItem.querySelector('.delete-btn').addEventListener('click', () => deleteTask(taskItem));

  // Status change event
  taskItem.querySelector('.status').addEventListener('change', (e) => updateStatus(e, taskItem));
}

function editTask(taskItem) {
  const taskText = taskItem.querySelector('.task-text');
  const newTaskText = prompt("Edit task:", taskText.textContent);
  
  if (newTaskText) {
    taskText.textContent = newTaskText;
  }
}

function deleteTask(taskItem) {
  taskItem.remove();
}

function updateStatus(e, taskItem) {
  const status = e.target.value;
  const statusElement = taskItem.querySelector('.status');
  statusElement.className = `status ${status}`;
}
