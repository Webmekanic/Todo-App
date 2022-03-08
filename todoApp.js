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
    const li = document.createElement("li")
    li.className = "tasklist-item"
    const section = document.createElement("section")
    section.className = "checkMark"
    const img = document.createElement("img")
    img.className = "checkIcon"
    img.setAttribute("src", "./images/icon-check.svg")
    section.appendChild(img)
    li.appendChild(section)
    const pTag = document.createElement("p")
    pTag.id = "task"
    pTag.innerHTML = `${todo.taskInput}`
    li.appendChild(pTag)
    const deleteImg = document.createElement("img")
    deleteImg.className = "deleteItem"
    deleteImg.setAttribute("src", "./images/icon-cross.svg")
    li.appendChild(deleteImg)

    taskList.appendChild(li)
  }
}

// Event Listeners
document.querySelector("#taskForm").addEventListener("keypress", (e) => {
  const taskInput = document.querySelector("#enterTask").value

  const todo = new Todo(taskInput)
  const taskui = new TaskUI()
  if (e.key === "Enter") {
    taskui.addTask(todo)
    // console.log(taskInput)
    e.preventDefault()
  }
})

// Event Listener for Delete
