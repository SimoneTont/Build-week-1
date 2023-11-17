//Link al sito Epicode quando clicchi il pulsante
const LinkHomeEpicode = function ()
{
    window.open("https://epicode.com/it", '_blank').focus();
}

$(function() {

    star_elements = $('.fa-star').parent(); //Elementi stella
    
    star_elements.find(".fa-star").mouseenter(changeRatingStars); //Quando passi con il mouse attiva la funzione changeRatingStars

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
    // Quando vai su button aggiungi classe Glowing
    button[0].addEventListener("mousemove", (event) => {
        event=button[0].classList.add("Glowing")
    })
    // 
    button[0].addEventListener("mouseleave", (event) => {
        event=button[0].classList.remove("Glowing")
    })
}