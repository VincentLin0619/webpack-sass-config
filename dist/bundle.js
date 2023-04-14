/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/javascript/addHandler.js":
/*!**************************************!*\
  !*** ./app/javascript/addHandler.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addHandler": () => (/* binding */ addHandler)
/* harmony export */ });
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper/helper */ "./app/javascript/helper/helper.js");

const todoTitle = document.querySelector('.todo-title');
const todoContent = document.querySelector('.form-content');
function addHandler(e) {
  const localData = Array.from((0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.getLocalData)());
  const dataObj = {
    title: todoTitle.value,
    content: todoContent.value,
    date: new Date().toLocaleDateString(),
    status: false,
    id: new Date().getTime()
  };
  if (todoTitle.value === '') {
    alert('標題為必填');
    return;
  }
  localStorage.setItem('listItems', JSON.stringify([...localData, dataObj]));
  (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.createListItem)(dataObj);
  (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.bindBtnHandler)();
  todoTitle.value = '';
  todoContent.value = '';
}


/***/ }),

/***/ "./app/javascript/deleteHandler.js":
/*!*****************************************!*\
  !*** ./app/javascript/deleteHandler.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteHandler": () => (/* binding */ deleteHandler)
/* harmony export */ });
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper/helper */ "./app/javascript/helper/helper.js");

const localData = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.getLocalData)();
function deleteHandler(e) {
  let targetEL = document.querySelectorAll('#list-item');
  let _id = e.target.dataset.delete;
  targetEL.forEach(item => {
    // console.log(item.dataset.id)
    // console.log(e.target.dataset.id)
    if (item.dataset.delete === _id) {
      item.setAttribute('class', 'fade-out');
      item.addEventListener('transitionend', () => {
        item.remove();
      });
    }
  });
  localData.forEach((item, key) => {
    // console.log(_id)
    if (item.id === Number(_id)) {
      // console.log(key)
      localData.splice(key, 1);
      localStorage.setItem('listItems', JSON.stringify(localData));
    }
  });
}

/***/ }),

/***/ "./app/javascript/editHandler.js":
/*!***************************************!*\
  !*** ./app/javascript/editHandler.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showEditForm": () => (/* binding */ showEditForm)
/* harmony export */ });
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper/helper */ "./app/javascript/helper/helper.js");

function showEditForm(e) {
  const localData = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.getLocalData)();
  const module = document.querySelector('.module');
  const editForm = module.cloneNode(true);
  editForm.classList.remove('hidden');
  const titleVal = editForm.querySelector('.todo-title');
  const contentVal = editForm.querySelector('.form-content');
  const editBtn = editForm.querySelector('.form-btn');
  const closeBtn = editForm.querySelector('.close-form-btn').addEventListener('click', e => {
    editForm.classList.add('hidden');
  });
  editBtn.innerHTML = '更新';
  editBtn.addEventListener('click', e => {
    e.preventDefault();
    const newTitle = titleVal.value;
    const newContent = contentVal.value;
    const curData = localData.findIndex(item => item.id.toString() === _id ? item : null);
    // console.log(localData[curData].title);
    localData[curData].title = newTitle;
    localData[curData].content = newContent;
    localStorage.setItem('listItems', JSON.stringify(localData));
    editForm.classList.add('hidden');
    (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.renderTodoList)();
    (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.bindBtnHandler)();
  });

  // 找到對應的 listItem
  let _id = e.target.dataset.edit;
  // console.log(_id)
  localData.forEach(item => {
    if (item.id.toString() === _id) {
      document.body.appendChild(editForm);
      // console.log(editForm.childNodes.item);
      titleVal.value = item.title;
      contentVal.value = item.content;
      // 找到後要顯示表單,表單的值為原本的資料
    }
  });
}

/***/ }),

/***/ "./app/javascript/helper/helper.js":
/*!*****************************************!*\
  !*** ./app/javascript/helper/helper.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bindBtnHandler": () => (/* binding */ bindBtnHandler),
/* harmony export */   "createListItem": () => (/* binding */ createListItem),
/* harmony export */   "getLocalData": () => (/* binding */ getLocalData),
/* harmony export */   "renderTodoList": () => (/* binding */ renderTodoList)
/* harmony export */ });
/* harmony import */ var _deleteHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../deleteHandler */ "./app/javascript/deleteHandler.js");
/* harmony import */ var _editHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../editHandler */ "./app/javascript/editHandler.js");


function getLocalData() {
  let localData = JSON.parse(localStorage.getItem('listItems')) || [];
  return localData;
}
function createListItem(props) {
  const todoList = document.querySelector('.todo-list');
  const listItems = document.createElement('li');
  listItems.id = 'list-item';
  listItems.dataset.edit = props.id;
  listItems.dataset.delete = props.id;
  const str = `
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
            <button id="edit-btn" data-edit="${props.id}">編輯</button>
            <button id="delete-btn" data-delete="${props.id}">刪除</button>
        </div>
        </div>
        `;
  listItems.innerHTML += str;
  todoList.insertBefore(listItems, todoList.children[0]);
}
function renderTodoList() {
  const todoList = document.querySelector('.todo-list');
  // 清空現有的 todo 列表
  todoList.innerHTML = '';
  // 從 LocalStorage 中取得最新的 todo 項目資料
  const localData = getLocalData();
  // 建立新的 todo 列表
  localData.forEach(item => {
    createListItem(item);
  });
}
function bindBtnHandler() {
  const deleteBtn = document.getElementById('delete-btn');
  const editBtn = document.getElementById('edit-btn');
  deleteBtn.addEventListener('click', e => (0,_deleteHandler__WEBPACK_IMPORTED_MODULE_0__.deleteHandler)(e));
  editBtn.addEventListener('click', e => (0,_editHandler__WEBPACK_IMPORTED_MODULE_1__.showEditForm)(e));
}


