var link = document.querySelector(".btn-form");
var popup = document.querySelector(".feedback");
var overlay = document.querySelector(".modal-overlay")
var close = document.querySelector(".feedback-close");
var feedbackForm = document.querySelector(".feedback-form");
var name = document.querySelector("[name=feedback-name]");
var mail = document.querySelector("[name=feedback-email]");
//var storage = localStorage.getItem("name");
link.addEventListener("click", function(event){
  event.preventDefault();
  overlay.classList.add("overlay");
  popup.classList.add("feedback-show");
  if (storage) {
          name.value = storage;
          mail.focus();
        } else {
          name.focus();
        }
});
close.addEventListener("click", function(event){
  event.preventDefault();
  popup.classList.remove("feedback-show");
  popup.classList.remove("feedback-error");
  overlay.classList.remove("overlay");
});
feedbackForm.addEventListener("submit", function(event) {
  if (!name.value || !mail.value) {
        event.preventDefault();
        console.log("Нужно ввести имя и электронный адрес");
        popup.classList.remove("feedback-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("feedback-error");

      } else {
          localStorage.setItem("name", name.value);
      }
});
window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (popup.classList.contains("feedback-show")) {
            popup.classList.remove("feedback-show");
            popup.classList.remove("feedback-error");
            overlay.classList.remove("overlay");
          }
        }
});
/*скрипт для текстовых полей ввода*/
var textfield = document.querySelectorAll(".textfield");
for (var i = 0; i < textfield.length; i++) {
textfield[i].addEventListener("focusout", function(event) {
var elem = this;
var placeholder = this.nextElementSibling;
var label = placeholder.firstElementChild;
if(elem.value.length == 0) {
label.classList.remove("lostfocus");
} else {
label.classList.add("lostfocus");
}
}, false);
}
