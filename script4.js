// alert after press request buttons
function approveVacation() {
    alert("تم قبول طلب الإجازة بنجاح!");
}

function rejectVacation() {
    alert("تم رفض طلب الإجازة.");
}
// ---------------------------------------------------------

// toggle sidebar
const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});