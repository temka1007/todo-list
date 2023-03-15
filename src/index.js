import "normalize.css";
import "./style.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import "date-fns";
import todoPage from "./todoPage";
import "./images/Reminders-icon.png";
import listInput from "./addlist";

const addListBtn = document.querySelector(".list-add");
const content = document.querySelector(".todo-container");
const todayBtn = document.querySelector(".today");

addListBtn.addEventListener("click", () => {
    console.log("clicked")
});

listInput()

function cleaner() {
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
}

todayBtn.addEventListener("click", () => {
  cleaner();
  todoPage("Today");
  todoGod();
});

class TodoItem {
  constructor(note) {
    this.note = note;
    this.type = "reminder";
    this.flagged = false;
    this.completed = false;
  }
}

localStorage.setItem("reminder", JSON.stringify([]));

function item(note) {
  const test = new TodoItem(note);
  const array = JSON.parse(localStorage.getItem("reminder"));
  array.push(test);
  console.log(array);
  localStorage.setItem("reminder", JSON.stringify(array));
}
// item("noice")
item("weird");
item("cook");
item("lion");
item("noice");

function todoAdd(array, i) {
  const todoList = document.querySelector(".todo-list");

  const div = document.createElement("div");

  div.textContent = `${array[i].note}`;

  todoList.appendChild(div);
}

function todoGod() {
  const array = JSON.parse(localStorage.getItem("reminder"));
  console.log(array);
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].type === "reminder") {
      console.log("ok");
      const todoList = document.querySelector(".todo-list");

      const div = document.createElement("div");

      div.textContent = `${array[i].note}`;

      todoList.appendChild(div);
    }
  }
}
