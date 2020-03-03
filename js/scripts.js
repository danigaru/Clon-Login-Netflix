// validar formularios

const inputs = document.querySelectorAll(".campo");

inputs.forEach(input => {
    input.addEventListener("blur", validarInput);
});

inputs.forEach(input => {
    input.addEventListener("input", validarInput);
});



function validarInput(e) {
    const estado = ["valido", "no-valido"];

    let clase;

    if (e.target.value.length === 0) {
        clase = estado[1];
    } else {
        clase = estado[0];
    }

    e.target.classList.remove(...estado);
    e.target.classList.add(clase);
    e.target.nextElementSibling.classList.remove(...estado);
    e.target.nextElementSibling.classList.add(clase);

    // inyectar div
    if (clase === "no-valido") {
        // construir mensaje de error
        if (e.target.parentElement.nextElementSibling.classList[0] !== 'alerta') {
            const errorDiv = document.createElement("div");
            const textoError = document.createTextNode("Este campo es obligatorio");
            errorDiv.appendChild(textoError);
            errorDiv.classList.add("alerta");
            // insertar el error
            e.target.parentElement.parentElement.insertBefore(
                errorDiv,
                e.target.parentElement.nextElementSibling
            );
        }
    } else {
        // limpiar mensaje de error
        if (e.target.parentElement.nextElementSibling.classList[0] === 'alerta') {
            e.target.parentElement.nextElementSibling.remove();
        }
    }
}