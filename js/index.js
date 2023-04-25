const rules = document.getElementsByClassName("rules");

for (i = 0; i < rules.length; i++) {
  rules[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
