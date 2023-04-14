import { deleteHandler } from "../deleteHandler";
import { showEditForm } from "../editHandler";


function getLocalData() {
    let localData = JSON.parse(localStorage.getItem('listItems')) || [];
    return localData
}


function createListItem(props) {
    const todoList = document.querySelector('.todo-list')
    const listItems = document.createElement('li');
    listItems.id = 'list-item';
    listItems.dataset.edit = props.id;
    listItems.dataset.delete = props.id;
    const str =
        `
        <div class="item-container">
        <div className="item-left">
            <input type="checkbox"  id="completed" />
        </div>
        <div class="item-mid">
            <h3>${props.title}</h3>
            <p>${props.content}</p>
        </div>
        <div class="item-right">
            <span>${props.date}</span>
            <button class="edit-btn" data-edit="${props.id}">編輯</button>
            <button class="delete-btn" data-delete="${props.id}">刪除</button>
        </div>
        </div>
        `;
    listItems.innerHTML += str;
    todoList.insertBefore(listItems, todoList.children[0],);

    if (todoList.childElementCount != -1) {
        bindBtnHandler(listItems);
    }
}

function renderTodoList() {
    const todoList = document.querySelector('.todo-list');
    // 清空現有的 todo 列表
    todoList.innerHTML = '';
    // 從 LocalStorage 中取得最新的 todo 項目資料
    const localData = getLocalData();
    // 建立新的 todo 列表
    localData.forEach((item) => {
        createListItem(item);

    });
}

function bindBtnHandler(props) {
    // const nodeList = props;
    const deleteBtn = props.querySelector('.delete-btn');
    const editBtn = props.querySelector('.edit-btn');
    deleteBtn.addEventListener('click', (e) => deleteHandler(e));
    editBtn.addEventListener('click', (e) => showEditForm(e));
}

export { getLocalData, bindBtnHandler, createListItem, renderTodoList }