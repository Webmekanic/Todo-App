class Todo {
  constructor(taskInput, taskList) {
    this.taskInput
    this.taskList = taskList
  }
}

class TaskUI {
  addTask(todo, taskInput) {
    this.taskInput = taskInput
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
    pTag.innerHTML = `${this.taskInput}`
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

  allTask() {
    this.taskList = taskList
    const taskLeft = document.querySelector("#taskLength")
    let x = []
    for (let i = 0; i < this.taskList.children.length; i++) {
      if (!this.taskList.children[i].firstChild.classList.contains("active")) {
        x.push(this.taskList.children[i])
      }
    }
    taskLeft.textContent = x.length
  }

  // Delete Task
  deleteTask(target) {
    const taskLength = document.querySelector("#taskLength")
    this.taskList = taskList
    if (target.className === "deleteItem") {
      target.parentElement.remove()
    }
  }

  clearCompleted(clear) {
    this.taskList = taskList
    const taskLeft = document.querySelector("#taskLength")
    for (let i = 0; i < this.taskList.children.length; i++) {
      if (this.taskList.children[i].firstChild.classList.contains("active")) {
        this.taskList.children[i].remove()
      }
    }
  }

  //Get All Task
  getAllTask() {
    this.taskList = taskList
    let getAll = []
    for (let i = 0; i < this.taskList.children.length; i++) {
      getAll.push(this.taskList.children[i])
      getAll.forEach((element) => {
        element.style.display = "flex"
      })
    }
  }

  getActiveTask() {
    this.taskList = taskList
    let getActive = []
    for (let i = 0; i < this.taskList.children.length; i++) {
      this.taskList.children[i].style.display = "flex"
      if (this.taskList.children[i].firstChild.classList.contains("active")) {
        getActive.push(this.taskList.children[i])
        getActive.forEach((element) => {
          element.style.display = "none"
        })
      }
    }
  }

  getCompletedTask() {
    this.taskList = taskList
    let getComplete = []
    for (let i = 0; i < this.taskList.children.length; i++) {
      this.taskList.children[i].style.display = "flex"
      if (!this.taskList.children[i].firstChild.classList.contains("active")) {
        getComplete.push(this.taskList.children[i])
        getComplete.forEach((element) => {
          element.style.display = "none"
        })
      }
    }
  }

  // Clear Field
}

class Store {
  static getTask() {
    let tasks
    if (localStorage.getItem("tasks") === null) {
      tasks = []
    } else {
      tasks = JSON.parse(localStorage.getItem("tasks"))
    }
    return tasks
  }
  static addTask(todo) {
    const tasks = Store.getTask()

    tasks.push(todo)

    localStorage.setItem("tasks", JSON.stringify(tasks))
  }
  // static checkedTask() {}
  // static deleteTask() {}
  // static clearCompleted() {}
}

// Event listener for Delete Task
const taskList = document.querySelector(".taskList")
const taskui = new TaskUI()
const todo = new Todo(taskList)

document.querySelector(".taskList").addEventListener("click", (e) => {
  taskui.deleteTask(e.target)
  taskui.allTask()
  e.preventDefault()
})

// Event Listeners
document.querySelector("#taskForm").addEventListener("keypress", (e) => {
  const taskInput = document.querySelector("#enterTask").value
  const taskui = new TaskUI()
  if (e.key === "Enter") {
    taskui.addTask(todo, taskInput)
    // Add to Local Storage
    Store.addTask(todo)
    taskui.allTask()
    e.preventDefault()
  }
})

// Event Listener for checked task
document.querySelector(".taskList").addEventListener("click", (e) => {
  taskui.checkedTask(e.target)
  taskui.allTask()
  e.preventDefault()
})

// Event Listener for clear task
document.querySelector(".clearTask").addEventListener("click", (e) => {
  taskui.clearCompleted(e.clear)
  taskui.allTask()
  e.preventDefault()
})

// / Event listener for All
document.querySelector("#allTask").addEventListener("click", (e) => {
  taskui.getAllTask()
  taskui.allTask()
  e.preventDefault()
})

// Event listener for Active
document.querySelector("#activeTask").addEventListener("click", (e) => {
  taskui.getActiveTask()
  e.preventDefault()
})

// Event listener for completed
document.querySelector("#completedTask").addEventListener("click", (e) => {
  taskui.getCompletedTask()

  e.preventDefault()
})
