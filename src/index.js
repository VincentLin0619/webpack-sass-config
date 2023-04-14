import './index.sass'
// import { getLocalData, bindDeleteBtn } from "./helper/helper";
// import deleteHandler from "./todo_delete";
import { togglePopForm } from './javascript/togglePop';
import { addHandler } from './javascript/addHandler';
import { renderTodoList } from './javascript/helper/helper';




window.onload = renderTodoList;

const toggleBtn = document.querySelector('.close-form-btn').addEventListener('click', e => togglePopForm(e));

const todoBtn = document.querySelector('#todo-btn').addEventListener('click', e => togglePopForm(e));

const addBtn = document.querySelector('.form-btn');

// const todoInput = document.querySelector('#todo-input')
// const todoCheckBtn = document.querySelector('#completed');
// const testDate = document.querySelector('.item-date');
// const listHeader = document.querySelector('.todo-header');





addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addHandler(e);
});
addBtn.addEventListener("keyup", (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
        addHandler(e);
    }
});
