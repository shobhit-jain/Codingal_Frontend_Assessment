// Get the modal
var modal = document.querySelector(".modal");

// Get the button that opens the modal
const open_modal_btn = document.getElementById("open_modal_btn");

// Get modal end class button
const modal_btn_end_class = document.querySelector(".modal_btn_end_class");

// Get the <span> & cancel element that closes the modal
const modal_close_icon = document.querySelector(".modal_close_icon");
const modal_btn_cancel = document.querySelector(".modal_btn_cancel");

// When the user clicks the button, open the modal
open_modal_btn.onclick = () => {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
modal_close_icon.onclick = () => closeModal();
modal_btn_cancel.onclick = () => closeModal();

// close the modal
const closeModal = () => {
    modal.style.display = "none";
};
