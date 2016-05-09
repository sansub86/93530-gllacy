var link = document.querySelector(".btn-form");
var popup = document.querySelector(".feedback");
var close = document.querySelector(".feedback-close")
link.addEventListener("click", function(event){
  event.preventDefault();
  popup.classList.add("feedback-show");
});
close.addEventListener("click", function(event){
  event.preventDefault();
  popup.classList.remove("feedback-show");
});