/***/ }),

/***/ "./app/javascript/togglePop.js":
/*!*************************************!*\
  !*** ./app/javascript/togglePop.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "togglePopForm": () => (/* binding */ togglePopForm)
/* harmony export */ });
const popupForm = document.querySelector('.module');
function togglePopForm(e) {
  // e.preventDefault();
  popupForm.classList.toggle('hidden');
}


/***/ }),

/***/ "./app/javascript/updateList.js":
/*!**************************************!*\
  !*** ./app/javascript/updateList.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateList": () => (/* binding */ updateList)
/* harmony export */ });
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper/helper */ "./app/javascript/helper/helper.js");

const localData = Array.from((0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.getLocalData)());
// const todoList = document.querySelector('.todo-list');

function updateList() {
  localData.forEach(item => {
    (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.createListItem)(item);
    (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.bindBtnHandler)();
  });
}

/***/ }),

/***/ "./app/style.sass":
/*!************************!*\
  !*** ./app/style.sass ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.sass */ "./app/style.sass");
/* harmony import */ var _javascript_togglePop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./javascript/togglePop */ "./app/javascript/togglePop.js");
/* harmony import */ var _javascript_addHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./javascript/addHandler */ "./app/javascript/addHandler.js");
/* harmony import */ var _javascript_updateList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./javascript/updateList */ "./app/javascript/updateList.js");

// import { getLocalData, bindDeleteBtn } from "./helper/helper";
// import deleteHandler from "./todo_delete";



window.onload = _javascript_updateList__WEBPACK_IMPORTED_MODULE_3__.updateList;
const toggleBtn = document.querySelector('.close-form-btn').addEventListener('click', e => (0,_javascript_togglePop__WEBPACK_IMPORTED_MODULE_1__.togglePopForm)(e));
const todoBtn = document.querySelector('#todo-btn').addEventListener('click', e => (0,_javascript_togglePop__WEBPACK_IMPORTED_MODULE_1__.togglePopForm)(e));
const addBtn = document.querySelector('.form-btn');

// const todoInput = document.querySelector('#todo-input')
// const todoCheckBtn = document.querySelector('#completed');
// const testDate = document.querySelector('.item-date');
// const listHeader = document.querySelector('.todo-header');

