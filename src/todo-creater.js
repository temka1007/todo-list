import "normalize.css";
import "./style.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import "date-fns";
import todoIndex from "./todoIndex";

// function cleaner() {
//   while (content.firstChild) {
//     content.removeAttribute("id", "warning");
//     content.removeChild(content.lastChild);
//   }
// }



class TodoItem {
  constructor(note, listName, date) {
    this.note = note;
    this.listName = `${listName}`;
    this.flagged = false;
    this.completed = false;
    this.scheduled = date;
    this.id = Math.floor(100000 + Math.random() * 900000);
  }
}

function pushNoteToLocal(listName, note, date) {
  const test = new TodoItem(note, listName, date);
  const array = JSON.parse(localStorage.getItem(`${listName}`));
  array.push(test);
  console.log(array);
  localStorage.setItem(`${listName}`, JSON.stringify(array));
  return test.id;
}

function confirm(input, date) {
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
  const dateDiv = document.createElement("div");
  const flagBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");

  note.classList.add("note");
  dateDiv.classList.add("date");
  flagBtn.classList.add("flag");
  deleteBtn.classList.add("todo-delete");

  note.textContent = `${input.value}`;
  dateDiv.textContent = date;
  flagBtn.textContent = "flag";
  deleteBtn.innerHTML +=
    '<span class="material-symbols-outlined"> delete </span>';

  noteContainer.append(note, dateDiv, flagBtn, deleteBtn);

  const listName = document.querySelector(".todo-list-name").innerText;
  const array = JSON.parse(localStorage.getItem(listName))
  const id = pushNoteToLocal(listName, input.value, date);

  todoIndex(listName)

  flagBtn.addEventListener("click", () => {
    const latestArray = JSON.parse(localStorage.getItem(listName));
    for (let i = 0; i < latestArray.length; i += 1) {
      if (latestArray[i].id === id) {
        latestArray[i].flagged = !latestArray[i].flagged; // Toggle the flagged property
        localStorage.setItem(listName, JSON.stringify(latestArray));
        flagBtn.style.backgroundColor = latestArray[i].flagged
          ? "rgb(253, 149, 30)"
          : "";
        flagBtn.textContent = latestArray[i].flagged ? "flagged" : "flag";
        // Change the background color of the flag button based on the updated flagged property
      }
    }
  });

  check.addEventListener("click", () => {
    const latestArray = JSON.parse(localStorage.getItem(listName));
    for (let i = 0; i < latestArray.length; i += 1) {
      if (latestArray[i].id === id) {
        latestArray[i].completed = !latestArray[i].completed;
        localStorage.setItem(listName, JSON.stringify(latestArray));
        const checked = document.createElement("div");
        if (latestArray[i].completed) {
          check.appendChild(checked);
        } else {
          check.removeChild(check.firstChild);
        }
      }
    }
  });

  console.log(id)

  deleteBtn.addEventListener("click", () => {
    
    for (let i = 0; i < array.length; i += 1) {
      if (array[i].id === id) {
        todoList.removeChild(div);
        const latestArray = JSON.parse(localStorage.getItem(listName));
        const newArray = latestArray.filter((object) => object.id !== id);
        localStorage.setItem(listName, JSON.stringify(newArray));
        todoIndex(listName)
      }
    } 
  });
}

export default function createTodo() {
  console.log("clicked");
  const todoList = document.querySelector(".todo-list");
  // todo-list > div
  const div = document.createElement("div");

  todoList.appendChild(div);

  // todo-list > div > input button
  const input = document.createElement("input");
  const makeScheduleBtn = document.createElement("button");
  const cancelBtn = document.createElement("button");
  let dateInputValue;

  input.classList.add("note-input");
  makeScheduleBtn.textContent = "Make schedule";
  makeScheduleBtn.classList.add("make-schedule-btn");
  cancelBtn.classList.add("todo-cancel");
  cancelBtn.innerHTML += '<span class="material-symbols-outlined">close</span>';

  div.append(input, makeScheduleBtn, cancelBtn);

  makeScheduleBtn.addEventListener("click", () => {
    div.removeChild(makeScheduleBtn);
    const dateInput = document.createElement("input");
    const testDate = new Date();

    dateInput.setAttribute("type", "date");
    dateInput.classList.add("date-input");
    dateInput.value = testDate.toISOString().slice(0, 10);

    div.append(input, dateInput, cancelBtn);

    dateInputValue = dateInput.value;

    dateInput.addEventListener("input", () => {
      dateInputValue = dateInput.value;
    });
  });

  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      todoList.removeChild(todoList.lastChild);
      confirm(input, dateInputValue);

      const addTodoBtn = document.querySelector(".add-btn");
      addTodoBtn.disabled = false;

      // eslint-disable-next-line no-restricted-globals
      event.preventDefault();
    }
  });

  cancelBtn.addEventListener("click", () => {
    const addTodoBtn = document.querySelector(".add-btn");
    addTodoBtn.disabled = false;
    todoList.removeChild(todoList.lastChild);
  });
}
