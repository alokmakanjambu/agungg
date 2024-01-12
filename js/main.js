window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
//assignment modal
const assignmentModals = document.querySelectorAll(".assignment-model");
const imgCards = document.querySelectorAll(".img-card");
const assignmentCloseBtns = document.querySelectorAll(".assignment-close-btn");

var assignmentModal = function (modalClick) {
  assignmentModals[modalClick].classList.add("active");
};

imgCards.forEach((imgCards, i) => {
  imgCards.addEventListener("click", () => {
    assignmentModal(i);
  });
});

assignmentCloseBtns.forEach((assignmentCloseBtns) => {
  assignmentCloseBtns.addEventListener("click", () => {
    assignmentModals.forEach((assignmentModalView) => {
      assignmentModalView.classList.remove("active");
    });
  });
});
