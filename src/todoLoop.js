import "normalize.css";
import "./style.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import "date-fns";

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

  note.textContent = input;

  noteContainer.append(note, date, flag, deleteBtn);
}

export default function todoLoop(listName) {
  const array = JSON.parse(localStorage.getItem(listName));
  console.log(array);
  for (let i = 0; i < array.length; i += 1) {
    confirm(array[i].note)
  }
}

// div.textContent = `${array[i].note}`;
