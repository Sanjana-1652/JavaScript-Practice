let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");
const userScoreDisplay = document.querySelector("#user");
const compScoreDisplay = document.querySelector("#computer");
const resetButton = document.querySelector("#resetButton");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const indx = Math.floor(Math.random() * 3);
  return options[indx];
};

const winner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScoreDisplay.innerText = userScore;
    message.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    message.style.backgroundColor = "green";
  } else {
    compScore++;
    compScoreDisplay.innerText = compScore;
    message.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
    message.style.backgroundColor = "red";
  }
};

const drawGame = () => {
  message.innerText = "It's a Draw! Play Again!";
  message.style.backgroundColor = "black";
};

const game = (userChoice) => {
  const compChoice = genCompChoice();
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    winner(userWin, userChoice, compChoice);
  }
};

const resetGame = () => {
  compScore = 0;
  userScore = 0;
  compScoreDisplay.innerText = compScore;
  userScoreDisplay.innerText = userScore;
  message.innerText = "Play Your Move";
  message.style.backgroundColor = "black";

}

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    game(userChoice);
  });
});

resetButton.addEventListener("click", resetGame);
