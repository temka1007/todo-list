import "normalize.css";
import "./style.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import "date-fns";

export function confirm(input, date, array, todoID, listName, i) {
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

  check.addEventListener("click", () => {
    const latestArray = JSON.parse(localStorage.getItem(listName));
    for (let i = 0; i < latestArray.length; i += 1) {
      if (latestArray[i].id === todoID) {
        latestArray[i].completed = !latestArray[i].completed;
        localStorage.setItem(listName, JSON.stringify(latestArray));
        const checked = document.createElement("div");
        if (latestArray[i].completed) {
          console.log("true");
          check.appendChild(checked);
        } else {
          check.removeChild(check.firstChild);
        }
      }
    }
  });

  // note-container > div button*4
  const note = document.createElement("div");
  const dateDiv = document.createElement("div");
  const flagBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");

  note.classList.add("note");
  dateDiv.classList.add("date");
  flagBtn.classList.add("flag");
  deleteBtn.classList.add("todo-delete");

  note.textContent = input;
  dateDiv.textContent = date;
  flagBtn.textContent = "flag";
  deleteBtn.innerHTML +=
    '<span class="material-symbols-outlined"> delete </span>';

  noteContainer.append(note, dateDiv, flagBtn, deleteBtn);

  const latestArray = JSON.parse(localStorage.getItem(listName));
  flagBtn.style.backgroundColor = latestArray[i].flagged
    ? "rgb(253, 149, 30)"
    : "";
  flagBtn.textContent = latestArray[i].flagged ? "flagged" : "flag";

  const checked = document.createElement("div");
  if (latestArray[i].completed) {
    console.log("true");
    check.appendChild(checked);
  } else if (!latestArray[i].completed) {
    if (check.hasChildNodes.length) {
      check.removeChild(checked);
    }
  }

  flagBtn.addEventListener("click", () => {
    const latestArray = JSON.parse(localStorage.getItem(listName));
    for (let i = 0; i < latestArray.length; i += 1) {
      if (latestArray[i].id === todoID) {
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

  deleteBtn.addEventListener("click", () => {
    for (let i = 0; i < array.length; i += 1) {
      if (array[i].id === todoID) {
        todoList.removeChild(div);
        const latestArray = JSON.parse(localStorage.getItem(listName));
        const newArray = latestArray.filter((object) => object.id !== todoID);
        localStorage.setItem(listName, JSON.stringify(newArray));
      }
    }
  });
}

export default function todoLoop(listName) {
  const array = JSON.parse(localStorage.getItem(listName));
  for (let i = 0; i < array.length; i += 1) {
    confirm(array[i].note, array[i].scheduled, array, array[i].id, listName, i);
  }
}

// div.textContent = `${array[i].note}`;
