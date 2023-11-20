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
    let feedback=document.querySelector('textarea').value
    let stelleAzzurre=document.querySelectorAll('.azure').length
    //console.log(stelleAzzurre)
    feedbackMessage="Il tuo feedback: "+feedback+"\n E il tuo rating: "+stelleAzzurre+"/".match(new RegExp("/"))+"10"+"\n Sono stati spediti a EPICODE"
    window.alert(feedbackMessage)
}
