let risposte = document.getElementById("risposte");
let timerElement = document.getElementById("timer");
var savedUserChoice = localStorage.getItem("userChoice");
var savedUserChoiceText = localStorage.getItem("userChoiceText");
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
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "In the programming language &quot;Python&quot;, which of these statements would display the string &quot;Hello World&quot; correctly?",
    correct_answer: "print(&quot;Hello World&quot;)",
    incorrect_answers: [
      "console.log(&quot;Hello World&quot;)",
      "echo &quot;Hello World&quot;",
      "printf(&quot;Hello World&quot;)",
    ],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "On which computer hardware device is the BIOS chip located?",
    correct_answer: "Motherboard",
    incorrect_answers: [
      "Hard Disk Drive",
      "Central Processing Unit",
      "Graphics Processing Unit",
    ],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "A Boolean value of &quot;0&quot; represents which of these words?",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "When did the online streaming service &quot;Mixer&quot; launch?",
    correct_answer: "2016",
    incorrect_answers: ["2013", "2009", "2011"],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Science: Computers",
    question: "MacOS is based on Linux.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "What is the correct term for the metal object in between the CPU and the CPU fan within a computer system?",
    correct_answer: "Heat Sink",
    incorrect_answers: ["CPU Vent", "Temperature Decipator", "Heat Vent"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "In computing terms, typically what does CLI stand for?",
    correct_answer: "Command Line Interface",
    incorrect_answers: [
      "Common Language Input",
      "Control Line Interface",
      "Common Language Interface",
    ],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Science: Computers",
    question: "The open source program Redis is a relational database server.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "How many bytes are in a single Kibibyte?",
    correct_answer: "1024",
    incorrect_answers: ["2400", "1000", "1240"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "Moore&#039;s law originally stated that the number of transistors on a microprocessor chip would double every...",
    correct_answer: "Year",
    incorrect_answers: ["Four Years", "Two Years", "Eight Years"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "What major programming language does Unreal Engine 4 use?",
    correct_answer: "C++",
    incorrect_answers: ["Assembly", "C#", "ECMAScript"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "Who is the founder of Palantir?",
    correct_answer: "Peter Thiel",
    incorrect_answers: ["Mark Zuckerberg", "Marc Benioff", "Jack Dorsey"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "Which data structure does FILO apply to?",
    correct_answer: "Stack",
    incorrect_answers: ["Queue", "Heap", "Tree"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "Which of these Cherry MX mechanical keyboard switches is both tactile and clicky?",
    correct_answer: "Cherry MX Blue",
    incorrect_answers: ["Cherry MX Black", "Cherry MX Red", "Cherry MX Brown"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "Which of these names was an actual codename for a cancelled Microsoft project?",
    correct_answer: "Neptune",
    incorrect_answers: ["Enceladus", "Pollux", "Saturn"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "What type of sound chip does the Super Nintendo Entertainment System (SNES) have?",
    correct_answer: "ADPCM Sampler",
    incorrect_answers: [
      "FM Synthesizer",
      "Programmable Sound Generator (PSG)",
      "PCM Sampler",
    ],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "Which of the following computer components can be built using only NAND gates?",
    correct_answer: "ALU",
    incorrect_answers: ["CPU", "RAM", "Register"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "What was the name of the first Bulgarian personal computer?",
    correct_answer: "IMKO-1",
    incorrect_answers: ["Pravetz 82", "Pravetz 8D", "IZOT 1030"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "Released in 2001, the first edition of Apple&#039;s Mac OS X operating system (version 10.0) was given what animal code name?",
    correct_answer: "Cheetah",
    incorrect_answers: ["Puma", "Tiger", "Leopard"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "What is the name of the process that sends one qubit of information using two bits of classical information?",
    correct_answer: "Quantum Teleportation",
    incorrect_answers: [
      "Super Dense Coding",
      "Quantum Entanglement",
      "Quantum Programming",
    ],
  },
];

//funzione che parte al caricamento della pagina
window.onload = function () {
  loadQ(questionCounter);

  //click event listener per le risposte
  risposte.addEventListener("click", (event) => {
    // \/ viene dichiarato qua perche dopo verra eliminato e reinserito, se fosse stato dichiarato
    // \/ globalmente non sarebbe riuscito a selezionare gli svg generati dopo la prima domanda
    let timerContainer = document.querySelector("svg");
    // \/ duplica, rimpiazza e ri-seleziona il timer al click
    let duplicate = timerContainer.cloneNode(true);
    timerContainer.parentNode.replaceChild(duplicate, timerContainer);
    timerElement = document.getElementById("timer");
    //

    nextQuestion(event, questionCounter);
    correctACheck(event, questionCounter);

    // \/ viene dichiarato qua per la stessa ragione di timerContainer
  });
};

Contatore(questionCounter);

//controlla se una risposta è corretta
function correctACheck(event, qc) {
  const isCorrect = event.target.innerText; // Modifica per ottenere il testo del bottone
  const difficulty = savedUserChoiceText.toLowerCase(); // Modalità di difficoltà selezionata

  //Filtra l'array questions per trovare le domande con la difficoltà selezionata dall'utente in Welcome
  const currentQuestion = questions.filter(
    (q) => q.difficulty === difficulty //verifica se la difficoltà della domanda q è uguale al valore della variabile difficulty
  )[qc - 1]; //sottraendo 1 selezioni l'elemento corrispondente nella posizione desiderata. Ricordiamoci che l'indice parte da 0.

  if (
    isCorrect === currentQuestion.correct_answer &&
    correctCounter < savedUserChoice
  ) {
    correctCounter++;
    event.target.style.backgroundColor = "green";
    console.log(correctCounter);
  } else {
    event.target.style.backgroundColor = "red";
  }
}

//inserice domanda per domanda all'interno del suo div e chiama la
//funzione per generare le risposte ogni volta che viene chiamato
function loadQ(qc) {
  // Filtra le domande in base alla difficoltà selezionata dall'utente
  const filteredQuestions = questions.filter(
    (question) =>
      question.difficulty.toLowerCase() === savedUserChoiceText.toLowerCase()
  );

  // Se ci sono domande disponibili con la difficoltà selezionata, carica la domanda
  if (filteredQuestions.length > 0 && qc < filteredQuestions.length) {
    let singleQuestion = filteredQuestions[qc].question;
    document.querySelector("#domanda").innerHTML = `<p>${singleQuestion}</p>`;
    genButton(qc, filteredQuestions);
  } else {
    // Se non ci sono più domande disponibili, reindirizza all pagina dei risultati
    window.location.href = "../html/results.html";
  }
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

// document.addEventListener("DOMContentLoaded", function() {
// var selectElement = document.getElementById("userChoice");

console.log(savedUserChoiceText); //per controllare

// if (savedUserChoice) {
//   selectElement.value = savedUserChoice;
// }
console.log(savedUserChoice); //per controllare
// console.log(selectElement);
// });

//funzione per passare alla domanda succesiva al click
function nextQuestion(event, qc) {
  // assegna il "tipo"(nome del nodo) dell'elemento cliccato
  const isButton = event.target.nodeName;
  console.log(isButton);
  //controlla se viene effetivamente cliccato un label, dato che
  //l'eventListener è su tutta la div
  if (isButton === "BUTTON") {
    console.log(isButton);
    qc++;
    questionCounter++;

    console.log(qc);
    // risposte.innerHTML = "";
    let clickInterval = setInterval(() => {
      if (qc === Number(savedUserChoice)) {
        window.location.href = "../html/results.html";
      }
      loadQ(qc);
      Contatore(questionCounter);

      timerElement.textContent = 10;

      clearInterval(clickInterval);
      countdownInterval = setInterval(function () {
        updateCountdown(questionCounter);
      }, 1000);
      clearInterval(countdownInterval);
    }, 1000);
  }
}
//genere un tutti i bottoni e inserice le risposte in dei
//bottoni scelti casualmente

function genButton(qc, filteredQuestions) {
  let answersNum = filteredQuestions[qc].incorrect_answers.length + 1;

  let buttonsContainer = document.getElementById("risposte"); // Calcola il numero totale di risposte
  buttonsContainer.innerHTML = ""; // Pulisce i pulsanti precedenti, altrimenti li aggiunge a quelli precedenti

  let answers = [...filteredQuestions[qc].incorrect_answers]; // Crea un array contenente tutte le risposte, inclusa quella corretta
  answers.push(filteredQuestions[qc].correct_answer);

  answers = answers.sort(() => Math.random() - 0.5); // Mischia le risposte in modo casuale

  for (let i = 0; i < answersNum; i++) {
    // Itera attraverso tutte le risposte e crea un bottone per ciascuna
    let buttonCreate = document.createElement("button");
    buttonCreate.innerText = answers[i];
    buttonsContainer.appendChild(buttonCreate);
  }
}

//TIMER

function updateCountdown(qc) {
  let seconds = /*10000000;*/ Number(timerElement.textContent);
  // \/ salva correctCounter nello storage locale del browser
  // \/ per accederci da un altro .js
  localStorage.setItem("result", correctCounter);

  //console.log(localStorage.getItem("result"));
  //console.log(seconds);
  if (seconds > 1) {
    seconds--;
    timerElement.textContent = seconds;
  } else if (qc === Number(savedUserChoice) - 1) {
    //se il contatore di domande arriva al limite apri result
    window.location.href = "../html/results.html";
  }
  // else if(qc === savedUserChoice){
  //   window.location.href = "../html/results.html";
  // }
  else {
    //se secondi arriva al limite incrementa il contatore delle domande
    //e resetta i vari elementi che vanno ricaricati
    risposte.innerHTML = "";
    timerElement.textContent = 10;
    qc++;
    questionCounter++;
    //console.log("qc=" + qc);
    loadQ(qc);
    Contatore(questionCounter);
    //console.log(seconds);
  }
}

function primaDomanda() {
  //definisce il counter della prima domanda in modo che non sia indefinito
  const pCounter = document.getElementById("Counter");
  pCounter.innerHTML =
    "QUESTION " +
    (questionCounter + 1) +
    "<span>" +
    " / " +
    savedUserChoice +
    "</span>";
}
primaDomanda();

// Aggiorna il countdown ogni secondo
let countdownInterval = setInterval(function () {
  updateCountdown(questionCounter);
}, 1000);
//Contatore domande del benchmark
function Contatore(questionCounter) {
  const pCounter = document.getElementById("Counter"); //paragrafo del counter
  pCounter.innerHTML =
    "QUESTION " +
    (questionCounter + 1) +
    "<span>" +
    " / " +
    savedUserChoice +
    "</span>"; //nuovo paragrafo con span
}
