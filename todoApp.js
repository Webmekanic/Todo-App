// display checkicon
// remove checkmark border
// set checkmark background color
class Todo {
  constructor(taskInput) {
    this.taskInput = taskInput
  }
}

class TaskUI {
  addTask(todo) {
    const taskList = document.querySelector(".taskList")

    // create element for todo
  }
}

// Event Listeners
document.querySelector("#taskForm").addEventListener("keypress", (e) => {
  const taskInput = document.querySelector("#enterTask").value

  const todo = new Todo(taskInput)
  const taskui = new TaskUI()
  if (e.key === "Enter") {
    console.log(taskInput)
    e.preventDefault()
  }
})

// Event Listener for Delete
