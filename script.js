document.addEventListener("DOMContentLoaded", function() {

});
document.addEventListener("DOMContentLoaded", function() {
    var reservationForm = document.getElementById("reservation-form");

    reservationForm.addEventListener("submit", function(event) {
        event.preventDefault(); 

      
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var date = document.getElementById("date").value;
        var time = document.getElementById("time").value;
        var guests = document.getElementById("guests").value;

        if (name === "" || email === "" || phone === "" || date === "" || time === "" || guests === "") {
            alert("Por favor, preencha todos os campos obrigatórios.");
        } else {
            
            alert("Reserva enviada com sucesso!");
            reservationForm.reset(); 
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    
    function isElementInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

  
    function addAnimationClass() {
        var elements = document.querySelectorAll('.fade-in');
        elements.forEach(function(element) {
            if (isElementInViewport(element)) {
                element.classList.add('fade-in-active');
            }
        });
    }

    
    window.addEventListener('scroll', addAnimationClass);
});

function mostrarSecao(secao) {
    var secoes = ['menu-secao', 'reservas-secao', 'contato-secao'];
    for (var i = 0; i < secoes.length; i++) {
        var elemento = document.getElementById(secoes[i]);
        if (secoes[i] === secao + '-secao') {
            elemento.style.display = 'block';
        } else {
            elemento.style.display = 'none';
        }
    }
}







