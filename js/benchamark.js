let risposte = document.getElementById("risposte");
let timerElement = document.getElementById("timer");
let questionCounter = 0;
let time = 60;
let correctCounter = 0;
const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];
window.onload = function () {
  loadQ(questionCounter);
  risposte.addEventListener("click", (event) => {
    let timerContainer = document.querySelector("svg");
    let duplicate = timerContainer.cloneNode(true);
    timerContainer.parentNode.replaceChild(duplicate, timerContainer);
    timerElement = document.getElementById("timer");
    nextQuestion(event, questionCounter);
    correctACheck(event, questionCounter);
    updateCountdown(questionCounter);
    timerElement.textContent = 10;
  });
};
//controlla se una risposta è corretta
function correctACheck(event, qc) {
  const isCorrect = event.target.innerHTML;
  console.log(qc);
  console.log(isCorrect);
  if (isCorrect === questions[qc - 1].correct_answer) {
    correctCounter++;
    console.log(correctCounter);
  }
}

//inserice domanda per domanda all'interno del suo div ogni volta che viene chiamato
function loadQ(qc) {
  let singleQuestion = questions[qc].question;
  document.querySelector("#domanda").innerHTML = `<p>${singleQuestion}</p>`;
  genButton(qc);
}

// function timer(qc) {
//   if (time > 0) {
//     timerDiv.innerText = time;
//     time--;
//     countDown = setTimeout(function () {
//       timer(qc);
//     }, 1000);
//   } else if (qc === 9) {
//     window.location.href = "../html/results.html";
//   } else {
//     qc++;
//     risposte.innerHTML = "";
//     loadQ(qc);
//     time = 60;
//     countDown = setTimeout(function () {
//       timer(qc);
//     }, 1000);
//   }
// }
//funzione per passare alla domanda succesiva al click
function nextQuestion(event, qc) {
  const isButton = event.target.nodeName;
  console.log(isButton);
  if (isButton === "LABLE") {
    console.log(isButton);
    //controlla se viene effetivamente cliccato un bottone, dato che
    //l'eventListener è su tutta la div
    qc++;
    questionCounter++;
    if (qc === 10) {
      window.location.href = "../html/results.html";
    } else {
      console.log(qc);
      risposte.innerHTML = "";
      loadQ(qc);
    }
  }
}
//genere un tutti i bottoni e inserice le risposte in dei
//bottoni scelti casualmente
function genButton(qc) {
  let usedButton = [];
  let answersNum = questions[qc].incorrect_answers.length + 1; //il numero di bottoni da creare = risposteSbagliate+1(rispostaCorretta)

  for (i = 0; i < answersNum; i++) {
    //ciclo per creare tanti bottoni quante risposte
    let inputCreate = document.createElement("input");
    let lableCreate = document.createElement("lable");
    inputCreate.id = `questionInput${i}`;
    risposte.appendChild(lableCreate);
    lableCreate.appendChild(inputCreate);
  }
  let input = document.querySelectorAll("input");
  let lable = document.querySelectorAll("lable");
  for (i = 0; i < answersNum; i++) {
    input[i].type = "radio";
    //crea un numero random che rapressenta il lable dove
    //viene inserita una risposta
    let rand = Math.floor(Math.random() * answersNum);
    // console.log(usedButton);
    if (!usedButton.includes(rand)) {
      usedButton.push(rand);
      lable[rand].innerText = questions[qc].incorrect_answers[i];
    } else {
      i--;
    }
  }
  for (i = 0; i < answersNum; i++) {
    // console.log(i);
    if (lable[i].innerText === "undefined") {
      lable[i].innerText = questions[qc].correct_answer;
      break;
    }
  }
  // console.log(button);
}
//TIMER

function updateCountdown(qc) {
  let seconds = parseInt(timerElement.textContent);
  localStorage.setItem("result", correctCounter);
  console.log(localStorage.getItem("result"));
  console.log(seconds);
  if (seconds > 0) {
    seconds--;
    timerElement.textContent = seconds;
  } else if (qc === 9) {
    window.location.href = "../html/results.html";
  } else {
    risposte.innerHTML = "";
    timerElement.textContent = 10;
    qc++;
    questionCounter++;
    // console.log("qc=" + qc);
    loadQ(qc);
    // console.log(seconds);
  }
}

// Aggiorna il countdown ogni secondo
let countdownInterval = setInterval(function () {
  updateCountdown(questionCounter);
}, 1000);
