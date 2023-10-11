
const botonIngresar = document.querySelector("#ingresar");


function validation_alert(ptext) {
    swal.fire({
        /* icon: "error",*/
        title: "Verificar la entrada de datos",
        text: ptext,
        confirmButtonText: "Intentar de nuevo",
        confirmButtonColor: "#008383",
        html: '<iframe src="https://lottie.host/?file=39f272c7-e7c0-47be-ad30-3f0a2e86b9cd/bXUbdoAvfP.json"></iframe> <br><p>' + ptext + " </p>",
    });
}

function login() {
    let user_input = document.getElementById("usuario");
    let pass_input = document.getElementById("pw");
    let username = "cenfo";
    let password = "123";

    let error = false;

    if (user_input.value === ""){
        user_input.classList.add("error");
        error = true;
        
        if(error == false){
            user_input.classList.remove("error");
        }

        if (pass_input.value === "") {
            pass_input.classList.add("error");
            error = true; 

            if(error == false){
               pass_input.classList.remove("error");
            }
        

    }else{ 
        error = false
    }

    }



    if (!error) {
        if (user_input === username && pass_input === password) {
            Swal.fire({
                title: "Credenciales correctas",
                showConfirmButton: false,
                timer: 5000,
                html: '<iframe src="https://lottie.host/?file=cda0d60c-0580-47dd-8e7b-2af90ccbe152/kR6xj6ooFC.json"></iframe> <br><br><p>Un momento!</p>',

            }).then(() => {
                window.location.href = "https://ucenfotec.ac.cr/"; 
            });
        } else {
            text = "Usuario o contraseña incorrecta.";
            validation_alert(text); 
        }
    }
}

botonIngresar.addEventListener("click", login);
