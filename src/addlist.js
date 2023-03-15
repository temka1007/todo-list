import "normalize.css";
import "./style.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import "date-fns";

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
  const confirmBtn = document.createElement("button");
  const cancelBtn = document.createElement("button");

  confirmBtn.classList.add("confirm");
  cancelBtn.classList.add("cancel");

    confirmBtn.setAttribute("type", "button")

  confirmBtn.innerHTML +=
    '<span class="material-symbols-outlined">check</span>';
  cancelBtn.innerHTML += '<span class="material-symbols-outlined">close</span>';

  inputContainer.append(input, confirmBtn, cancelBtn);

  // EventListener
  confirmBtn.addEventListener("click", () => {
    if(input.value === "") {
        input.setAttribute("placeholder", "Required !!!")
    } else {
        console.log("oki")
    }
  });
}


