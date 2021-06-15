var label = document.querySelectorAll(".label");
var input = document.querySelectorAll(".input");

for (let index = 0; index < label.length; index++) {
  input[index].addEventListener("focus", function () {
    label[index].classList.add("labelFocus");
  });

  input[index].addEventListener("blur", function () {
    label[index].classList.remove("labelFocus");
  });
}
