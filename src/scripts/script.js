/* ------------------------------- Coloque sua lógica aqui ------------------------------- */
const modal = document.getElementById("modal");
const modalOpenButtons = document.querySelectorAll(".modal__button-open");

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

modalOpenButtons.forEach((button) => {
  button.addEventListener("click", openModal);
});

const modalCloseButton = document.getElementById("close");

modalCloseButton.addEventListener("click", closeModal);