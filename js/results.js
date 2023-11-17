//Link pulsante Rate Us a recensioni
let btn = document.querySelector("button");
btn.addEventListener("click", feedbackPage);

function feedbackPage() {
  window.location.href = "../html/FeedbackPage.html";
}

//CHART

let correct = localStorage.getItem("result");
let sbagliati = 10 - correct;

console.log(correct);

var xValues = ["Wrong", "Correct"];
var yValues = [sbagliati, correct];
var barColors = ["#D20094", "#00FFFF"];

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

let risultatoCorretto = document.querySelector("#Corretto p");
function testoCorretti() {
  risultatoCorretto.innerText = `${(correct / 10) * 100}%`;
}

testoCorretti();

let risultatoSbagliato = document.querySelector("#Sbagliato p");
function testoSbagliato() {
  risultatoSbagliato.innerText = `${(sbagliati / 10) * 100}%`;
}

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
