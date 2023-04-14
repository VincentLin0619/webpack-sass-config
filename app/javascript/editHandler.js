import { bindBtnHandler, getLocalData, renderTodoList } from "./helper/helper";


export function showEditForm(e) {

    const localData = getLocalData();
    const module = document.querySelector('.module');

    const editForm = module.cloneNode(true);

    editForm.classList.remove('hidden');

    const titleVal = editForm.querySelector('.todo-title');
    const contentVal = editForm.querySelector('.form-content');
    const editBtn = editForm.querySelector('.form-btn');
    const closeBtn = editForm.querySelector('.close-form-btn').addEventListener('click', e => {
        editForm.classList.add('hidden')
    });


    editBtn.innerHTML = '更新'
    editBtn.addEventListener('click', e => {
        e.preventDefault();
        const newTitle = titleVal.value;
        const newContent = contentVal.value;
        const curData = localData.findIndex((item) => item.id.toString() === _id ? item : null)
        // console.log(localData[curData].title);
        localData[curData].title = newTitle;
        localData[curData].content = newContent;
        localStorage.setItem('listItems', JSON.stringify(localData));
        editForm.classList.add('hidden');
        renderTodoList();
    })

    // 找到對應的 listItem
    let _id = e.target.dataset.edit
    // console.log(_id)
    localData.forEach((item) => {
        if (item.id.toString() === _id) {
            document.body.appendChild(editForm);
            // console.log(editForm.childNodes.item);
            titleVal.value = item.title;
            contentVal.value = item.content;
            // 找到後要顯示表單,表單的值為原本的資料
        }
    })
}