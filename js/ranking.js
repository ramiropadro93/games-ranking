
document.addEventListener('DOMContentLoaded', () => {     
    var flechas = document.querySelectorAll("#comprimir");
    flechas.forEach(flecha => {
        flecha.addEventListener('click', toggleComprimir, false);
        flecha.param = flecha;
    });

    function toggleComprimir(evt) {
        var flecha = evt.currentTarget.param;
        var topComprimir = flecha.getAttribute('id-top');
        var lista = document.getElementById(topComprimir);
        console.log(flecha);
        if (flecha.classList.contains('flecha-arriba')) {
            lista.setAttribute('class', 'top-games-hidden');
            flecha.setAttribute('class', 'flecha-abajo');
        } else {
            lista.removeAttribute('class');
            flecha.setAttribute('class', 'flecha-arriba');
        }
    }
});