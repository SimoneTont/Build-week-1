const checkbox = document.getElementById('casellina');
const button = document.getElementById('bottone');

button.disabled = true

 checkbox.addEventListener('change', function() {

      if (checkbox.checked) {

        button.disabled = false;
      } else {
        
        button.disabled = true;
      }
    });