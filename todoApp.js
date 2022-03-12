class Todo {
  constructor(taskInput, taskList) {
    this.taskInput = taskInput
    this.taskList = taskList
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

  allTask(todo) {
    const taskLength = document.querySelector("#taskLength")
    const taskList = document.querySelectorAll(".tasklist-item")
    for (let i = 0; i < taskList.length; i++) {
      console.log(taskList[i])
      // if (taskList[i].classList.contains("checkMark")) {

      // }
    }
  }

  // Delete Task
  deleteTask(target) {
    const taskLength = document.querySelector("#taskLength")
    const taskList = document.querySelector(".taskList")

    if (target.className === "deleteItem") {
      target.parentElement.remove()
      taskLength.textContent = taskList.childElementCount
    }
  }

  clearCompleted(clear) {
    const taskLength = document.querySelector("#taskLength")
    const taskList = document.querySelector(".taskList")
    while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild)
      taskLength.textContent = taskList.childElementCount
    }
  }
}

// Event listener for Delete Task
document.querySelector(".taskList").addEventListener("click", (e) => {
  const taskui = new TaskUI()
  taskui.deleteTask(e.target)

  e.preventDefault()
})

// Event Listeners
document.querySelector("#taskForm").addEventListener("keypress", (e) => {
  const taskInput = document.querySelector("#enterTask").value
  const taskList = document.querySelector(".taskList")

  const todo = new Todo(taskInput, taskList)
  const taskui = new TaskUI()

  if (e.key === "Enter") {
    taskui.addTask(todo)
    taskui.allTask(todo)

    e.preventDefault()
  }
})

// Event Listener for checked task
document.querySelector(".taskList").addEventListener("click", (e) => {
  const taskui = new TaskUI()
  taskui.checkedTask(e.target)
  e.preventDefault()
})

// task length
// document.querySelector("#taskLength")

// Event Listener for clear task
document.querySelector(".clearTask").addEventListener("click", (e) => {
  const taskList = document.querySelector(".taskList")
  const taskui = new TaskUI()
  taskui.clearCompleted(e.clear)

  e.preventDefault()
})

// Event listener for All
document.querySelector("#allTask").addEventListener("click", (e) => {
  const taskList = document.querySelector(".taskList")
  const taskui = new TaskUI()
  // taskui.allTask(e.all)

  e.preventDefault()
})

// Event listener for Active
// Event listener for completed
