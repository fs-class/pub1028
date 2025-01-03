const firstListItem = document.querySelector("#tab1 li:first-child");
const modalBox = document.querySelector("#modal");
const modalBtn = modalBox.querySelector("button");

firstListItem.onclick = modalOpened;
modalBtn.onclick = modalClosed;

function modalOpened(){
  modalBox.style.display = "block";
  console.log("모달창이 열렸어요!");
}
function modalClosed(){
  modalBox.style.display = "none";
  console.log("모달창이 닫혔어요!");
}