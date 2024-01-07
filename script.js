let questions = document.getElementsByClassName("question");
let plusIcons = document.getElementsByClassName("plus-icon");

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", function () {
    let answer = this.nextElementSibling;
    let currentPlusIcon = plusIcons[i];

    if (answer.classList.contains("active")) {
      answer.classList.remove("active");
      currentPlusIcon.classList.remove("rotate");
    } else {
      answer.classList.add("active")
      currentPlusIcon.classList.add("rotate");
    }
  });
}
