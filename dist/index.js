//variables
let msg = document.querySelector("#message");
console.log(msg);
let randomNumber = Math.ceil(Math.random() * 6);
console.log(randomNumber);
let count = 0;
let allGuessedNumber = [];
let buttons = document.querySelectorAll(".btn-info");
let results = document.querySelector(".btn-danger");
let start = document.querySelector(".btn-dark");
buttons.forEach((button, index) => {
  button.addEventListener("click", (e) => {
    let guessedNumber = Number(e.target.innerHTML);

    allGuessedNumber.push(guessedNumber);
    console.log(allGuessedNumber);
    count++;
    if (count < 3) {
      button.style.backgroundColor = "white";
    }
    console.log(count);
    results.addEventListener("click", () => {
      if (count == 2) {
        if (allGuessedNumber.includes(randomNumber)) {
          msg.innerHTML = "Congrats.You have won!!!.";
          msg.style.color = "green";
        } else {
          msg.innerHTML = "Try again.You have lost.";
          msg.style.color = "red";
        }
      }
    });
  });
});

start.addEventListener("click", () => {
  location.reload();
});
