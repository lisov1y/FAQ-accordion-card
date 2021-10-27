let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let answer = this.lastElementChild;
    let question = this.firstElementChild;
    let arrow = this.children[1];
    if (answer.style.display === "block") {
      answer.style.display = "none";
      question.style.fontWeight = 400;
      arrow.style.transform = "rotate(0deg)";
    } else {
      answer.style.display = "block";
      question.style.fontWeight = 700;
      arrow.style.transform = "rotate(180deg)";
    }
  });
}