addBtn.addEventListener('click', e => {
  e.preventDefault();
  (0,_javascript_addHandler__WEBPACK_IMPORTED_MODULE_2__.addHandler)(e);
});
addBtn.addEventListener("keyup", e => {
  e.preventDefault();
  if (e.key === "Enter") {
    (0,_javascript_addHandler__WEBPACK_IMPORTED_MODULE_2__.addHandler)(e);
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUErRTtBQUcvRSxNQUFNRyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGFBQWEsQ0FBQztBQUN2RCxNQUFNQyxXQUFXLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGVBQWUsQ0FBQztBQUUzRCxTQUFTRSxVQUFVQSxDQUFDQyxDQUFDLEVBQUU7RUFDbkIsTUFBTUMsU0FBUyxHQUFHQyxLQUFLLENBQUNDLElBQUksQ0FBQ1gsNERBQVksRUFBRSxDQUFDO0VBQzVDLE1BQU1ZLE9BQU8sR0FBRztJQUNaQyxLQUFLLEVBQUVWLFNBQVMsQ0FBQ1csS0FBSztJQUN0QkMsT0FBTyxFQUFFVCxXQUFXLENBQUNRLEtBQUs7SUFDMUJFLElBQUksRUFBRSxJQUFJQyxJQUFJLEVBQUUsQ0FBQ0Msa0JBQWtCLEVBQUU7SUFDckNDLE1BQU0sRUFBRSxLQUFLO0lBQ2JDLEVBQUUsRUFBRSxJQUFJSCxJQUFJLEVBQUUsQ0FBQ0ksT0FBTztFQUMxQixDQUFDO0VBQ0QsSUFBSWxCLFNBQVMsQ0FBQ1csS0FBSyxLQUFLLEVBQUUsRUFBRTtJQUN4QlEsS0FBSyxDQUFDLE9BQU8sQ0FBQztJQUNkO0VBQ0o7RUFDQUMsWUFBWSxDQUFDQyxPQUFPLENBQUMsV0FBVyxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQyxDQUFDLEdBQUdqQixTQUFTLEVBQUVHLE9BQU8sQ0FBQyxDQUFDLENBQUM7RUFFMUVWLDhEQUFjLENBQUNVLE9BQU8sQ0FBQztFQUN2QlgsOERBQWMsRUFBRTtFQUVoQkUsU0FBUyxDQUFDVyxLQUFLLEdBQUcsRUFBRTtFQUNwQlIsV0FBVyxDQUFDUSxLQUFLLEdBQUcsRUFBRTtBQUUxQjs7Ozs7Ozs7Ozs7Ozs7OztBQzNCK0M7QUFFL0MsTUFBTUwsU0FBUyxHQUFHVCw0REFBWSxFQUFFO0FBRXpCLFNBQVMyQixhQUFhQSxDQUFDbkIsQ0FBQyxFQUFFO0VBQzdCLElBQUlvQixRQUFRLEdBQUd4QixRQUFRLENBQUN5QixnQkFBZ0IsQ0FBQyxZQUFZLENBQUM7RUFDdEQsSUFBSUMsR0FBRyxHQUFHdEIsQ0FBQyxDQUFDdUIsTUFBTSxDQUFDQyxPQUFPLENBQUNDLE1BQU07RUFDakNMLFFBQVEsQ0FBQ00sT0FBTyxDQUFFQyxJQUFJLElBQUs7SUFDdkI7SUFDQTtJQUNBLElBQUlBLElBQUksQ0FBQ0gsT0FBTyxDQUFDQyxNQUFNLEtBQUtILEdBQUcsRUFBRTtNQUM3QkssSUFBSSxDQUFDQyxZQUFZLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQztNQUN0Q0QsSUFBSSxDQUFDRSxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUUsTUFBTTtRQUN6Q0YsSUFBSSxDQUFDRyxNQUFNLEVBQUU7TUFDakIsQ0FBQyxDQUFDO0lBQ047RUFDSixDQUFDLENBQUM7RUFDRjdCLFNBQVMsQ0FBQ3lCLE9BQU8sQ0FBQyxDQUFDQyxJQUFJLEVBQUVJLEdBQUcsS0FBSztJQUM3QjtJQUNBLElBQUlKLElBQUksQ0FBQ2YsRUFBRSxLQUFLb0IsTUFBTSxDQUFDVixHQUFHLENBQUMsRUFBRTtNQUN6QjtNQUNBckIsU0FBUyxDQUFDZ0MsTUFBTSxDQUFDRixHQUFHLEVBQUUsQ0FBQyxDQUFDO01BQ3hCaEIsWUFBWSxDQUFDQyxPQUFPLENBQUMsV0FBVyxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ2pCLFNBQVMsQ0FBQyxDQUFDO0lBQ2hFO0VBQ0osQ0FBQyxDQUFDO0FBRU47Ozs7Ozs7Ozs7Ozs7OztBQzFCK0U7QUFHeEUsU0FBU2tDLFlBQVlBLENBQUNuQyxDQUFDLEVBQUU7RUFFNUIsTUFBTUMsU0FBUyxHQUFHVCw0REFBWSxFQUFFO0VBQ2hDLE1BQU00QyxNQUFNLEdBQUd4QyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxTQUFTLENBQUM7RUFFaEQsTUFBTXdDLFFBQVEsR0FBR0QsTUFBTSxDQUFDRSxTQUFTLENBQUMsSUFBSSxDQUFDO0VBRXZDRCxRQUFRLENBQUNFLFNBQVMsQ0FBQ1QsTUFBTSxDQUFDLFFBQVEsQ0FBQztFQUVuQyxNQUFNVSxRQUFRLEdBQUdILFFBQVEsQ0FBQ3hDLGFBQWEsQ0FBQyxhQUFhLENBQUM7RUFDdEQsTUFBTTRDLFVBQVUsR0FBR0osUUFBUSxDQUFDeEMsYUFBYSxDQUFDLGVBQWUsQ0FBQztFQUMxRCxNQUFNNkMsT0FBTyxHQUFHTCxRQUFRLENBQUN4QyxhQUFhLENBQUMsV0FBVyxDQUFDO0VBQ25ELE1BQU04QyxRQUFRLEdBQUdOLFFBQVEsQ0FBQ3hDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDZ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFN0IsQ0FBQyxJQUFJO0lBQ3RGcUMsUUFBUSxDQUFDRSxTQUFTLENBQUNLLEdBQUcsQ0FBQyxRQUFRLENBQUM7RUFDcEMsQ0FBQyxDQUFDO0VBR0ZGLE9BQU8sQ0FBQ0csU0FBUyxHQUFHLElBQUk7RUFDeEJILE9BQU8sQ0FBQ2IsZ0JBQWdCLENBQUMsT0FBTyxFQUFFN0IsQ0FBQyxJQUFJO0lBQ25DQSxDQUFDLENBQUM4QyxjQUFjLEVBQUU7SUFDbEIsTUFBTUMsUUFBUSxHQUFHUCxRQUFRLENBQUNsQyxLQUFLO0lBQy9CLE1BQU0wQyxVQUFVLEdBQUdQLFVBQVUsQ0FBQ25DLEtBQUs7SUFDbkMsTUFBTTJDLE9BQU8sR0FBR2hELFNBQVMsQ0FBQ2lELFNBQVMsQ0FBRXZCLElBQUksSUFBS0EsSUFBSSxDQUFDZixFQUFFLENBQUN1QyxRQUFRLEVBQUUsS0FBSzdCLEdBQUcsR0FBR0ssSUFBSSxHQUFHLElBQUksQ0FBQztJQUN2RjtJQUNBMUIsU0FBUyxDQUFDZ0QsT0FBTyxDQUFDLENBQUM1QyxLQUFLLEdBQUcwQyxRQUFRO0lBQ25DOUMsU0FBUyxDQUFDZ0QsT0FBTyxDQUFDLENBQUMxQyxPQUFPLEdBQUd5QyxVQUFVO0lBQ3ZDakMsWUFBWSxDQUFDQyxPQUFPLENBQUMsV0FBVyxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ2pCLFNBQVMsQ0FBQyxDQUFDO0lBQzVEb0MsUUFBUSxDQUFDRSxTQUFTLENBQUNLLEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFDaENWLDhEQUFjLEVBQUU7SUFDaEJ6Qyw4REFBYyxFQUFFO0VBQ3BCLENBQUMsQ0FBQzs7RUFFRjtFQUNBLElBQUk2QixHQUFHLEdBQUd0QixDQUFDLENBQUN1QixNQUFNLENBQUNDLE9BQU8sQ0FBQzRCLElBQUk7RUFDL0I7RUFDQW5ELFNBQVMsQ0FBQ3lCLE9BQU8sQ0FBRUMsSUFBSSxJQUFLO0lBQ3hCLElBQUlBLElBQUksQ0FBQ2YsRUFBRSxDQUFDdUMsUUFBUSxFQUFFLEtBQUs3QixHQUFHLEVBQUU7TUFDNUIxQixRQUFRLENBQUN5RCxJQUFJLENBQUNDLFdBQVcsQ0FBQ2pCLFFBQVEsQ0FBQztNQUNuQztNQUNBRyxRQUFRLENBQUNsQyxLQUFLLEdBQUdxQixJQUFJLENBQUN0QixLQUFLO01BQzNCb0MsVUFBVSxDQUFDbkMsS0FBSyxHQUFHcUIsSUFBSSxDQUFDcEIsT0FBTztNQUMvQjtJQUNKO0VBQ0osQ0FBQyxDQUFDO0FBQ047Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQ2lEO0FBQ0g7QUFHOUMsU0FBU2YsWUFBWUEsQ0FBQSxFQUFHO0VBQ3BCLElBQUlTLFNBQVMsR0FBR2dCLElBQUksQ0FBQ3NDLEtBQUssQ0FBQ3hDLFlBQVksQ0FBQ3lDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLEVBQUU7RUFDbkUsT0FBT3ZELFNBQVM7QUFDcEI7QUFHQSxTQUFTUCxjQUFjQSxDQUFDK0QsS0FBSyxFQUFFO0VBQzNCLE1BQU1DLFFBQVEsR0FBRzlELFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFlBQVksQ0FBQztFQUNyRCxNQUFNOEQsU0FBUyxHQUFHL0QsUUFBUSxDQUFDZ0UsYUFBYSxDQUFDLElBQUksQ0FBQztFQUM5Q0QsU0FBUyxDQUFDL0MsRUFBRSxHQUFHLFdBQVc7RUFDMUIrQyxTQUFTLENBQUNuQyxPQUFPLENBQUM0QixJQUFJLEdBQUdLLEtBQUssQ0FBQzdDLEVBQUU7RUFDakMrQyxTQUFTLENBQUNuQyxPQUFPLENBQUNDLE1BQU0sR0FBR2dDLEtBQUssQ0FBQzdDLEVBQUU7RUFDbkMsTUFBTWlELEdBQUcsR0FDSjtBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0JKLEtBQUssQ0FBQ3BELEtBQU07QUFDOUIsaUJBQWlCb0QsS0FBSyxDQUFDbEQsT0FBUTtBQUMvQjtBQUNBO0FBQ0Esb0JBQW9Ca0QsS0FBSyxDQUFDakQsSUFBSztBQUMvQiwrQ0FBK0NpRCxLQUFLLENBQUM3QyxFQUFHO0FBQ3hELG1EQUFtRDZDLEtBQUssQ0FBQzdDLEVBQUc7QUFDNUQ7QUFDQTtBQUNBLFNBQVM7RUFDTCtDLFNBQVMsQ0FBQ2QsU0FBUyxJQUFJZ0IsR0FBRztFQUMxQkgsUUFBUSxDQUFDSSxZQUFZLENBQUNILFNBQVMsRUFBRUQsUUFBUSxDQUFDSyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDMUQ7QUFFQSxTQUFTN0IsY0FBY0EsQ0FBQSxFQUFHO0VBQ3RCLE1BQU13QixRQUFRLEdBQUc5RCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxZQUFZLENBQUM7RUFDckQ7RUFDQTZELFFBQVEsQ0FBQ2IsU0FBUyxHQUFHLEVBQUU7RUFDdkI7RUFDQSxNQUFNNUMsU0FBUyxHQUFHVCxZQUFZLEVBQUU7RUFDaEM7RUFDQVMsU0FBUyxDQUFDeUIsT0FBTyxDQUFFQyxJQUFJLElBQUs7SUFDeEJqQyxjQUFjLENBQUNpQyxJQUFJLENBQUM7RUFDeEIsQ0FBQyxDQUFDO0FBQ047QUFFQSxTQUFTbEMsY0FBY0EsQ0FBQSxFQUFHO0VBQ3RCLE1BQU11RSxTQUFTLEdBQUdwRSxRQUFRLENBQUNxRSxjQUFjLENBQUMsWUFBWSxDQUFDO0VBQ3ZELE1BQU12QixPQUFPLEdBQUc5QyxRQUFRLENBQUNxRSxjQUFjLENBQUMsVUFBVSxDQUFDO0VBQ25ERCxTQUFTLENBQUNuQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUc3QixDQUFDLElBQUttQiw2REFBYSxDQUFDbkIsQ0FBQyxDQUFDLENBQUM7RUFDNUQwQyxPQUFPLENBQUNiLGdCQUFnQixDQUFDLE9BQU8sRUFBRzdCLENBQUMsSUFBS21DLDBEQUFZLENBQUNuQyxDQUFDLENBQUMsQ0FBQztBQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDdERBLE1BQU1rRSxTQUFTLEdBQUd0RSxRQUFRLENBQUNDLGFBQWEsQ0FBQyxTQUFTLENBQUM7QUFJbkQsU0FBU3NFLGFBQWFBLENBQUNuRSxDQUFDLEVBQUU7RUFDdEI7RUFDQWtFLFNBQVMsQ0FBQzNCLFNBQVMsQ0FBQzZCLE1BQU0sQ0FBQyxRQUFRLENBQUM7QUFDeEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQK0U7QUFHL0UsTUFBTW5FLFNBQVMsR0FBR0MsS0FBSyxDQUFDQyxJQUFJLENBQUNYLDREQUFZLEVBQUUsQ0FBQztBQUM1Qzs7QUFFTyxTQUFTNkUsVUFBVUEsQ0FBQSxFQUFHO0VBQ3pCcEUsU0FBUyxDQUFDeUIsT0FBTyxDQUFFQyxJQUFJLElBQUs7SUFDeEJqQyw4REFBYyxDQUFDaUMsSUFBSSxDQUFDO0lBQ3BCbEMsOERBQWMsRUFBRTtFQUNwQixDQUFDLENBQUM7QUFDTjs7Ozs7Ozs7Ozs7QUNYQTs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDckI7QUFDQTtBQUN1RDtBQUNGO0FBQ0E7QUFJckQ2RSxNQUFNLENBQUNDLE1BQU0sR0FBR0YsOERBQVU7QUFFMUIsTUFBTUcsU0FBUyxHQUFHNUUsUUFBUSxDQUFDQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQ2dDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTdCLENBQUMsSUFBSW1FLG9FQUFhLENBQUNuRSxDQUFDLENBQUMsQ0FBQztBQUU1RyxNQUFNeUUsT0FBTyxHQUFHN0UsUUFBUSxDQUFDQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUNnQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU3QixDQUFDLElBQUltRSxvRUFBYSxDQUFDbkUsQ0FBQyxDQUFDLENBQUM7QUFFcEcsTUFBTTBFLE1BQU0sR0FBRzlFLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQzs7QUFFbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBTUE2RSxNQUFNLENBQUM3QyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUc3QixDQUFDLElBQUs7RUFDcENBLENBQUMsQ0FBQzhDLGNBQWMsRUFBRTtFQUNsQi9DLGtFQUFVLENBQUNDLENBQUMsQ0FBQztBQUNqQixDQUFDLENBQUM7QUFDRjBFLE1BQU0sQ0FBQzdDLGdCQUFnQixDQUFDLE9BQU8sRUFBRzdCLENBQUMsSUFBSztFQUNwQ0EsQ0FBQyxDQUFDOEMsY0FBYyxFQUFFO0VBQ2xCLElBQUk5QyxDQUFDLENBQUMrQixHQUFHLEtBQUssT0FBTyxFQUFFO0lBQ25CaEMsa0VBQVUsQ0FBQ0MsQ0FBQyxDQUFDO0VBQ2pCO0FBQ0osQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC13ZWJwYWNrLy4vYXBwL2phdmFzY3JpcHQvYWRkSGFuZGxlci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC13ZWJwYWNrLy4vYXBwL2phdmFzY3JpcHQvZGVsZXRlSGFuZGxlci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC13ZWJwYWNrLy4vYXBwL2phdmFzY3JpcHQvZWRpdEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qtd2VicGFjay8uL2FwcC9qYXZhc2NyaXB0L2hlbHBlci9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qtd2VicGFjay8uL2FwcC9qYXZhc2NyaXB0L3RvZ2dsZVBvcC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC13ZWJwYWNrLy4vYXBwL2phdmFzY3JpcHQvdXBkYXRlTGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC13ZWJwYWNrLy4vYXBwL3N0eWxlLnNhc3M/MjA4ZiIsIndlYnBhY2s6Ly90b2RvbGlzdC13ZWJwYWNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0LXdlYnBhY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0LXdlYnBhY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qtd2VicGFjay8uL2FwcC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRMb2NhbERhdGEsIGJpbmRCdG5IYW5kbGVyLCBjcmVhdGVMaXN0SXRlbSB9IGZyb20gXCIuL2hlbHBlci9oZWxwZXJcIjtcclxuXHJcblxyXG5jb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby10aXRsZScpO1xyXG5jb25zdCB0b2RvQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNvbnRlbnQnKTtcclxuXHJcbmZ1bmN0aW9uIGFkZEhhbmRsZXIoZSkge1xyXG4gICAgY29uc3QgbG9jYWxEYXRhID0gQXJyYXkuZnJvbShnZXRMb2NhbERhdGEoKSk7XHJcbiAgICBjb25zdCBkYXRhT2JqID0ge1xyXG4gICAgICAgIHRpdGxlOiB0b2RvVGl0bGUudmFsdWUsXHJcbiAgICAgICAgY29udGVudDogdG9kb0NvbnRlbnQudmFsdWUsXHJcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKSxcclxuICAgICAgICBzdGF0dXM6IGZhbHNlLFxyXG4gICAgICAgIGlkOiBuZXcgRGF0ZSgpLmdldFRpbWUoKVxyXG4gICAgfVxyXG4gICAgaWYgKHRvZG9UaXRsZS52YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICBhbGVydCgn5qiZ6aGM54K65b+F5aGrJylcclxuICAgICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsaXN0SXRlbXMnLCBKU09OLnN0cmluZ2lmeShbLi4ubG9jYWxEYXRhLCBkYXRhT2JqXSkpO1xyXG5cclxuICAgIGNyZWF0ZUxpc3RJdGVtKGRhdGFPYmopO1xyXG4gICAgYmluZEJ0bkhhbmRsZXIoKTtcclxuXHJcbiAgICB0b2RvVGl0bGUudmFsdWUgPSAnJztcclxuICAgIHRvZG9Db250ZW50LnZhbHVlID0gJyc7XHJcblxyXG59XHJcblxyXG5leHBvcnQgeyBhZGRIYW5kbGVyIH0iLCJpbXBvcnQgeyBnZXRMb2NhbERhdGEgfSBmcm9tIFwiLi9oZWxwZXIvaGVscGVyXCI7XHJcblxyXG5jb25zdCBsb2NhbERhdGEgPSBnZXRMb2NhbERhdGEoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVIYW5kbGVyKGUpIHtcclxuICAgIGxldCB0YXJnZXRFTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNsaXN0LWl0ZW0nKTtcclxuICAgIGxldCBfaWQgPSBlLnRhcmdldC5kYXRhc2V0LmRlbGV0ZVxyXG4gICAgdGFyZ2V0RUwuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0uZGF0YXNldC5pZClcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldC5kYXRhc2V0LmlkKVxyXG4gICAgICAgIGlmIChpdGVtLmRhdGFzZXQuZGVsZXRlID09PSBfaWQpIHtcclxuICAgICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZhZGUtb3V0Jyk7XHJcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGl0ZW0ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBsb2NhbERhdGEuZm9yRWFjaCgoaXRlbSwga2V5KSA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coX2lkKVxyXG4gICAgICAgIGlmIChpdGVtLmlkID09PSBOdW1iZXIoX2lkKSkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhrZXkpXHJcbiAgICAgICAgICAgIGxvY2FsRGF0YS5zcGxpY2Uoa2V5LCAxKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xpc3RJdGVtcycsIEpTT04uc3RyaW5naWZ5KGxvY2FsRGF0YSkpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG59IiwiaW1wb3J0IHsgYmluZEJ0bkhhbmRsZXIsIGdldExvY2FsRGF0YSwgcmVuZGVyVG9kb0xpc3QgfSBmcm9tIFwiLi9oZWxwZXIvaGVscGVyXCI7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dFZGl0Rm9ybShlKSB7XHJcblxyXG4gICAgY29uc3QgbG9jYWxEYXRhID0gZ2V0TG9jYWxEYXRhKCk7XHJcbiAgICBjb25zdCBtb2R1bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kdWxlJyk7XHJcblxyXG4gICAgY29uc3QgZWRpdEZvcm0gPSBtb2R1bGUuY2xvbmVOb2RlKHRydWUpO1xyXG5cclxuICAgIGVkaXRGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlVmFsID0gZWRpdEZvcm0ucXVlcnlTZWxlY3RvcignLnRvZG8tdGl0bGUnKTtcclxuICAgIGNvbnN0IGNvbnRlbnRWYWwgPSBlZGl0Rm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybS1jb250ZW50Jyk7XHJcbiAgICBjb25zdCBlZGl0QnRuID0gZWRpdEZvcm0ucXVlcnlTZWxlY3RvcignLmZvcm0tYnRuJyk7XHJcbiAgICBjb25zdCBjbG9zZUJ0biA9IGVkaXRGb3JtLnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1mb3JtLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgZWRpdEZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBlZGl0QnRuLmlubmVySFRNTCA9ICfmm7TmlrAnXHJcbiAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IG5ld1RpdGxlID0gdGl0bGVWYWwudmFsdWU7XHJcbiAgICAgICAgY29uc3QgbmV3Q29udGVudCA9IGNvbnRlbnRWYWwudmFsdWU7XHJcbiAgICAgICAgY29uc3QgY3VyRGF0YSA9IGxvY2FsRGF0YS5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0uaWQudG9TdHJpbmcoKSA9PT0gX2lkID8gaXRlbSA6IG51bGwpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cobG9jYWxEYXRhW2N1ckRhdGFdLnRpdGxlKTtcclxuICAgICAgICBsb2NhbERhdGFbY3VyRGF0YV0udGl0bGUgPSBuZXdUaXRsZTtcclxuICAgICAgICBsb2NhbERhdGFbY3VyRGF0YV0uY29udGVudCA9IG5ld0NvbnRlbnQ7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xpc3RJdGVtcycsIEpTT04uc3RyaW5naWZ5KGxvY2FsRGF0YSkpO1xyXG4gICAgICAgIGVkaXRGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgIHJlbmRlclRvZG9MaXN0KCk7XHJcbiAgICAgICAgYmluZEJ0bkhhbmRsZXIoKTtcclxuICAgIH0pXHJcblxyXG4gICAgLy8g5om+5Yiw5bCN5oeJ55qEIGxpc3RJdGVtXHJcbiAgICBsZXQgX2lkID0gZS50YXJnZXQuZGF0YXNldC5lZGl0XHJcbiAgICAvLyBjb25zb2xlLmxvZyhfaWQpXHJcbiAgICBsb2NhbERhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLmlkLnRvU3RyaW5nKCkgPT09IF9pZCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVkaXRGb3JtKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZWRpdEZvcm0uY2hpbGROb2Rlcy5pdGVtKTtcclxuICAgICAgICAgICAgdGl0bGVWYWwudmFsdWUgPSBpdGVtLnRpdGxlO1xyXG4gICAgICAgICAgICBjb250ZW50VmFsLnZhbHVlID0gaXRlbS5jb250ZW50O1xyXG4gICAgICAgICAgICAvLyDmib7liLDlvozopoHpoa/npLrooajllq4s6KGo5Zau55qE5YC854K65Y6f5pys55qE6LOH5paZXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSIsImltcG9ydCB7IGRlbGV0ZUhhbmRsZXIgfSBmcm9tIFwiLi4vZGVsZXRlSGFuZGxlclwiO1xyXG5pbXBvcnQgeyBzaG93RWRpdEZvcm0gfSBmcm9tIFwiLi4vZWRpdEhhbmRsZXJcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBnZXRMb2NhbERhdGEoKSB7XHJcbiAgICBsZXQgbG9jYWxEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGlzdEl0ZW1zJykpIHx8IFtdO1xyXG4gICAgcmV0dXJuIGxvY2FsRGF0YVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGlzdEl0ZW0ocHJvcHMpIHtcclxuICAgIGNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tbGlzdCcpXHJcbiAgICBjb25zdCBsaXN0SXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgbGlzdEl0ZW1zLmlkID0gJ2xpc3QtaXRlbSc7XHJcbiAgICBsaXN0SXRlbXMuZGF0YXNldC5lZGl0ID0gcHJvcHMuaWQ7XHJcbiAgICBsaXN0SXRlbXMuZGF0YXNldC5kZWxldGUgPSBwcm9wcy5pZDtcclxuICAgIGNvbnN0IHN0ciA9XHJcbiAgICAgICAgYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1sZWZ0XCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAgaWQ9XCJjb21wbGV0ZWRcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLW1pZFwiPlxyXG4gICAgICAgICAgICA8aDM+JHtwcm9wcy50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICA8cD4ke3Byb3BzLmNvbnRlbnR9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxzcGFuPiR7cHJvcHMuZGF0ZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJlZGl0LWJ0blwiIGRhdGEtZWRpdD1cIiR7cHJvcHMuaWR9XCI+57eo6LyvPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJkZWxldGUtYnRuXCIgZGF0YS1kZWxldGU9XCIke3Byb3BzLmlkfVwiPuWIqumZpDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICBsaXN0SXRlbXMuaW5uZXJIVE1MICs9IHN0cjtcclxuICAgIHRvZG9MaXN0Lmluc2VydEJlZm9yZShsaXN0SXRlbXMsIHRvZG9MaXN0LmNoaWxkcmVuWzBdKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyVG9kb0xpc3QoKSB7XHJcbiAgICBjb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxpc3QnKTtcclxuICAgIC8vIOa4heepuuePvuacieeahCB0b2RvIOWIl+ihqFxyXG4gICAgdG9kb0xpc3QuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAvLyDlvp4gTG9jYWxTdG9yYWdlIOS4reWPluW+l+acgOaWsOeahCB0b2RvIOmgheebruizh+aWmVxyXG4gICAgY29uc3QgbG9jYWxEYXRhID0gZ2V0TG9jYWxEYXRhKCk7XHJcbiAgICAvLyDlu7rnq4vmlrDnmoQgdG9kbyDliJfooahcclxuICAgIGxvY2FsRGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgY3JlYXRlTGlzdEl0ZW0oaXRlbSlcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBiaW5kQnRuSGFuZGxlcigpIHtcclxuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGUtYnRuJyk7XHJcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtYnRuJyk7XHJcbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gZGVsZXRlSGFuZGxlcihlKSk7XHJcbiAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHNob3dFZGl0Rm9ybShlKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGdldExvY2FsRGF0YSwgYmluZEJ0bkhhbmRsZXIsIGNyZWF0ZUxpc3RJdGVtLCByZW5kZXJUb2RvTGlzdCB9IiwiY29uc3QgcG9wdXBGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZHVsZScpO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiB0b2dnbGVQb3BGb3JtKGUpIHtcclxuICAgIC8vIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHBvcHVwRm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcclxufVxyXG5cclxuZXhwb3J0IHsgdG9nZ2xlUG9wRm9ybSB9IiwiaW1wb3J0IHsgZ2V0TG9jYWxEYXRhLCBiaW5kQnRuSGFuZGxlciwgY3JlYXRlTGlzdEl0ZW0gfSBmcm9tIFwiLi9oZWxwZXIvaGVscGVyXCI7XHJcblxyXG5cclxuY29uc3QgbG9jYWxEYXRhID0gQXJyYXkuZnJvbShnZXRMb2NhbERhdGEoKSk7XHJcbi8vIGNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tbGlzdCcpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUxpc3QoKSB7XHJcbiAgICBsb2NhbERhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGNyZWF0ZUxpc3RJdGVtKGl0ZW0pXHJcbiAgICAgICAgYmluZEJ0bkhhbmRsZXIoKTtcclxuICAgIH0pXHJcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5zYXNzJ1xyXG4vLyBpbXBvcnQgeyBnZXRMb2NhbERhdGEsIGJpbmREZWxldGVCdG4gfSBmcm9tIFwiLi9oZWxwZXIvaGVscGVyXCI7XHJcbi8vIGltcG9ydCBkZWxldGVIYW5kbGVyIGZyb20gXCIuL3RvZG9fZGVsZXRlXCI7XHJcbmltcG9ydCB7IHRvZ2dsZVBvcEZvcm0gfSBmcm9tICcuL2phdmFzY3JpcHQvdG9nZ2xlUG9wJztcclxuaW1wb3J0IHsgYWRkSGFuZGxlciB9IGZyb20gJy4vamF2YXNjcmlwdC9hZGRIYW5kbGVyJztcclxuaW1wb3J0IHsgdXBkYXRlTGlzdCB9IGZyb20gJy4vamF2YXNjcmlwdC91cGRhdGVMaXN0JztcclxuXHJcblxyXG5cclxud2luZG93Lm9ubG9hZCA9IHVwZGF0ZUxpc3Q7XHJcblxyXG5jb25zdCB0b2dnbGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtZm9ybS1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gdG9nZ2xlUG9wRm9ybShlKSk7XHJcblxyXG5jb25zdCB0b2RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHRvZ2dsZVBvcEZvcm0oZSkpO1xyXG5cclxuY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tYnRuJyk7XHJcblxyXG4vLyBjb25zdCB0b2RvSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1pbnB1dCcpXHJcbi8vIGNvbnN0IHRvZG9DaGVja0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21wbGV0ZWQnKTtcclxuLy8gY29uc3QgdGVzdERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbS1kYXRlJyk7XHJcbi8vIGNvbnN0IGxpc3RIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1oZWFkZXInKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgYWRkSGFuZGxlcihlKTtcclxufSk7XHJcbmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgYWRkSGFuZGxlcihlKTtcclxuICAgIH1cclxufSk7XHJcbiJdLCJuYW1lcyI6WyJnZXRMb2NhbERhdGEiLCJiaW5kQnRuSGFuZGxlciIsImNyZWF0ZUxpc3RJdGVtIiwidG9kb1RpdGxlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidG9kb0NvbnRlbnQiLCJhZGRIYW5kbGVyIiwiZSIsImxvY2FsRGF0YSIsIkFycmF5IiwiZnJvbSIsImRhdGFPYmoiLCJ0aXRsZSIsInZhbHVlIiwiY29udGVudCIsImRhdGUiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwic3RhdHVzIiwiaWQiLCJnZXRUaW1lIiwiYWxlcnQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImRlbGV0ZUhhbmRsZXIiLCJ0YXJnZXRFTCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfaWQiLCJ0YXJnZXQiLCJkYXRhc2V0IiwiZGVsZXRlIiwiZm9yRWFjaCIsIml0ZW0iLCJzZXRBdHRyaWJ1dGUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwia2V5IiwiTnVtYmVyIiwic3BsaWNlIiwicmVuZGVyVG9kb0xpc3QiLCJzaG93RWRpdEZvcm0iLCJtb2R1bGUiLCJlZGl0Rm9ybSIsImNsb25lTm9kZSIsImNsYXNzTGlzdCIsInRpdGxlVmFsIiwiY29udGVudFZhbCIsImVkaXRCdG4iLCJjbG9zZUJ0biIsImFkZCIsImlubmVySFRNTCIsInByZXZlbnREZWZhdWx0IiwibmV3VGl0bGUiLCJuZXdDb250ZW50IiwiY3VyRGF0YSIsImZpbmRJbmRleCIsInRvU3RyaW5nIiwiZWRpdCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInBhcnNlIiwiZ2V0SXRlbSIsInByb3BzIiwidG9kb0xpc3QiLCJsaXN0SXRlbXMiLCJjcmVhdGVFbGVtZW50Iiwic3RyIiwiaW5zZXJ0QmVmb3JlIiwiY2hpbGRyZW4iLCJkZWxldGVCdG4iLCJnZXRFbGVtZW50QnlJZCIsInBvcHVwRm9ybSIsInRvZ2dsZVBvcEZvcm0iLCJ0b2dnbGUiLCJ1cGRhdGVMaXN0Iiwid2luZG93Iiwib25sb2FkIiwidG9nZ2xlQnRuIiwidG9kb0J0biIsImFkZEJ0biJdLCJzb3VyY2VSb290IjoiIn0=