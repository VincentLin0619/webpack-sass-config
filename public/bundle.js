(()=>{"use strict";const e=document.querySelector(".module");function t(t){e.classList.toggle("hidden")}const n=o();function o(){return JSON.parse(localStorage.getItem("listItems"))||[]}function i(e){const t=document.querySelector(".todo-list"),i=document.createElement("li");i.id="list-item",i.dataset.edit=e.id,i.dataset.delete=e.id;const c=`\n        <div class="item-container">\n        <div className="item-left">\n            <input type="checkbox"  id="completed" />\n        </div>\n        <div class="item-mid">\n            <h3>${e.title}</h3>\n            <p>${e.content}</p>\n        </div>\n        <div class="item-right">\n            <span>${e.date}</span>\n            <button class="edit-btn" data-edit="${e.id}">編輯</button>\n            <button class="delete-btn" data-delete="${e.id}">刪除</button>\n        </div>\n        </div>\n        `;i.innerHTML+=c,t.insertBefore(i,t.children[0]),-1!=t.childElementCount&&function(e){const t=e.querySelector(".delete-btn"),i=e.querySelector(".edit-btn");t.addEventListener("click",(e=>function(e){let t=document.querySelectorAll("#list-item"),o=e.target.dataset.delete;t.forEach((e=>{e.dataset.delete===o&&(e.setAttribute("class","fade-out"),e.addEventListener("transitionend",(()=>{e.remove()})))})),n.forEach(((e,t)=>{e.id===Number(o)&&(n.splice(t,1),localStorage.setItem("listItems",JSON.stringify(n)))}))}(e))),i.addEventListener("click",(e=>function(e){const t=o(),n=document.querySelector(".module").cloneNode(!0);n.classList.remove("hidden");const i=n.querySelector(".todo-title"),c=n.querySelector(".form-content"),l=n.querySelector(".form-btn");n.querySelector(".close-form-btn").addEventListener("click",(e=>{n.classList.add("hidden")})),l.innerHTML="更新",l.addEventListener("click",(e=>{e.preventDefault();const o=i.value,l=c.value,s=t.findIndex((e=>e.id.toString()===r?e:null));t[s].title=o,t[s].content=l,localStorage.setItem("listItems",JSON.stringify(t)),n.classList.add("hidden"),d()}));let r=e.target.dataset.edit;t.forEach((e=>{e.id.toString()===r&&(document.body.appendChild(n),i.value=e.title,c.value=e.content)}))}(e)))}(i)}function d(){document.querySelector(".todo-list").innerHTML="",o().forEach((e=>{i(e)}))}const c=document.querySelector(".todo-title"),l=document.querySelector(".form-content");function r(e){const t=Array.from(o()),n={title:c.value,content:l.value,date:(new Date).toLocaleDateString(),status:!1,id:(new Date).getTime()};""!==c.value?(localStorage.setItem("listItems",JSON.stringify([...t,n])),i(n),c.value="",l.value=""):alert("標題為必填")}window.onload=d,document.querySelector(".close-form-btn").addEventListener("click",(e=>t())),document.querySelector("#todo-btn").addEventListener("click",(e=>t()));const s=document.querySelector(".form-btn");s.addEventListener("click",(e=>{e.preventDefault(),r()})),s.addEventListener("keyup",(e=>{e.preventDefault(),"Enter"===e.key&&r()}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L0J3QixVQUFZLEdBRUhsQixJQUVSNkIsU0FBU0MsSUFDZnpCLEVBQWV5QixFQUFLLEdBRzVCLENFakRBLE1BQU0wQixFQUFZL0QsU0FBU0MsY0FBYyxlQUNuQytELEVBQWNoRSxTQUFTQyxjQUFjLGlCQUUzQyxTQUFTZ0UsRUFBVzlELEdBQ2hCLE1BQU1HLEVBQVk0RCxNQUFNQyxLQUFLNUQsS0FDdkI2RCxFQUFVLENBQ1o5QyxNQUFPeUMsRUFBVVYsTUFDakI5QixRQUFTeUMsRUFBWVgsTUFDckI3QixNQUFNLElBQUk2QyxNQUFPQyxxQkFDakJDLFFBQVEsRUFDUnRELElBQUksSUFBSW9ELE1BQU9HLFdBRUssS0FBcEJULEVBQVVWLE9BSWQzQyxhQUFhaUMsUUFBUSxZQUFhbkMsS0FBS29DLFVBQVUsSUFBSXRDLEVBQVc4RCxLQUVoRXhELEVBQWV3RCxHQUNmTCxFQUFVVixNQUFRLEdBQ2xCVyxFQUFZWCxNQUFRLElBUGhCb0IsTUFBTSxRQVNkLENDZkFDLE9BQU9DLE9BQVNqQixFQUVFMUQsU0FBU0MsY0FBYyxtQkFBbUI4QixpQkFBaUIsU0FBUzVCLEdBQUtELE1BRTNFRixTQUFTQyxjQUFjLGFBQWE4QixpQkFBaUIsU0FBUzVCLEdBQUtELE1BRm5GLE1BSU0wRSxFQUFTNUUsU0FBU0MsY0FBYyxhQVd0QzJFLEVBQU83QyxpQkFBaUIsU0FBVTVCLElBQzlCQSxFQUFFZ0QsaUJBQ0ZjLEdBQWEsSUFFakJXLEVBQU83QyxpQkFBaUIsU0FBVTVCLElBQzlCQSxFQUFFZ0QsaUJBQ1ksVUFBVmhELEVBQUVxQyxLQUNGeUIsR0FDSixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3Qtd2VicGFjay8uL3NyYy9qYXZhc2NyaXB0L3RvZ2dsZVBvcC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC13ZWJwYWNrLy4vc3JjL2phdmFzY3JpcHQvZGVsZXRlSGFuZGxlci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC13ZWJwYWNrLy4vc3JjL2phdmFzY3JpcHQvaGVscGVyL2hlbHBlci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC13ZWJwYWNrLy4vc3JjL2phdmFzY3JpcHQvZWRpdEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qtd2VicGFjay8uL3NyYy9qYXZhc2NyaXB0L2FkZEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qtd2VicGFjay8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwb3B1cEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kdWxlJyk7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZVBvcEZvcm0oZSkge1xyXG4gICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgcG9wdXBGb3JtLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xyXG59XHJcblxyXG5leHBvcnQgeyB0b2dnbGVQb3BGb3JtIH0iLCJpbXBvcnQgeyBnZXRMb2NhbERhdGEgfSBmcm9tIFwiLi9oZWxwZXIvaGVscGVyXCI7XHJcblxyXG5jb25zdCBsb2NhbERhdGEgPSBnZXRMb2NhbERhdGEoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVIYW5kbGVyKGUpIHtcclxuICAgIGxldCB0YXJnZXRFTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNsaXN0LWl0ZW0nKTtcclxuICAgIGxldCBfaWQgPSBlLnRhcmdldC5kYXRhc2V0LmRlbGV0ZVxyXG4gICAgdGFyZ2V0RUwuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0uZGF0YXNldC5pZClcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldC5kYXRhc2V0LmlkKVxyXG4gICAgICAgIGlmIChpdGVtLmRhdGFzZXQuZGVsZXRlID09PSBfaWQpIHtcclxuICAgICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZhZGUtb3V0Jyk7XHJcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGl0ZW0ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBsb2NhbERhdGEuZm9yRWFjaCgoaXRlbSwga2V5KSA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coX2lkKVxyXG4gICAgICAgIGlmIChpdGVtLmlkID09PSBOdW1iZXIoX2lkKSkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhrZXkpXHJcbiAgICAgICAgICAgIGxvY2FsRGF0YS5zcGxpY2Uoa2V5LCAxKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xpc3RJdGVtcycsIEpTT04uc3RyaW5naWZ5KGxvY2FsRGF0YSkpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG59IiwiaW1wb3J0IHsgZGVsZXRlSGFuZGxlciB9IGZyb20gXCIuLi9kZWxldGVIYW5kbGVyXCI7XHJcbmltcG9ydCB7IHNob3dFZGl0Rm9ybSB9IGZyb20gXCIuLi9lZGl0SGFuZGxlclwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldExvY2FsRGF0YSgpIHtcclxuICAgIGxldCBsb2NhbERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaXN0SXRlbXMnKSkgfHwgW107XHJcbiAgICByZXR1cm4gbG9jYWxEYXRhXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMaXN0SXRlbShwcm9wcykge1xyXG4gICAgY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1saXN0JylcclxuICAgIGNvbnN0IGxpc3RJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBsaXN0SXRlbXMuaWQgPSAnbGlzdC1pdGVtJztcclxuICAgIGxpc3RJdGVtcy5kYXRhc2V0LmVkaXQgPSBwcm9wcy5pZDtcclxuICAgIGxpc3RJdGVtcy5kYXRhc2V0LmRlbGV0ZSA9IHByb3BzLmlkO1xyXG4gICAgY29uc3Qgc3RyID1cclxuICAgICAgICBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWxlZnRcIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiICBpZD1cImNvbXBsZXRlZFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tbWlkXCI+XHJcbiAgICAgICAgICAgIDxoMz4ke3Byb3BzLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgIDxwPiR7cHJvcHMuY29udGVudH08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tcmlnaHRcIj5cclxuICAgICAgICAgICAgPHNwYW4+JHtwcm9wcy5kYXRlfTwvc3Bhbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImVkaXQtYnRuXCIgZGF0YS1lZGl0PVwiJHtwcm9wcy5pZH1cIj7nt6jovK88L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZS1idG5cIiBkYXRhLWRlbGV0ZT1cIiR7cHJvcHMuaWR9XCI+5Yiq6ZmkPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgIGxpc3RJdGVtcy5pbm5lckhUTUwgKz0gc3RyO1xyXG4gICAgdG9kb0xpc3QuaW5zZXJ0QmVmb3JlKGxpc3RJdGVtcywgdG9kb0xpc3QuY2hpbGRyZW5bMF0sKTtcclxuXHJcbiAgICBpZiAodG9kb0xpc3QuY2hpbGRFbGVtZW50Q291bnQgIT0gLTEpIHtcclxuICAgICAgICBiaW5kQnRuSGFuZGxlcihsaXN0SXRlbXMpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJUb2RvTGlzdCgpIHtcclxuICAgIGNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tbGlzdCcpO1xyXG4gICAgLy8g5riF56m654++5pyJ55qEIHRvZG8g5YiX6KGoXHJcbiAgICB0b2RvTGlzdC5pbm5lckhUTUwgPSAnJztcclxuICAgIC8vIOW+niBMb2NhbFN0b3JhZ2Ug5Lit5Y+W5b6X5pyA5paw55qEIHRvZG8g6aCF55uu6LOH5paZXHJcbiAgICBjb25zdCBsb2NhbERhdGEgPSBnZXRMb2NhbERhdGEoKTtcclxuICAgIC8vIOW7uueri+aWsOeahCB0b2RvIOWIl+ihqFxyXG4gICAgbG9jYWxEYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBjcmVhdGVMaXN0SXRlbShpdGVtKTtcclxuXHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYmluZEJ0bkhhbmRsZXIocHJvcHMpIHtcclxuICAgIC8vIGNvbnN0IG5vZGVMaXN0ID0gcHJvcHM7XHJcbiAgICBjb25zdCBkZWxldGVCdG4gPSBwcm9wcy5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlLWJ0bicpO1xyXG4gICAgY29uc3QgZWRpdEJ0biA9IHByb3BzLnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWJ0bicpO1xyXG4gICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGRlbGV0ZUhhbmRsZXIoZSkpO1xyXG4gICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBzaG93RWRpdEZvcm0oZSkpO1xyXG59XHJcblxyXG5leHBvcnQgeyBnZXRMb2NhbERhdGEsIGJpbmRCdG5IYW5kbGVyLCBjcmVhdGVMaXN0SXRlbSwgcmVuZGVyVG9kb0xpc3QgfSIsImltcG9ydCB7IGJpbmRCdG5IYW5kbGVyLCBnZXRMb2NhbERhdGEsIHJlbmRlclRvZG9MaXN0IH0gZnJvbSBcIi4vaGVscGVyL2hlbHBlclwiO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93RWRpdEZvcm0oZSkge1xyXG5cclxuICAgIGNvbnN0IGxvY2FsRGF0YSA9IGdldExvY2FsRGF0YSgpO1xyXG4gICAgY29uc3QgbW9kdWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZHVsZScpO1xyXG5cclxuICAgIGNvbnN0IGVkaXRGb3JtID0gbW9kdWxlLmNsb25lTm9kZSh0cnVlKTtcclxuXHJcbiAgICBlZGl0Rm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuXHJcbiAgICBjb25zdCB0aXRsZVZhbCA9IGVkaXRGb3JtLnF1ZXJ5U2VsZWN0b3IoJy50b2RvLXRpdGxlJyk7XHJcbiAgICBjb25zdCBjb250ZW50VmFsID0gZWRpdEZvcm0ucXVlcnlTZWxlY3RvcignLmZvcm0tY29udGVudCcpO1xyXG4gICAgY29uc3QgZWRpdEJ0biA9IGVkaXRGb3JtLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWJ0bicpO1xyXG4gICAgY29uc3QgY2xvc2VCdG4gPSBlZGl0Rm9ybS5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtZm9ybS1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgIGVkaXRGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgZWRpdEJ0bi5pbm5lckhUTUwgPSAn5pu05pawJ1xyXG4gICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBuZXdUaXRsZSA9IHRpdGxlVmFsLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IG5ld0NvbnRlbnQgPSBjb250ZW50VmFsLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGN1ckRhdGEgPSBsb2NhbERhdGEuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLmlkLnRvU3RyaW5nKCkgPT09IF9pZCA/IGl0ZW0gOiBudWxsKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGxvY2FsRGF0YVtjdXJEYXRhXS50aXRsZSk7XHJcbiAgICAgICAgbG9jYWxEYXRhW2N1ckRhdGFdLnRpdGxlID0gbmV3VGl0bGU7XHJcbiAgICAgICAgbG9jYWxEYXRhW2N1ckRhdGFdLmNvbnRlbnQgPSBuZXdDb250ZW50O1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsaXN0SXRlbXMnLCBKU09OLnN0cmluZ2lmeShsb2NhbERhdGEpKTtcclxuICAgICAgICBlZGl0Rm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICByZW5kZXJUb2RvTGlzdCgpO1xyXG4gICAgfSlcclxuXHJcbiAgICAvLyDmib7liLDlsI3mh4nnmoQgbGlzdEl0ZW1cclxuICAgIGxldCBfaWQgPSBlLnRhcmdldC5kYXRhc2V0LmVkaXRcclxuICAgIC8vIGNvbnNvbGUubG9nKF9pZClcclxuICAgIGxvY2FsRGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0uaWQudG9TdHJpbmcoKSA9PT0gX2lkKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWRpdEZvcm0pO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlZGl0Rm9ybS5jaGlsZE5vZGVzLml0ZW0pO1xyXG4gICAgICAgICAgICB0aXRsZVZhbC52YWx1ZSA9IGl0ZW0udGl0bGU7XHJcbiAgICAgICAgICAgIGNvbnRlbnRWYWwudmFsdWUgPSBpdGVtLmNvbnRlbnQ7XHJcbiAgICAgICAgICAgIC8vIOaJvuWIsOW+jOimgemhr+ekuuihqOWWrizooajllq7nmoTlgLzngrrljp/mnKznmoTos4fmlplcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59IiwiaW1wb3J0IHsgZ2V0TG9jYWxEYXRhLCBiaW5kQnRuSGFuZGxlciwgY3JlYXRlTGlzdEl0ZW0gfSBmcm9tIFwiLi9oZWxwZXIvaGVscGVyXCI7XHJcblxyXG5cclxuY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tdGl0bGUnKTtcclxuY29uc3QgdG9kb0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1jb250ZW50Jyk7XHJcblxyXG5mdW5jdGlvbiBhZGRIYW5kbGVyKGUpIHtcclxuICAgIGNvbnN0IGxvY2FsRGF0YSA9IEFycmF5LmZyb20oZ2V0TG9jYWxEYXRhKCkpO1xyXG4gICAgY29uc3QgZGF0YU9iaiA9IHtcclxuICAgICAgICB0aXRsZTogdG9kb1RpdGxlLnZhbHVlLFxyXG4gICAgICAgIGNvbnRlbnQ6IHRvZG9Db250ZW50LnZhbHVlLFxyXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKCksXHJcbiAgICAgICAgc3RhdHVzOiBmYWxzZSxcclxuICAgICAgICBpZDogbmV3IERhdGUoKS5nZXRUaW1lKClcclxuICAgIH1cclxuICAgIGlmICh0b2RvVGl0bGUudmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgYWxlcnQoJ+aomemhjOeCuuW/heWhqycpXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGlzdEl0ZW1zJywgSlNPTi5zdHJpbmdpZnkoWy4uLmxvY2FsRGF0YSwgZGF0YU9ial0pKTtcclxuXHJcbiAgICBjcmVhdGVMaXN0SXRlbShkYXRhT2JqKTtcclxuICAgIHRvZG9UaXRsZS52YWx1ZSA9ICcnO1xyXG4gICAgdG9kb0NvbnRlbnQudmFsdWUgPSAnJztcclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7IGFkZEhhbmRsZXIgfSIsImltcG9ydCAnLi9zdHlsZS5zYXNzJ1xyXG4vLyBpbXBvcnQgeyBnZXRMb2NhbERhdGEsIGJpbmREZWxldGVCdG4gfSBmcm9tIFwiLi9oZWxwZXIvaGVscGVyXCI7XHJcbi8vIGltcG9ydCBkZWxldGVIYW5kbGVyIGZyb20gXCIuL3RvZG9fZGVsZXRlXCI7XHJcbmltcG9ydCB7IHRvZ2dsZVBvcEZvcm0gfSBmcm9tICcuL2phdmFzY3JpcHQvdG9nZ2xlUG9wJztcclxuaW1wb3J0IHsgYWRkSGFuZGxlciB9IGZyb20gJy4vamF2YXNjcmlwdC9hZGRIYW5kbGVyJztcclxuaW1wb3J0IHsgcmVuZGVyVG9kb0xpc3QgfSBmcm9tICcuL2phdmFzY3JpcHQvaGVscGVyL2hlbHBlcic7XHJcblxyXG5cclxuXHJcblxyXG53aW5kb3cub25sb2FkID0gcmVuZGVyVG9kb0xpc3Q7XHJcblxyXG5jb25zdCB0b2dnbGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtZm9ybS1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gdG9nZ2xlUG9wRm9ybShlKSk7XHJcblxyXG5jb25zdCB0b2RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHRvZ2dsZVBvcEZvcm0oZSkpO1xyXG5cclxuY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tYnRuJyk7XHJcblxyXG4vLyBjb25zdCB0b2RvSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1pbnB1dCcpXHJcbi8vIGNvbnN0IHRvZG9DaGVja0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21wbGV0ZWQnKTtcclxuLy8gY29uc3QgdGVzdERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbS1kYXRlJyk7XHJcbi8vIGNvbnN0IGxpc3RIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1oZWFkZXInKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgYWRkSGFuZGxlcihlKTtcclxufSk7XHJcbmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgYWRkSGFuZGxlcihlKTtcclxuICAgIH1cclxufSk7XHJcbiJdLCJuYW1lcyI6WyJwb3B1cEZvcm0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0b2dnbGVQb3BGb3JtIiwiZSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImxvY2FsRGF0YSIsImdldExvY2FsRGF0YSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjcmVhdGVMaXN0SXRlbSIsInByb3BzIiwidG9kb0xpc3QiLCJsaXN0SXRlbXMiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJkYXRhc2V0IiwiZWRpdCIsImRlbGV0ZSIsInN0ciIsInRpdGxlIiwiY29udGVudCIsImRhdGUiLCJpbm5lckhUTUwiLCJpbnNlcnRCZWZvcmUiLCJjaGlsZHJlbiIsImNoaWxkRWxlbWVudENvdW50IiwiZGVsZXRlQnRuIiwiZWRpdEJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0YXJnZXRFTCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfaWQiLCJ0YXJnZXQiLCJmb3JFYWNoIiwiaXRlbSIsInNldEF0dHJpYnV0ZSIsInJlbW92ZSIsImtleSIsIk51bWJlciIsInNwbGljZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJkZWxldGVIYW5kbGVyIiwiZWRpdEZvcm0iLCJjbG9uZU5vZGUiLCJ0aXRsZVZhbCIsImNvbnRlbnRWYWwiLCJhZGQiLCJwcmV2ZW50RGVmYXVsdCIsIm5ld1RpdGxlIiwidmFsdWUiLCJuZXdDb250ZW50IiwiY3VyRGF0YSIsImZpbmRJbmRleCIsInRvU3RyaW5nIiwicmVuZGVyVG9kb0xpc3QiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzaG93RWRpdEZvcm0iLCJiaW5kQnRuSGFuZGxlciIsInRvZG9UaXRsZSIsInRvZG9Db250ZW50IiwiYWRkSGFuZGxlciIsIkFycmF5IiwiZnJvbSIsImRhdGFPYmoiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwic3RhdHVzIiwiZ2V0VGltZSIsImFsZXJ0Iiwid2luZG93Iiwib25sb2FkIiwiYWRkQnRuIl0sInNvdXJjZVJvb3QiOiIifQ==