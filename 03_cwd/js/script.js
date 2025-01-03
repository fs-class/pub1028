// 모달 동작
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


// 비디오 버튼 동작
const vidBox = document.querySelector(".vid");
const vid = vidBox.querySelector("video");
const vidBtn = vidBox.querySelector("button i");
let toggleSwitch = 1;

vidBtn.onclick = vidToggle;

function vidToggle() {
  if (toggleSwitch === 1) {
    vidBtn.setAttribute("class", "fa-solid fa-play");
    vid.pause();
    toggleSwitch = 0;
    console.log("비디오가 일시정지 됩니다.");
  } else {
    vidBtn.setAttribute("class", "fa-solid fa-pause");
    vid.play();
    toggleSwitch = 1;
    console.log("비디오가 재생 됩니다.");
  }
}