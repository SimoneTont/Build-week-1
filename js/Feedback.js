//Link al sito Epicode quando clicchi il pulsante
const LinkHomeEpicode = function ()
{
    window.open("https://epicode.com/it", '_blank').focus();
}

$(function() {

    var current_star_statusses = []; //Array posiziono stelle

    star_elements = $('.fa-star').parent(); //Elementi stella
    
    star_elements.find(".fa-star").each(function(i, elem) {
      current_star_statusses.push($(elem).hasClass('azure'));
    }); // Salva posizione stelle azzurre
    
    star_elements.find(".fa-star").mouseenter(changeRatingStars);
    star_elements.find(".fa-star").mouseleave(resetRatingStars);

    //Changes the rating star colors when hovering over it.
    function changeRatingStars() {
      // Current star hovered
      var star = $(this);
    
      // Removes all colors first from all stars
      $('.fa-star').removeClass('gray').removeClass('azure');
    
      // Makes the current hovered star azure
      star.addClass('azure');
    
      // Makes the previous stars azure and the next stars gray
      star.parent().prevAll().children('.fa-star').addClass('azure');
      star.parent().nextAll().children('.fa-star').addClass('gray');
    }
    /*Resets the rating star colors when not hovered anymore.*/
    function resetRatingStars() {
      star_elements.each(function(i, elem) {
        $(elem).removeClass('azure').removeClass('gray').addClass(current_star_statusses[i] ? 'azure' : 'gray');
      });
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