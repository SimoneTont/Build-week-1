// Bottone che al click porta alla feedback page
let btn = document.querySelector("button");
btn.addEventListener("click", feedbackPage);

function feedbackPage() {
  window.location.href = "../html/FeedbackPage.html";
}

// Il valore "result" del localstorage viene assegnato alla variabile "correct"
let correct = localStorage.getItem("result");
let sbagliati = 10 - correct;

console.log(correct);

// Definisce valori sull'asse x e y
var xValues = ["Wrong", "Correct"];
var yValues = [sbagliati, correct];

// Definisce i colori delle barre nel grafico a ciambella
var barColors = ["#D20094", "#00FFFF"];

// Creazione grafico a ciambella con la libreria charts.js
new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
        borderColor: "none",
        borderWidth: 0,
      },
    ],
  },
  options: {
    // plugins: {
    //   doughnutLabel:{
    //     draw: function() {
    //       Chart.types.Doughnut.prototype.draw.apply(this, arguments);

    //       var width = this.chart.width,
    //           height = this.chart.height;

    //       var fontSize = (height / 114).toFixed(2);
    //       this.chart.ctx.font = fontSize + "em Verdana";
    //       this.chart.ctx.textBaseline = "middle";

    //       var text = function testoCOS(){
    //         if(correct > sbagliati){
    //           return ""
    //         } else {

    //         }
    //       },
    //           textX = Math.round((width - this.chart.ctx.measureText(text).width) / 2),
    //           textY = height / 2;

    //       this.chart.ctx.fillText(text, textX, textY);
    //   }
    //   }
    // },
    title: {
      display: false,
      text: "Donut Chart Results",
    },
    cutoutPercentage: 70,
    legend: {
      display: false,
    },
  },
});

// Seleziona l'elemento HTML con id "Corretto" e il paragrafo al suo interno
let risultatoCorretto = document.querySelector("#Corretto p");
// Aggiorna il testo dell'elemento HTML con la percentuale di risposte corrette
function testoCorretti() {
  risultatoCorretto.innerText = `${(correct / 10) * 100}%`;
}
// Chiama la funzione per aggiornare il testo
testoCorretti();

// Seleziona l'elemento HTML con id "Sbagliato" e il paragrafo al suo interno
let risultatoSbagliato = document.querySelector("#Sbagliato p");
// Aggiorna il testo dell'elemento HTML con la percentuale di risposte sbagliate
function testoSbagliato() {
  risultatoSbagliato.innerText = `${(sbagliati / 10) * 100}%`;
}

// Chiama la funzione per aggiornare il testo
testoSbagliato();

let fraseCorretto = document.querySelector("#Corretto .TestoPiccolo");

function risultatoConSlashCorretto() {
  fraseCorretto.innerText = correct + "/10 questions";
}

risultatoConSlashCorretto();

let fraseNonCorretto = document.querySelector("#Sbagliato .TestoPiccolo");

function risultatoConSlashNonCorretto() {
  fraseNonCorretto.innerText = sbagliati + "/10 questions";
}

risultatoConSlashNonCorretto();

let testoCentro = document.querySelector("#centerText");

// Utilizzo di if/else per la stampa finale del risultato a seconda della percentuale di risposte errate e corrette
function testoAlCentro() {
  if (correct > sbagliati) {
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");

    p1.innerText = "Congratulations!";
    p2.innerText = "You passed the exam";
    p3.innerText =
      "We'll send you the certificate in a few minutes. Check your email (including promotions / spam folder)";

    testoCentro.appendChild(p1);
    testoCentro.appendChild(p2);
    testoCentro.appendChild(p3);
  } else {
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");

    p1.innerText = "Better luck next time!";
    p2.innerText = "You failed the exam";
    p3.innerText =
      "Check-in with your teaching assistant for more informations on how to proceed from here.";

    testoCentro.appendChild(p1);
    testoCentro.appendChild(p2);
    testoCentro.appendChild(p3);
  }
}

testoAlCentro();
