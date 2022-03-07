// display checkicon
// remove checkmark border
// set checkmark background color
class Todo {
  constructor(taskInput) {
    this.taskInput = taskInput
  }
}

class TaskUI {}

// Event Listeners
document.querySelector("#taskForm").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const taskInput = document.querySelector("#enterTask").value
    console.log(taskInput)
    e.preventDefault()
  }
})

// Event Listener for Delete
