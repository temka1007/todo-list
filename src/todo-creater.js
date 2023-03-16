import "normalize.css";
import "./style.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import "date-fns";

// function cleaner() {
//   while (content.firstChild) {
//     content.removeAttribute("id", "warning");
//     content.removeChild(content.lastChild);
//   }
// }

class TodoItem {
  constructor(note, listName) {
    this.note = note;
    this.listName = `${listName}`;
    this.flagged = false;
    this.completed = false;
    this.scheduled = "";
  }
}

function pushNoteToLocal(listName, note) {
  const test = new TodoItem(note, listName);
  const array = JSON.parse(localStorage.getItem(`${listName}`));
  array.push(test);
  console.log(array);
  localStorage.setItem(`${listName}`, JSON.stringify(array));
}

function confirm(input) {
  // todo-list > div
  const todoList = document.querySelector(".todo-list");
  const div = document.createElement("div");

  todoList.appendChild(div);

  // div > div*2
  const check = document.createElement("button");
  const noteContainer = document.createElement("div");

  check.classList.add("check");
  noteContainer.classList.add("note-container");

  div.append(check, noteContainer);

  // note-container > div button*4
  const note = document.createElement("div");
  const date = document.createElement("div");
  const flag = document.createElement("button");
  const deleteBtn = document.createElement("button");

  note.classList.add("note");
  date.classList.add("date");
  flag.classList.add("flag");
  deleteBtn.classList.add("todo-delete");

  note.textContent = `${input.value}`;

  noteContainer.append(note, date, flag, deleteBtn);

  const listName = document.querySelector(".todo-list-name").innerText;
  pushNoteToLocal(listName, input.value);
}

export default function createTodo() {
  console.log("clicked");
  const todoList = document.querySelector(".todo-list");
  // todo-list > div
  const div = document.createElement("div");

  todoList.appendChild(div);

  // todo-list > div > div form
  const form = document.createElement("form");

  div.append(form);

  // todo-list > div > form > input button
  const input = document.createElement("input");
  const cancelBtn = document.createElement("button");

  cancelBtn.classList.add("todo-cancel");
  cancelBtn.innerHTML += '<span class="material-symbols-outlined">close</span>';

  div.append(input, cancelBtn);

  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      todoList.removeChild(todoList.lastChild);
      confirm(input);
      // eslint-disable-next-line no-restricted-globals
      event.preventDefault();
    }
  });

  cancelBtn.addEventListener("click", () => {
    todoList.removeChild(todoList.lastChild);
  });
}
