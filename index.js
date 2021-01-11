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
          msg.innerHTML = `<h4>Congrats.You have won!!!</h4>Correct guess was ${randomNumber}`;
          msg.style.color = "green";
        } else {
          msg.innerHTML = `<h4>Try again.You have lost...</h4></h6>Correct guess was ${randomNumber}`;
          msg.style.color = "red";
        }
      }
    });
  });
});

start.addEventListener("click", () => {
  location.reload();
});
