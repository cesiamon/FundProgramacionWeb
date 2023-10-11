const empleados = {
    "111": {
        nombre: "Manuel Alejandro Singh",
        pic: "img/employees/employee1.jpeg"
    },
    "222": {
        nombre: "Fatima Salinas",
        pic: "img/employees/employee2.jpeg"
    },
    "333": {
        nombre: "Esperanza Gracia",
        pic: "img/employees/employee3.jpeg"
    },
    "444": {
        nombre: "Maria Rocio Mateu",
        pic: "img/employees/employee4.jpeg"
    }
};

function buscarEmpleado() {
    const cedulaInput = document.getElementById("cedula");
    const cedula = document.getElementById("cedula").value;
    const result = document.getElementById("result");
    const employeeImage = document.getElementById("employeeImage");
    const nombreEmpleado = document.getElementById("nombreEmpleado");
    const girslOffice = document.getElementById("girlsoffice");
    const numeroRegExp = /^\d+$/;


    if (cedula === "") {
        cedulaInput.classList.add("error");
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'CAMPOS VACIOS',
            timer: 1500,
        });
    } else if (!numeroRegExp.test(cedula)) {
        cedulaInput.classList.add("error");
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'La cédula debe contener solo números.',
            timer: 1500,
        });
    
}else if (empleados[cedula]) {
        cedulaInput.classList.remove("error"); 
        Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: 'Empleado encontrado',
            timer: 1300,
        });
        
        girlsoffice.style.display = "none"; 
        result.style.display = "block";
        employeeImage.src = empleados[cedula].pic;
        nombreEmpleado.textContent = `Nombre del empleado: ${empleados[cedula].nombre}`;
        errorMessage.textContent = "";
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Usuario no existe',
            timer: 1500,
        });
        result.style.display = "block";
        employeeImage.src = "";
        nombreEmpleado.textContent = "";
        
    }
}

function limpiar() {
    const cedulaInput = document.getElementById("cedula");
    const girslOffice = document.getElementById("girlsoffice");

    girlsoffice.style.display = "block"; 

    cedulaInput.classList.remove("error"); 
    cedula.value = "";
    employeeImage.src = "";
    nombreEmpleado.textContent = "";
}
