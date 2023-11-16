const LinkHomeEpicode = function ()
{
    window.open("https://epicode.com/it", '_blank').focus();
}

$(function() {

    var current_star_statusses = [];

    star_elements = $('.fa-star').parent();
    
    star_elements.find(".fa-star").each(function(i, elem) {
      current_star_statusses.push($(elem).hasClass('azure'));
    });
    
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
