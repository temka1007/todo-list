import "normalize.css";
import "./style.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import "date-fns";
import "./images/Reminders-icon.png";
import listInput from "./createList";
import checkingExistingList from "./listLoop";

const addListBtn = document.querySelector(".list-add");

addListBtn.addEventListener("click", () => {
  listInput();
  addListBtn.disabled = true;
});

checkingExistingList();
