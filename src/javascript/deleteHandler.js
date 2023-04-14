import { getLocalData } from "./helper/helper";

const localData = getLocalData();

export function deleteHandler(e) {
    let targetEL = document.querySelectorAll('#list-item');
    let _id = e.target.dataset.delete
    targetEL.forEach((item) => {
        // console.log(item.dataset.id)
        // console.log(e.target.dataset.id)
        if (item.dataset.delete === _id) {
            item.setAttribute('class', 'fade-out');
            item.addEventListener('transitionend', () => {
                item.remove();
            });
        }
    })
    localData.forEach((item, key) => {
        // console.log(_id)
        if (item.id === Number(_id)) {
            // console.log(key)
            localData.splice(key, 1);
            localStorage.setItem('listItems', JSON.stringify(localData));
        }
    })

}