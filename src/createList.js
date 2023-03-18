import "normalize.css";
import "./style.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import "date-fns";
import todoPage from "./todoPage";
import todoLoop from "./todoLoop";

const content = document.querySelector(".todo-container");

function cleaner() {
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
}

function cantCreateSameNamedFolder() {
  content.setAttribute("id", "warning");
  content.textContent = "warning";
}

function sameNameChecker(input) {
  const list = document.querySelector(".list-names");

  for (let i = 0; i < list.children.length - 1; i += 1) {
    const div = document.querySelector(
      `.list-names > div:nth-child(${i + 1}) .list-logo + div `
    ).innerText;
    const name = input.value;
    if (div === name) {
      cantCreateSameNamedFolder();
      list.removeChild(list.lastChild);
    }
  }
}

export function confirm(input) {
  const list = document.querySelector(".list-names");
  if (input.value === "") {
    input.setAttribute("placeholder", "Required !!!");
  } else {
    list.removeChild(list.lastChild);

    const div = document.createElement("div");

    list.appendChild(div);

    // .list > div > div*3 button
    const listLogo = document.createElement("div");
    const inputContainer = document.createElement("form");

    inputContainer.setAttribute("action", "post");

    listLogo.classList.add("list-logo");
    inputContainer.classList.add("input-container");

    listLogo.innerHTML +=
      '<span class="material-symbols-outlined"> list </span>';

    const listName = document.createElement("div");
    const numberOfItem = document.createElement("div");
    const deleteBtn = document.createElement("button");

    numberOfItem.classList.add("number-of-item");

    listName.textContent = `${input.value}`;
    numberOfItem.textContent = "0";
    deleteBtn.innerHTML +=
      '<span class="material-symbols-outlined"> delete </span>';

    div.append(listLogo, listName, numberOfItem, deleteBtn);

    localStorage.setItem(`${input.value}`, JSON.stringify([]));

    sameNameChecker(input);

    div.addEventListener("click", (e) => {
      // if prevents from double clicking on div when you are clicking deleteBtn
      if (!(e.target.classList.value === "material-symbols-outlined")) {
        cleaner();
        todoPage(input.value);
        todoLoop(input.value)
      }
    });

    deleteBtn.addEventListener("click", (e) => {
      const element = e.target.parentElement.parentElement;
      list.removeChild(element);
      localStorage.removeItem(`${input.value}`);
      cleaner();
    });
  }
}

export default function listInput() {
  const list = document.querySelector(".list-names");

  const div = document.createElement("div");

  list.appendChild(div);

  // .list > div > div*2
  const listLogo = document.createElement("div");
  const inputContainer = document.createElement("form");

  inputContainer.setAttribute("action", "post");

  listLogo.classList.add("list-logo");
  inputContainer.classList.add("input-container");

  listLogo.innerHTML += '<span class="material-symbols-outlined"> list </span>';

  div.append(listLogo, inputContainer);

  // input-container > input button*2
  const input = document.createElement("input");
  const cancelBtn = document.createElement("button");

  input.setAttribute("placeholder", "List Name");
  cancelBtn.classList.add("cancel");
  cancelBtn.innerHTML += '<span class="material-symbols-outlined">close</span>';

  inputContainer.append(input, cancelBtn);

  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      cleaner();
      sameNameChecker(input);
      confirm(input);

      const addListBtn = document.querySelector(".list-add");
      addListBtn.disabled = false;

      // eslint-disable-next-line no-restricted-globals
      event.preventDefault();
    }
  });

  cancelBtn.addEventListener("click", () => {
    const addListBtn = document.querySelector(".list-add");
    addListBtn.disabled = false;
    // eslint-disable-next-line no-restricted-globals
    event.preventDefault();
    list.removeChild(list.lastChild);
  });
}
