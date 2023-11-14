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
  let questionCounter = 0;
  loadQ(questionCounter);
  nextQuestion(questionCounter);
};

function loadQ(qc) {
  //   console.log(questions[qc].question);
  let singleQuestion = questions[qc].question;
  //   console.log(qc);
  document.querySelector("p").innerHTML = `<p>${singleQuestion}</p>`;
  genButton(qc);
}

//funzione per passare alla domanda succesiva al click
let buttonDiv = document.getElementById("risposte");
function nextQuestion(qc) {
  buttonDiv.addEventListener("click", (event) => {
    const isButton = event.target.nodeName;
    if (isButton === "BUTTON") {
      qc++;
      //   console.log(qc);
      //   console.dir(event.target.nodeName);
      buttonDiv.innerHTML = "";
      loadQ(qc);
    }
  });
}
function genButton(qc) {
  let usedButton = [];
  let answersNum = questions[qc].incorrect_answers.length + 1;
  for (i = 0; i < answersNum; i++) {
    let buttonCreate = document.createElement("button");
    buttonDiv.appendChild(buttonCreate);
  }
  let button = document.getElementsByTagName("button");
  for (i = 0; i < answersNum; i++) {
    let rand = Math.floor(Math.random() * answersNum);
    // console.log(usedButton);
    if (!usedButton.includes(rand)) {
      usedButton.push(rand);
      button[rand].innerText = questions[qc].incorrect_answers[i];
    } else {
      i--;
    }
  }
  for (i = 0; i < answersNum; i++) {
    console.log(i);
    if (button[i].innerText === "undefined") {
      button[i].innerText = questions[qc].correct_answer;
    }
  }
  console.log(button);
}
