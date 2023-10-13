
let selectedStorage = null;
let selectedType = null;
let selectedColor = null;

// const radios = document.querySelectorAll('input[type="radio"][name="color"]');

// radios.forEach((radio) => {
//     radio.addEventListener('change', function() {
//         if (radio.checked) {
//             const color = radio.value;
//             const imagen = `img/iphones/${color}.jpg`;
//             document.getElementById("imagen").src = imagen;
//         }
//     });
// });



function addBorder(value, storage) {
    const buttons = document.querySelectorAll(storage ? '[id*="storage"]' : '[id*="type"]');
    const selectedButton = document.querySelectorAll(`[id="${value}"]`)[0];

    for (var i = 0; i < buttons.length; i++) {
      var button = buttons[i];
      const selectedButton = document.querySelectorAll(`[id="${button.id}"]`)[0];
      selectedButton.classList.remove('border1');
    }

    selectedButton.classList.add("border1");
}

function selectStorage(x) {
    selectedStorage = x.id;
    addBorder(selectedStorage, true)
}

function selectType(x) {
    selectedType = x.id;
    addBorder(selectedType, false)
}

function selectColor(x){
    selectedColor = x.id;
    console.log(selectedColor)

    const imagen = `img/iphones/${selectedColor}.jpg`;
    document.getElementById("imagen").src = imagen;
    
    var radio = document.getElementById("black");
    radio.style.background="red";  
}



function calcular(){
    console.log('selected values ', selectedType, selectedStorage, selectedColor);

    if (selectedType == "type_pro" || "type_max"  ){
        const color = selectedColor
        const imagen = `img/iphones/${color}2.jpg`;
            document.getElementById("imagen").src = imagen;
    }

    if (selectedType ===  null || selectedStorage === null ) {
        swal.fire({
            icon: "info",
            title: "Atención",
            html: 'Por favor seleccione todas las opciones'
        })
    } else {
        const montosInfo = document.querySelector(".montosInfo");
        montosInfo.style.display = "block";

        swal.fire({
            icon: "warning",
            title: "Atención",
            html: 'Calculando..',
            timer: 1000,
        })

        let montoTotal = 0;
        let cuotaMensual = 0;

        if(selectedType == "type_pro" &&  selectedStorage == "storage_128") {
            montoTotal = "$" +1300;
            cuotaMensual = "$" + 80;

        } else if (selectedType == "type_pro" &&  selectedStorage == "storage_256"){
            montoTotal = "$" +1600;
            cuotaMensual = "$" +100;

        }else if (selectedType == "type_pro" &&  selectedStorage == "storage_512"){
            montoTotal = "$" +1800;
            cuotaMensual = "$" +200;
        } else {
            if(selectedType == "type_max" &&  selectedStorage == "storage_128") {
                montoTotal = "$" + 1400;
                cuotaMensual = "$" + 90;
    
            } else if (selectedType == "type_max" &&  selectedStorage == "storage_256"){
                montoTotal = "$" + 1600;
                cuotaMensual = "$" + 110;
    
            }else if (selectedType == "type_max" &&  selectedStorage == "storage_512"){
                montoTotal = "$" + 2000;
                cuotaMensual = "$" + 250;
            }
        }

        document.getElementById("precioTotal").innerHTML = montoTotal;
        document.getElementById("cuotaMensual").innerHTML = cuotaMensual;

    }

    
}

function limpiar(){

    const selectedButtons = document.querySelectorAll("button");
    selectedButtons.forEach(function(button) {
        button.classList.remove('border1');
    });
    
    const montosInfo = document.querySelector(".montosInfo");
    montosInfo.style.display = "none";

    document.getElementById("precioTotal").innerHTML = "";
    document.getElementById("cuotaMensual").innerHTML = "";

    const imagen = `img/iphones/iPhones.png`;
    document.getElementById("imagen").src = imagen;


        Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: 'Cargando informacion, un momento por favor...',
            timer: 1000,
        });
}