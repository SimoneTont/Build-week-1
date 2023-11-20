//Link al sito Epicode quando clicchi il pulsante
const LinkHomeEpicode = function ()
{
    window.open("https://epicode.com/it", '_blank').focus();
}

$(function() {

    star_elements = $('.fa-star').parent(); //Elementi stella
    
    star_elements.find(".fa-star").click(changeRatingStars); //Quando passi con il mouse attiva la funzione changeRatingStars

    //Colora di azzurro quando ci passi sopra
    function changeRatingStars() {
      // Stella attuale
      var star = $(this);
    
      // Rimuovi le classi del colore
      $('.fa-star').removeClass('gray').removeClass('azure');
    
      // Aggiunge la classe che la rende azzurra
      star.addClass('azure');
    
      // Rende tutte le stelle precedenti azzurre e tutte quelle successive grigie (Tramite classi CSS)
      star.parent().prevAll().children('.fa-star').addClass('azure');
      star.parent().nextAll().children('.fa-star').addClass('gray');
    }
})
//Effetto glow sul bottone quando passi sopra
const  GlowingButton = function()
{
    const button = document.getElementsByTagName('button') //assegna button
    
    for (let i=0;i<button.length;i++) //Ciclo for per applicare a tutti i button
    {
        // Quando vai su button aggiungi classe Glowing
        button[i].addEventListener("mousemove", (event) => {
        event=button[i].classList.add("Glowing")
        })
        // Quando il mouse si sposta da button, rimuovi class Glowing
        button[i].addEventListener("mouseleave", (event) => {
        event=button[i].classList.remove("Glowing")
        })
    }
}

//Manda il feedback

const SendFeedback = function()
{
    //Controlla se è  già presente un paragrafo feedback
    let controllo=document.querySelector("#FeedbackInviato > p")
    //console.log(controllo)
    if(controllo !== null)
    {
        controllo.remove() //Se già presente, rimuovilo (Evita di creare altri paragrafi se clicchi più volte invia feedback)
    } 
    let feedback=document.querySelector('textarea').value//Prende testo da campo input
    let stelleAzzurre=document.querySelectorAll('.azure').length //Misura quante stelle sono azzurre
    //console.log(stelleAzzurre)
    if (feedback==="")
    {
        feedbackMessage="Il tuo rating: "+stelleAzzurre+"/".match(new RegExp("/"))+"10 è stato spedito a EPICODE"
    }
    else
    {
        feedbackMessage="Il tuo feedback: "+feedback+"<br>e il tuo rating: "+stelleAzzurre+"/".match(new RegExp("/"))+"10 <br>sono stati spediti a EPICODE"
    }
    //window.alert(feedbackMessage)
    const para = document.createElement("p");//Crea il paragrafo
    const node = document.createTextNode("Dummy text");//Setta il messaggio scritto sopra come testo del paragrafo
    para.appendChild(node);
    const element = document.getElementById("FeedbackInviato");//Dove scrivere il nuovo paragrafo
    element.appendChild(para);
    para.innerHTML=feedbackMessage
    console.log(para)
}
