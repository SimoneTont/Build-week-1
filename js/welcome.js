
// seleziona l'elemento input  della pagina  e lo assegna alla variabile checkbox.
const checkbox = document.querySelector('input');
// seleziona l'elemento con ID 'bottone' e lo assegna alla variabile button, che è un elemento pulsante 
const button = document.getElementById('bottone');
//questa riga inizialmente disabilita il pulsante al caricamento della pagina.
button.disabled = true



 checkbox.addEventListener('change', function() {

      if (checkbox.checked) { // controlla se la casella  è selezonata

        button.disabled = false;//se la casella è selezionata abilita il pulsante
      } else {
        
        button.disabled = true;// se non è selezionata disabilita il pulsante 
      }
    });

    // la funzionalità è che quando la casella di controllo è selezionata, 
    //il pulsante viene abilitato e quando è deselezionata, il pulsante diventa disabilitato.