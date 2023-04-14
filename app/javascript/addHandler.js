import { getLocalData, bindBtnHandler, createListItem } from "./helper/helper";


const todoTitle = document.querySelector('.todo-title');
const todoContent = document.querySelector('.form-content');

function addHandler(e) {
    const localData = Array.from(getLocalData());
    const dataObj = {
        title: todoTitle.value,
        content: todoContent.value,
        date: new Date().toLocaleDateString(),
        status: false,
        id: new Date().getTime()
    }
    if (todoTitle.value === '') {
        alert('標題為必填')
        return
    }
    localStorage.setItem('listItems', JSON.stringify([...localData, dataObj]));

    createListItem(dataObj);
    bindBtnHandler();

    todoTitle.value = '';
    todoContent.value = '';

}

export { addHandler }