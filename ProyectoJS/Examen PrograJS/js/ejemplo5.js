
document.addEventListener("DOMContentLoaded", function() {

    // --------------TABLE--------------
    var horas = ["8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "1:00", "1:30", "2:00", "2:30", "3:00", "3:30", "4:00", "4:30", "5:00"];

    // variables globlares

    var tableBody = document.getElementById("calendario-body");


    // var diaDelaSemana = document.getElementsByClassName("day");


    // funcion para agregar columna de horas con id unico y un id unico a las demas celdas
    horas.forEach(function(hora, index) {
        var row = document.createElement("tr");
        
        // Crear la celda de hora
        var horaCell = document.createElement("td");
        horaCell.textContent = hora;
        
        // Asignar un id único a cada celda de hora usando el índice
        horaCell.id = "horascell_" + index;
        // horaCell.classList.add("horas") 
        
        row.appendChild(horaCell);
    
        // Crear las celdas adicionales
        for (var i = 0; i < 7; i++) {
            var cell = document.createElement("td");
            var diaDelaSemana = obtenerNombreDia(i);

            cell.id = `${hora}_${diaDelaSemana}`;

            // si la hora se encuentra dentro del arreglo de horas quemadas, agregue el divCita
            
            // si la hora se encuentra dentro del localstorage


            row.appendChild(cell);
        }
    
        tableBody.appendChild(row);
    });

    // Función para obtener el nombre del día
    function obtenerNombreDia(diaIndex) {
        const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
        return days[diaIndex];
    }

    // --------- imprimirSemanaActual
    
    function imprimirSemanaActual() {
        // Obtener la fecha actual
        var fechaActual = new Date();
        
        // Obtener el día de la semana (0 para domingo, 1 para lunes, ..., 6 para sábado)
        var diaSemana = fechaActual.getDay();
        
    
        // Calcular la fecha inicial de la semana restando el día de la semana actual
        var fechaInicial = new Date(fechaActual);
        fechaInicial.setDate(fechaActual.getDate() - (diaSemana - 1));
    
        // Calcular la fecha final de la semana sumando los días restantes hasta el sábado
        var fechaFinal = new Date(fechaActual);
        fechaFinal.setDate(fechaActual.getDate() + (7 - diaSemana));
    
        // Formatear las fechas en el formato deseado (DD/MM/YY)
        var formatoFecha = { day: 'numeric', month: 'numeric', year: '2-digit' };
        var fechaInicialStr = fechaInicial.toLocaleDateString(undefined, formatoFecha);
        var fechaFinalStr = fechaFinal.toLocaleDateString(undefined, formatoFecha);
    
        // Imprimir el rango de fechas de la semana actual
        console.log(fechaInicialStr + " - " + fechaFinalStr);

        const currentWeekElem = document.getElementById('currentWeek');
        currentWeekElem.innerText = (fechaInicialStr + " - " + fechaFinalStr);
    }
    // Llamar a la función para imprimir la semana actual
    imprimirSemanaActual();

// ---------------- FIN TABLE --------------------

// ----------------DOCTORS CHANGHE----------------

// Asocia el evento de clic al botón btnSave
document.getElementById("escogerDoctor").addEventListener("change", function() {

    var selectedDoctor = escogerDoctor.value;


    ocultarCitasExistenes();

    changeDoctorProfile(selectedDoctor);

    insertarDatosJSONEnCeldas();

    // Agrega un evento de clic a cada celda de la tabla
    tableBody.addEventListener('click', handleTableClick);



});



function changeDoctorProfile(selectedDoctor){

        // console.log("soy citas guardadas doctor perfil>>" ,citasGuardadas)
        // Obtiene las citas existentes del localStorage o crea un array vacío si no hay ninguna

        var citasGuardadas = JSON.parse(localStorage.getItem('citas')) || [];
        

        // Actualiza la información del dentista basada en la selección
        if (selectedDoctor === "Dra. María García") {
        dentistImage.src = "./img/dentistimg.jpeg";
        dentistName.textContent = "Dra. María García";
        dentistSpecialty.textContent = "Ortodoncista";


        
    } else if (selectedDoctor === "Dr. Juan Rodríguez") {
        dentistImage.src = "img/otherdentistimg.jpeg";
        dentistName.textContent = "Dr. Juan Rodríguez";
        dentistSpecialty.textContent = "Dentista General";
        
    }
    
    let citasFiltradasPorDoctor = citasGuardadas.filter(cita => cita.nombreDoctor === selectedDoctor)
    let citasFiltradasPorDoctorOTRO = citasGuardadas.filter(cita => cita.nombreDoctor !== selectedDoctor)


    removerCitasOtroDoctor(citasFiltradasPorDoctorOTRO);
    imprimirCitasGuardadas(citasFiltradasPorDoctor, selectedDoctor);
    insertarDatosJSONEnCeldas(selectedDoctor);
    
    // seleccionar id de cantidadDeCitas y "El doctor tiene"

    console.log("soy citasFiltradasPorDoctor doc>>", citasFiltradasPorDoctor.length)
}

function removerCitasOtroDoctor(citasFiltradasPorDoctorOTRO){

    citasFiltradasPorDoctorOTRO.forEach(function (cita) {

        var cellIdCita = cita.id;

        var celOtroDoc = document.getElementById(cellIdCita);

        var citaOtroDocDiv = celOtroDoc.querySelector('.divCita');
        
        if (citaOtroDocDiv) {
            citaOtroDocDiv.remove();
        }
    
    })

}

function imprimirCitasGuardadas(citasFiltradasPorDoctor, selectedDoctor){

    
    citasFiltradasPorDoctor.forEach(function (cita) {

        var cellId = cita.id;

        var cel = document.getElementById(cellId);

        var existingDivCita = cel.querySelector('.divCita');

        if (cita.nombreDoctor === selectedDoctor){



        if (!existingDivCita){ 

        // Crear un nuevo div para la cita
        var divCita = document.createElement("div");
        divCita.classList.add('divCita');

        // Crea un párrafo con el texto "Tu Cita" y una clase
        var tuCitaTexto = document.createElement("p");
        tuCitaTexto.textContent = "Tu Cita";
        tuCitaTexto.classList.add("tuCitaTexto");

        // Crea un botón con el texto "Ver Más" y una clase
        var verMasBoton = document.createElement("button");
        verMasBoton.textContent = "Ver Más";
        verMasBoton.classList.add("verMasBoton");
        verMasBoton.id = cellId + "_buttonVerMas";

        
        // Agrega los elementos al divCita
        divCita.appendChild(tuCitaTexto);
        divCita.appendChild(verMasBoton);

        // Obtener la celda correspondiente al ID
        var cel = document.getElementById(cellId);

        // Agregar el divCita a la celda
        cel.appendChild(divCita);

        // console.log("soy divCitaGuardada  ===>", divCita);
    
        console.log('here --> ', cellId)

        verInfoCita(cellId, citasFiltradasPorDoctor);
    }
}
    });

    
    
}

// ----------------FIN DOCTORS CHANGHE----------------


function insertarDatosJSONEnCeldas(selectedDoctor) {

    if (selectedDoctor === "Dra. María García") {

    const ids = ["8:30_Lunes", "10:00_Martes", "11:00_Viernes"];
    const celdas = [];
    
    ids.forEach(id => {
    const celda = document.getElementById(id);
    if (celda) {
        tableBody.removeEventListener('click', handleTableClick);
        const parrafo = document.createElement("p");
        parrafo.textContent = "Espacio Agendado";
        parrafo.classList.add('EspacioAgendado')
        celda.appendChild(parrafo);
        celdas.push(celda);
    }
    });
    
    console.log(celdas);
        
    console.log("soy celdasConHoraEspecifica", celdasConHoraEspecifica)

    var horaEspecifica = "12:00";
    var celdasConHoraEspecifica = document.querySelectorAll(`[id^="${horaEspecifica}_"]`);


    const data =  JSON.stringify({
        hora: "12:00", 
        nombreDoctor: "doctoraMaria",
        disabled: true,
        label: "Almuerzo"
    })

    celdasConHoraEspecifica.forEach(function(celda) {

        celda.dataset.jsonData = JSON.parse(data);

        var celda = celda.id;
        
        var celElement= document.getElementById(celda);

        celElement.classList.add('disabled-cell')

        var existingP = celElement.querySelector('p');

        if (!existingP){

            var p = document.createElement('p');
            p.textContent = "Almuerzo"

            celElement.appendChild(p);

            tableBody.removeEventListener('click', handleTableClick);
        }
    });

        
    } else if (selectedDoctor === "Dr. Juan Rodríguez") {
    
        const ids = ["9:30_Martes", "11:00_Jueves", "10:00_Jueves"];
        const celdas = [];
        
        ids.forEach(id => {
        const celda = document.getElementById(id);
        if (celda) {
            tableBody.removeEventListener('click', handleTableClick);
            const parrafo = document.createElement("p");
            parrafo.textContent = "Espacio Agendado";
            parrafo.classList.add('EspacioAgendado')
            celda.appendChild(parrafo);
            celdas.push(celda);
        }
        });
        
        console.log(celdas);

        var horaEspecifica = ":00";

    var celdasConHoraEspecifica = document.querySelectorAll(`[id^="${horaEspecifica}_"]`);

    console.log("soy celdasConHoraEspecifica", celdasConHoraEspecifica)

    const data =  JSON.stringify({
        hora: "1:00", 
        nombreDoctor: "doctoraMaria",
        disabled: true,
        label: "Almuerzo"
    })

    celdasConHoraEspecifica.forEach(function(celda) {

        celda.dataset.jsonData = JSON.parse(data);

        var celda = celda.id;
        
        var celElement= document.getElementById(celda);

        celElement.classList.add('disabled-cell')

        var existingP = celElement.querySelector('p');

        if (!existingP){

            var p = document.createElement('p');
            p.textContent = "Almuerzo"

            celElement.appendChild(p);

            tableBody.removeEventListener('click', handleTableClick);
        }
    });


        
    }
    
}


// Función para ocultar todas las citas existentes en las celdas de la tabla, excepto las celdas deshabilitadas
// Función para ocultar todas las citas existentes en las celdas de la tabla, excepto las celdas deshabilitadas
function ocultarCitasExistenes() {

    const todasLasCeldas = document.querySelectorAll('td:not([id^="horascell_"])');
    
    todasLasCeldas.forEach(celda => {
        // Verifica si la celda no tiene la clase 'disabled-cell'
        if (!celda.classList.contains('disabled-cell' || 'EspacioAgendado' )) {
            
            // Elimina las clases 'EspacioAgendado' y 'disabled-cell' de la celda
            celda.innerHTML = '';
            
            // Remueve cualquier div de cita dentro de la celda
            const divCita = celda.querySelector('.divCita');
            if (divCita) {
                divCita.remove();
            }
        }
    });
}



// Función para manejar el clic en la tabla
function handleTableClick(event) {

    // Verifica si se hizo clic en una celda específica
    if (event.target.tagName === 'TD') {

        // Verifica si la celda está deshabilitada
        if (event.target.classList.contains('disabled-cell' || 'EspacioAgendado')) {

            // Si está deshabilitada, puedes mostrar un mensaje o simplemente salir de la función
            console.log('Celda deshabilitada');
            return;
        }

        // Resto de la lógica para manejar el clic en celdas habilitadas
        var cellIdSeleccionada = event.target.id;
        openAddEventModal(cellIdSeleccionada);
        console.log("sooy cellIdSeleccionada handleTableClick", cellIdSeleccionada);
    }
}


// INSERTAR INFO EN ViewEvent 
function insertarInfoCita(cellId, citasGuardadas){
    var horaElement = document.getElementById('horacita');
    var doctorElement = document.getElementById('doctorcita');
    var servicioElement = document.getElementById('serviciocita');
    var diaElement= document.getElementById('dia');


    // Limpiar contenido anterior
    horaElement.textContent = 'Hora: ';
    doctorElement.textContent = 'Doctor: ';
    servicioElement.textContent = 'Servicio: ';
    diaElement.textContent = 'Dia: ';
    
    horaElement.className = cellId;

    // Buscar el objeto en el array cuya propiedad id coincide con el id de la cita
    const citaSeleccionada = citasGuardadas.find(cita => cita.id === cellId)

    horaElement.textContent += citaSeleccionada.hora;
    doctorElement.textContent += citaSeleccionada.nombreDoctor;
    servicioElement.textContent += citaSeleccionada.tipoServicio;

    var diaCita = cellId.split('_')[1];
    diaElement.textContent += diaCita;

}


// recibe el elemento divCita, VER MAS BOTON
function verInfoCita(celId, citasGuardadas) {
    var viewEvent = document.getElementById('viewEvent');
    var verMasBoton = document.getElementById(`${celId}_buttonVerMas`);

    // Asigna un evento al botón
    verMasBoton.addEventListener('click', function() {
        viewEvent.style.display = 'block';

        var deleteExiste = viewEvent.querySelector('.deleteBoton');
        var cerrarButtonVermas = viewEvent.querySelector('.cerrarButtonVermas');

        if (!deleteExiste) {
            var deleteBoton = document.createElement("button");
            deleteBoton.textContent = "Eliminar";
            deleteBoton.classList.add("deleteBoton");
            deleteBoton.id = celId + "_buttonDelete";

            // Encapsula el evento en una función que toma celId como parámetro
            function handleDelete() {
                viewEvent.style.display = 'none';
                deleteBoton.remove();
                var celToRemove = document.getElementById(celId);
                celToRemove.remove();
                eliminarCitaLocalStorage(celId);
            }

            deleteBoton.addEventListener('click', handleDelete);

            function eliminarCitaLocalStorage(id) {
                // Obtener las citas existentes del localStorage
                var citasGuardadas = JSON.parse(localStorage.getItem('citas')) || [];

                // Encontrar el índice de la cita con el id específico
                var index = citasGuardadas.findIndex(cita => cita.id === id);

                // Si se encuentra la cita, eliminarla del array
                if (index !== -1) {
                    citasGuardadas.splice(index, 1);

                    // Guardar el array actualizado en el localStorage
                    localStorage.setItem('citas', JSON.stringify(citasGuardadas));
                }
            }

            viewEvent.appendChild(deleteBoton);
        }

        if (!cerrarButtonVermas) {
            var cerrarButtonVermas = document.createElement("button");
            cerrarButtonVermas.textContent = "Cerrar";
            cerrarButtonVermas.classList.add("cerrarButtonVermas");
            cerrarButtonVermas.id = celId + "_buttonCancelar";

            cerrarButtonVermas.addEventListener('click', function() {
                viewEvent.style.display = 'none';
                cerrarButtonVermas.remove();
            });

            viewEvent.appendChild(cerrarButtonVermas);
        }

        insertarInfoCita(celId, citasGuardadas);
    });
}



// Función para guardar la cita en el localStorage
function guardarCitaEnLocalStorage(citaInfo, cel) {

    let celIdStorage = cel

    // console.log("celIdStorage >>",celIdStorage)

    // Obtiene las citas existentes del localStorage o crea un array vacío si no hay ninguna
    var citasGuardadas = JSON.parse(localStorage.getItem('citas')) || [];

    // Agrega la nueva cita al array
    citasGuardadas.push(citaInfo);

    // Guarda el array actualizado en el localStorage
    localStorage.setItem('citas', JSON.stringify(citasGuardadas));

    // console.log("soy citas saved guardarCitaEnLocalStorage>>>", citasGuardadas);

    verInfoCita(celIdStorage, citasGuardadas);



}



// Evento que se ejecuta cuando se carga la página
window.addEventListener('load', function () {

    // Obtiene las citas existentes del localStorage o crea un array vacío si no hay ninguna
    var citasGuardadas = JSON.parse(localStorage.getItem('citas')) || [];

    // Llamar a la función para imprimir las citas guardadas
    // imprimirCitasGuardadas(citasGuardadas);

});



// Función para abrir el modal addEvent
function openAddEventModal(cellId) {

    // tableBody.removeEventListener('click', handleTableClick);

    // Ejemplo: Mostrar la hora en el modal
    var selectedHour = cellId.split('_')[0]; // Obtén la hora del cellId
    document.getElementById('hora').innerText = selectedHour;

    var dia = cellId.split('_')[1];
    document.getElementById('dia').innerText = dia;

    // Muestra el modal addEvent
    document.getElementById('addEvent').style.display = 'block';

    // document.getElementById("btnClose").addEventListener("click", function() {
    //     document.getElementById('addEvent').style.display = 'none';
    // });

    var addEvent = document.getElementById("addEvent");
    var btnSaveButton = addEvent.querySelector('.btnSave');
    var cerrarButtonNuevaCita = addEvent.querySelector('.cerrarButtonNuevaCita');

    if (!btnSaveButton) {
        var btnSave = document.createElement("button");
        btnSave.textContent = "Guardar";
        btnSave.classList.add("btnSave");
        btnSave.id = cellId + "_buttonSave";

        btnSave.addEventListener('click', function() {
            addEvent.style.display = 'none';
            btnSave.remove()
            crearCita(cellId);
        });

        // Agrega el botón btnSave al modal addEvent
        addEvent.appendChild(btnSave);
    }

    if (!cerrarButtonNuevaCita) {
        var cerrarButtonNuevaCita = document.createElement("button");

        cerrarButtonNuevaCita.textContent = "Cerrar";
        cerrarButtonNuevaCita.classList.add("cerrarButtonNuevaCita");

        cerrarButtonNuevaCita.id = cellId + "_buttonCerrarNuevaCita";
    
        cerrarButtonNuevaCita.addEventListener('click', function() {
            addEvent.style.display = 'none';
            cerrarButtonNuevaCita.remove();
        });
    
        addEvent.appendChild(cerrarButtonNuevaCita);
    }
    

    
}




// Función para crear una cita
function crearCita(cellId) {

    console.log("soy cellId CREARCITA>>>", cellId)

    let celIdCrearCita = cellId
    // Obtiene la referencia al elemento addEvent
    var addEvent = document.getElementById("addEvent");

    // Oculta el elemento addEvent
    addEvent.style.display = "none";

    // Obtiene la celda actual
    var cel = document.getElementById(cellId);

    // console.log('celIdCrearCita hola ', celIdCrearCita)

    // Verifica si ya existe un divCita en la celda
    var existingDivCita = cel.querySelector('.divCita');

    // Si no hay un divCita, entonces agrega uno
    if (!existingDivCita) {
        // Crea un nuevo divCita
        var divCita = document.createElement("div");
        divCita.classList.add('divCita');  // Agrega una clase para identificar el divCita

        // Crea un párrafo con el texto "Tu Cita" y una clase
        var tuCitaTexto = document.createElement("p");
        tuCitaTexto.textContent = "Tu Cita";
        tuCitaTexto.classList.add("tuCitaTexto");

        // Crea un botón con el texto "Ver Más" y una clase
        var verMasBoton = document.createElement("button");
        verMasBoton.textContent = "Ver Más";
        verMasBoton.classList.add("verMasBoton");

        // si no tienes este id
        verMasBoton.id = cellId + "_buttonVerMas";

        // Agrega los elementos al divCita
        divCita.appendChild(tuCitaTexto);
        divCita.appendChild(verMasBoton);

        // Agrega el divCita a la celda
        cel.appendChild(divCita);

        var selectedHour = cellId.split('_')[0];
        var tipoServicioInfo = document.getElementById('servicio').value; // Obtén el valor del tipo de servicio
        var nombreDoctorInfo = document.getElementById('escogerDoctor').value;

        var citaInfo = {
            id: cel.id,
            hora: selectedHour,
            tipoServicio: tipoServicioInfo,
            nombreDoctor: nombreDoctorInfo,
        };

        guardarCitaEnLocalStorage(citaInfo, celIdCrearCita);

        

    }
}



});

