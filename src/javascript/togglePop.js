const popupForm = document.querySelector('.module');



function togglePopForm(e) {
    // e.preventDefault();
    popupForm.classList.toggle('hidden');
}

export { togglePopForm }