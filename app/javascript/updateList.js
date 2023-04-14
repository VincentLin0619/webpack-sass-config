import { getLocalData, bindBtnHandler, createListItem } from "./helper/helper";


const localData = Array.from(getLocalData());
// const todoList = document.querySelector('.todo-list');

export function updateList() {
    localData.forEach((item) => {
        createListItem(item)
        bindBtnHandler();
    })
}