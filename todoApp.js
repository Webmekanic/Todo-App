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
    pTag.className = "task"
    pTag.innerHTML = `${todo.taskInput}`
    li.appendChild(pTag)
    const deleteImg = document.createElement("img")
    deleteImg.className = "deleteItem"
    deleteImg.setAttribute("src", "./images/icon-cross.svg")
    li.appendChild(deleteImg)
    taskList.appendChild(li)
  }

  checkedTask(target) {
    if (target.classList.contains("checkMark")) {
      target.classList.add("active")
      target.lastElementChild.classList.add("active")
      target.nextElementSibling.classList.add("strike")
    }
    if (target.classList.contains("checkIcon")) {
      target.classList.remove("active")
      target.parentElement.classList.remove("active")
      target.parentElement.nextElementSibling.classList.remove("strike")
    }
  }
  // Delete Task
  deleteTask(target) {
    if (target.className === "deleteItem") {
      target.parentElement.remove()
    }
  }

  clearCompleted(clear) {
    const taskList = document.querySelector(".taskList")
    while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild)
    }
  }

  taskLength(length) {
    const taskLength = document.querySelector("#taskLength")
    console.log(taskLength)
  }
}

// Event Listeners
document.querySelector("#taskForm").addEventListener("keypress", (e) => {
  const taskInput = document.querySelector("#enterTask").value

  const todo = new Todo(taskInput)
  const taskui = new TaskUI()
  if (e.key === "Enter") {
    taskui.addTask(todo)
    e.preventDefault()
  }
})

// Event listener for Delete Task
document.querySelector(".taskList").addEventListener("click", (e) => {
  const taskui = new TaskUI()
  taskui.deleteTask(e.target)
  e.preventDefault()
})

// Event Listener for checked task
document.querySelector(".taskList").addEventListener("click", (e) => {
  const taskui = new TaskUI()
  taskui.checkedTask(e.target)
  e.preventDefault()
})

// Event Listener for clear task
document.documentElement
  .querySelector(".clearTask")
  .addEventListener("click", (e) => {
    const taskList = document.querySelector(".taskList")
    const taskui = new TaskUI()
    taskui.clearCompleted(e.clear)

    e.preventDefault()
  })
