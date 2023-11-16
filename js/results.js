//Link pulsante Rate Us a recensioni
const LinkEpicode = function () {
    window.location.href="../html/FeedbackPage.html";
  };
  
  //CHART
  
  var xValues = ["Wrong","Correct"];
  var yValues = [sbagliati, correct];
  let correct = localStorage.getItem("result");
  let sbagliati = 10 - correct;
  var barColors = [ "#D20094","#00FFFF"];
  
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
  
  
  let risultatoCorretto = document.querySelector('#Corretto p')
   function testoCorretti() {
    risultatoCorretto.innerText= correct;
   };
  
   testoCorretti();
  
   let risultatoSbagliato = document.querySelector('#Sbagliato p')
   function testoSbagliato() {
    risultatoSbagliato.innerText= sbagliati;
   };
  
   testoSbagliato();
  
   let fraseCorretto = document.querySelector('#Corretto .TestoPiccolo')
  
   function risultatoConSlashCorretto() {
    fraseCorretto.innerText = correct + "/10 questions";
   }
  
   risultatoConSlashCorretto();
  
   let fraseNonCorretto = document.querySelector('#Sbagliato .TestoPiccolo')
  
   function risultatoConSlashNonCorretto() {
    fraseCorretto.innerText = sbagliati + "/10 questions";
   }
  
  risultatoConSlashNonCorretto();
  
  let testoAlCentro = document.querySelector('#centerText')
  
  function testoAlCentro(){
    if(correct > sbagliati){
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');
      let p3 = document.createElement('p');
  
      p1.innerText= "Congratulations!";
      p2.innerText= "You passed the exam";
      p3.innerText="We'll send you the certificate in a few minutes. Check your email (including promotions / spam folder)";
  
      testoAlCentro.appendChild(p1);
      testoAlCentro.appendChild(p2);
      testoAlCentro.appendChild(p3);
    } else {
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');
      let p3 = document.createElement('p');
  
      p1.innerText= "Better luck next time!";
      p2.innerText= "You failed the exam";
      p3.innerText= "Check-in with your teaching assistant for more informations on how to proceed from here.";
  
      testoAlCentro.appendChild(p1);
      testoAlCentro.appendChild(p2);
      testoAlCentro.appendChild(p3);
    }
  }
  
  testoAlCentro();
  