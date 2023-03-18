import "normalize.css";
import "./style.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import "date-fns";

export default function todoIndex(listName, isdefault) {
  if (isdefault === undefined) {
    const array = JSON.parse(localStorage.getItem(listName));
    const numberOfItem = document.querySelector(".todo-number-of-item");
    numberOfItem.textContent = `${array.length}`;

    const chooseMeDiv = document.querySelector(`#${listName}`);
    chooseMeDiv.textContent = `${array.length}`;
  }
}
