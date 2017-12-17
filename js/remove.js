var paciente = document.querySelectorAll("table");

paciente.forEach(function(paciente) {
    paciente.addEventListener("dblclick", function(event) {
        event.target.parentNode.classList.add("fadeOut");
        setTimeout(function () {
            event.target.parentNode.remove();
        }, 500);
    });
});