const btnPopup = document.getElementById("btn-popup");
const popup = document.getElementById("popup");
const closebtn = document.querySelector(".close-btn button");

btnPopup.addEventListener("click", function (event) {
  popup.style.display = "block";
  closebtn.addEventListener("click", closePopup);
  document.addEventListener("keydown", handleKeyDown);
});

function handleKeyDown(event) {
  if (event.key === "Escape") {
    closePopup();
  }
}

function closePopup() {
  popup.style.display = "none";
  closebtn.removeEventListener("click", closePopup);
  document.removeEventListener("keydown", handleKeyDown);
}
