const botonIngresar = document.querySelector("#ingresar");

function login() {
    let user_input = document.getElementById("usuario").value;
    let pass_input = document.getElementById("pw").value;
    let username = "cenfo";
    let password = "123";

    let error = false;
    let campos_requeridos = document.querySelectorAll('#inputsLogin[required]');
    
    for (let i = 0; i < campos_requeridos.length; i++) {
        if (campos_requeridos[i].value === "") {
            campos_requeridos[i].classList.add("error");
            return error = true;
        } else {
            campos_requeridos[i].classList.remove("error");
        }
    }

    if (!error) {
        if (user_input === username && pass_input === password) {
            Swal.fire({
                icon: "success",
                title: "Credenciales correctas",
                timer: 5000,
            }).then(() => {
                window.location.href = "landing.html"; // Corrige la sintaxis del redireccionamiento
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Usuario o contraseña incorrecta."
            });
        }
    }
}

botonIngresar.addEventListener("click", login);
