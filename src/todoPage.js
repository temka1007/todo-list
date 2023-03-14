import "normalize.css";
import "./style.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import "date-fns";

export default function todoPage(pageName, color) {
    const todoContainer = document.querySelector('.todo-container');

    // .todo-container > button div*2
    const addTodo = document.createElement('button');
    const name = document.createElement('div');
    const todoList = document.createElement('div');

    todoContainer.append(addTodo, name, todoList)
}