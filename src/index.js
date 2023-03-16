import "normalize.css";
import "./style.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import "date-fns";
import "./images/Reminders-icon.png";
import listInput from "./addlist";
import checkingExistingList from "./listLoop";

const addListBtn = document.querySelector(".list-add");


addListBtn.addEventListener("click", () => {
  listInput();
});

// function cleaner() {
//  const content = document.querySelector(".todo-container");
//   while (content.firstChild) {
//     content.removeAttribute("id", "warning");
//     content.removeChild(content.lastChild);
//   }
// }

checkingExistingList()
