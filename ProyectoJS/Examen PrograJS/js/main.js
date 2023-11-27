(function($) {

  "use strict";


  $(window).stellar({
      responsive: true,
      parallaxBackgrounds: true,
      parallaxElements: true,
      horizontalScrolling: false,
      hideDistantElements: false,
      scrollProperty: 'scroll'
  });


  var fullHeight = function() {

      $('.js-fullheight').css('height', $(window).height());
      $(window).resize(function() {
          $('.js-fullheight').css('height', $(window).height());
      });

  };
  fullHeight();

  // loader
  var loader = function() {
      setTimeout(function() {
          if ($('#ftco-loader').length > 0) {
              $('#ftco-loader').removeClass('show');
          }
      }, 1);
  };
  loader();

  var carousel = function() {
      $('.home-slider').owlCarousel({
          loop: true,
          autoplay: true,
          margin: 0,
          animateOut: 'fadeOut',
          animateIn: 'fadeIn',
          nav: true,
          dots: true,
          autoplayHoverPause: false,
          items: 1,
          navText: ["<span class='ion-ios-arrow-back'></span>", "<span class='ion-ios-arrow-forward'></span>"],
          responsive: {
              0: {
                  items: 1
              },
              600: {
                  items: 1
              },
              1000: {
                  items: 1
              }
          }
      });

      $('.carousel-testimony').owlCarousel({
          center: true,
          loop: true,
          items: 1,
          margin: 30,
          stagePadding: 0,
          nav: false,
          navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
          responsive: {
              0: {
                  items: 1
              },
              600: {
                  items: 2
              },
              1000: {
                  items: 3
              }
          }
      });

  };
  carousel();

  $('nav .dropdown').hover(function() {
      var $this = $(this);
      // 	 timer;
      // clearTimeout(timer);
      $this.addClass('show');
      $this.find('> a').attr('aria-expanded', true);
      // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
      $this.find('.dropdown-menu').addClass('show');
  }, function() {
      var $this = $(this);
      // timer;
      // timer = setTimeout(function(){
      $this.removeClass('show');
      $this.find('> a').attr('aria-expanded', false);
      // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
      $this.find('.dropdown-menu').removeClass('show');
      // }, 100);
  });


  $('#dropdown04').on('show.bs.dropdown', function() {
      console.log('show');
  });

  // magnific popup
  $('.image-popup').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      closeBtnInside: false,
      fixedContentPos: true,
      mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
      gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
          verticalFit: true
      },
      zoom: {
          enabled: true,
          duration: 300 // don't foget to change the duration also in CSS
      }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false
  });


  var counter = function() {

      $('#section-counter').waypoint(function(direction) {

          if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

              var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
              $('.number').each(function() {
                  var $this = $(this),
                      num = $this.data('number');
                  console.log(num);
                  $this.animateNumber({
                      number: num,
                      numberStep: comma_separator_number_step
                          //velocidad de los testimoniales
                  }, 7000);
              });

          }

      }, { offset: '95%' });

  }
  counter();

  var contentWayPoint = function() {
      var i = 0;
      $('.ftco-animate').waypoint(function(direction) {

          if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

              i++;

              $(this.element).addClass('item-animate');
              setTimeout(function() {

                  $('body .ftco-animate.item-animate').each(function(k) {
                      var el = $(this);
                      setTimeout(function() {
                          var effect = el.data('animate-effect');
                          if (effect === 'fadeIn') {
                              el.addClass('fadeIn ftco-animated');
                          } else if (effect === 'fadeInLeft') {
                              el.addClass('fadeInLeft ftco-animated');
                          } else if (effect === 'fadeInRight') {
                              el.addClass('fadeInRight ftco-animated');
                          } else {
                              el.addClass('fadeInUp ftco-animated');
                          }
                          el.removeClass('item-animate');
                      }, k * 50, 'easeInOutExpo');
                  });

              }, 100);

          }

      }, { offset: '95%' });
  };
  contentWayPoint();


  $('.appointment_date').datepicker({
      'format': 'm/d/yyyy',
      'autoclose': true
  });

  $('.appointment_time').timepicker();


})(jQuery);

// fin contador 

// sliders

document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide').mount();
});

document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
        type: 'loop',
        perPage: 1,
        perMove: 1,
        pagination: false,
        gap: 0, 
        arrows: true, 
        autoplay: true, // Habilitar autoplay
        interval: 3000, // Establecer el intervalo en milisegundos (por ejemplo, 3000ms = 3 segundos)
    }).mount();
});



// pestanas about
function insertarInformacion(nombre, telefono, correo) { 
    document.getElementById("SedeName").innerText = nombre;
    document.getElementById("SedeTelefono").innerText = "Teléfono: " + telefono;
    document.getElementById("SedeCorreo").innerText = "Correo: " + correo;
  }

  function verificarSede(sedeId) {
    // hideAllButtons();
    // document.getElementById(sedeId).style.display = 'block';


    var sede = document.getElementById(sedeId).innerText.trim();

    if (sede === "Escazu") {
      insertarInformacion("CLINICA ESCAZU", "+506 6978-9344", "escazu@dentalcareinfo.com");
    } else if (sede === "SanPedro") {
      insertarInformacion("CLINICA SAN PEDRO", "+506 6975-8848", "sanpedro@dentalcareinfo.com");
    } else if (sede === "Heredia") {
      insertarInformacion("CLINICA HEREDIA", "+506 6976-8846", "heredia@dentalcareinfo.com");
    }

}

// function hideAllButtons() {
//     // Oculta todos los botones
//     var buttons = document.querySelectorAll('.tap');
//     buttons.forEach(button => {
//       button.style.display = 'none';
//     });
//   }

  function openMap(mapUrl) {
    document.getElementById('map').src = mapUrl;
}

// COTIZA
// selects

// seguro
function mostaryAgregarInfo(selectElement) {
  var seguroNombre = selectElement.value;
  var seguroInfoElement = document.getElementById('seguroInfo');
  var descuentoSeguroElement = document.getElementById('descuentoSeguro');

  var seguroPorcentaje = obtenerPorcentajeSeguro(seguroNombre);

  // console.log("Seguro seleccionado: " + seguro);
  seguroInfoElement.innerHTML = `El seguro de ${seguroNombre} cuenta con un ${seguroPorcentaje}% de descuento.`;
  descuentoSeguroElement.innerHTML = `${seguroPorcentaje}%`

}

  function obtenerPorcentajeSeguro(seguroNombre){
    if (seguroNombre === 'Medismart'){
      return 30;
  }else if(seguroNombre === 'Pali'){
    return 15;
  }else if(seguroNombre === 'INS'){
    return 11;
  }else{
    return 0;
  }
  
}

// tipo paciente

function mostaryAgregarInfoPaciente(selectElement){
  var tipoPaciente = selectElement.value
  var pacienteInfoElement = document.getElementById('pacienteInfo')
  var descuentoPacienteElement = document.getElementById('descuentoPaciente')

  if(tipoPaciente === 'nuevo'){
    pacienteInfoElement.innerHTML = `Felicidades, cuentas con un 15% de descuento y una regalía en Radiología.`
    descuentoPacienteElement.innerHTML = '15%'
  }else{
    tipoPaciente === 'regular'
    pacienteInfoElement.innerHTML = `Gracias por confiar en nosotros. Continúa tu cotización.`

  }

  
}


// agregar productos a la lista

function agregarProducto(nombre, precio) {
  var listaProductos = document.getElementById('listaProductos');

  // Crear un nuevo elemento de lista
  var nuevoProducto = document.createElement('li');
  nuevoProducto.className = 'list-group-item';
  nuevoProducto.innerText = nombre + ' - $' + precio; // Asegurarse de que el precio tenga dos decimales

  // Agregar el nuevo elemento a la lista
  listaProductos.appendChild(nuevoProducto);

  // Inicializar la variable totalPrecio fuera del bucle
  var totalPrecio = 0;

  // Ciclo for para iterar sobre los elementos de la lista y sumar los precios
  for (var i = 0; i < listaProductos.children.length; i++) {
    var listItem = listaProductos.children[i];
    // Obtener el precio de cada elemento y sumarlo al totalPrecio
    var precioItem = parseFloat(listItem.innerText.split(' - $')[1].replace(',', '').trim());
    // Reemplazar comas y espacios adicionales, luego convertir a número
    if (!isNaN(precioItem)) {
      totalPrecio += precioItem;
    }
  }

  var subtotal = document.getElementById('subtotal')

  subtotal.innerHTML = `$${totalPrecio.toFixed(2)}`;

  console.log('Total Precio:', totalPrecio.toFixed(2));

  // Total a pagar 

descuentoSeguroPorcentaje = parseFloat(document.getElementById('descuentoSeguro').innerText);
descuentoPacientePorcentaje = parseFloat(document.getElementById('descuentoPaciente').innerText);

console.log(descuentoSeguroPorcentaje);
console.log(descuentoPacientePorcentaje);

// Calcular los montos de descuento
descuentoSeguroMonto = totalPrecio * (descuentoSeguroPorcentaje / 100);
descuentoPacienteMonto = totalPrecio * (descuentoPacientePorcentaje / 100);

// Calcular el nuevo total después de aplicar los descuentos
totalConDescuentos = totalPrecio - descuentoSeguroMonto - descuentoPacienteMonto;

// Calcular el monto del IVA
ivaPorcentaje = 15; // Porcentaje del IVA
ivaMonto = totalConDescuentos * (ivaPorcentaje / 100);

console.log('IVA', ivaMonto.toFixed(2));

// Calcular el total a pagar con el IVA
totalPagar = totalConDescuentos + ivaMonto;

console.log('total a pagar: ',totalPagar.toFixed(2));
  
var totalPagarElement = document.getElementById('totalPagar');
totalPagarElement.innerHTML = totalPagar.toFixed(2);

}

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('btn-primary')) {
    // Obtén el texto del primer hijo del elemento con la clase 'list-group-item'
    var listItemText = event.target.closest('.list-group-item').firstChild.nodeValue.trim();

    var productoInfo = listItemText.split(' - $');
    var nombreProducto = productoInfo[0]; // Elimina espacios en blanco alrededor del nombre
    var precioProducto = parseFloat(productoInfo[1].replace(',', '').trim()); // Reemplazar comas y espacios adicionales

    agregarProducto(nombreProducto, precioProducto);
  }
});


// Nuestros resultados 

function OpcionGaleriaEscogida(selectedElement){
    let GaleriaEscogida = selectedElement.value;
    let galeriaReparaciones = document.getElementById("galeriaReparaciones");
    let galeriaOrtodoncia = document.getElementById("galeriaOrtodoncia");
    let imagenFondoGaleria = document.getElementById("imagenFondoGaleria");
    let opcion0 = document.getElementById("opcion0") 

    console.log(GaleriaEscogida);

    if (GaleriaEscogida === "Diseno"){
        galeriaReparaciones.style.display = "block";
        galeriaOrtodoncia.style.display = "none";
        imagenFondoGaleria.style.display = "none";
    }
    else if (GaleriaEscogida === "Ortodoncia"){
            galeriaOrtodoncia.style.display = "block";
            galeriaReparaciones.style.display = "none";
            imagenFondoGaleria.style.display = "none";
        }
    else if(GaleriaEscogida === "opcion0"){
            galeriaOrtodoncia.style.display = "none";
            galeriaReparaciones.style.display = "none";
            imagenFondoGaleria.style.display = "block";

    }
    }


// Contactanos

function validateForm() {
    // Reset borders
    resetBorders();

    let nombre = document.getElementById('nombreTxt').value;
    let email = document.getElementById('emailTxt').value;
    let numero = document.getElementById('numberTxt').value;
    let categoria = document.getElementById('categoria').value;
    let mensaje = document.getElementById('mensajeTxt').value;
    
    
    if (nombre === '' || email === '' || numero === '' || categoria === 'disable' || mensaje === '' ) {
        Swal.fire({
            icon: 'error', 
            title: 'Campos Vacíos',
            text: 'Rellene los campos en rojo.',
            confirmButtonText: 'Aceptar'
        });
    }
    else {
        Swal.fire({
            icon: 'success', 
            title: 'Mensaje enviado',
            text: 'Pronto le contactaremos.',
            confirmButtonText: 'Aceptar'
        });
    }

    if (nombre === '') {
        markAsError('nombreTxt');
    }
    if (email === '') {
        markAsError('emailTxt');
    }
    if (numero === '') {
        markAsError('numberTxt');
    }
    if (categoria === 'disable') {
        markAsError('categoria');
    }
    if (mensaje === '') {
        markAsError('mensajeTxt');
    }

    
    emailjs.sendForm('service_y7mjmqq', 'template_5ssrivb', '#form1', 'xaZ9VPtildclNi3kn');
    
    limpiar();
    console.log('sent')
}

function markAsError(elementId) {
    document.getElementById(elementId).classList.add('error');
}

function resetBorders() {
    let formElements = document.getElementById('form1').elements;
    for (let i = 0; i < formElements.length; i++) {
        formElements[i].classList.remove('error');
    }
}
function limpiar() {
    document.getElementById('nombreTxt').value = '';
    document.getElementById('emailTxt').value = '';
    document.getElementById('numberTxt').value = '';
    document.getElementById('categoria').value = '';
    document.getElementById('mensajeTxt').value = '';

    document.getElementById('llamada').checked = false;
    document.getElementById('whatsapp').checked = false;
}


// servicios 
function EnviarEmail(){

let UserEmailTxt = document.getElementById('inscriptionTxt').value;
const expressionEmail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
let alerta = document.getElementById('mensajeAlert');

if( UserEmailTxt === ''){
    alerta.textContent = "Por favor ingresa tu correo";
    alerta.classList.add('alertaRoja');
    alerta.classList.remove('alertaVerde');
} else if (expressionEmail.test(UserEmailTxt) === false){
    alerta.textContent = "Correo Invalido";
    alerta.classList.add('alertaRoja');
    alerta.classList.remove('alertaVerde');
} else {
    alerta.textContent = "Su registro fue exitoso ";
    alerta.classList.remove('alertaRoja');
    alerta.classList.add('alertaVerde');
    emailjs.sendForm('service_y7mjmqq', 'template_w6eedf8', '#inscription', '_OTkL7crYfTyuInQv');
    limpiarEmail()
}



}

function limpiarEmail() {
    let UserEmailTxt = document.getElementById('inscriptionTxt');
    UserEmailTxt.value = '';
}

// Encuesta Web 

var frm = document.forms["form"];
EmptySpaceCheckBox1 = false;
EmptySpaceCheckBox2 = false;

var EmptySpaceInput = false;
var EmptyRatio1 = false;
var EmptyRatio2 = false;
var EmptyRatio3 = false;


function validateForm2() {
    // Obtener referencias a los elementos del formulario
    // let satisfaction = document.getElementById('satisfaction');
    // let checkCost = document.getElementById('checkCost');
    // let checkLocation = document.getElementById('checkLocation');
    // let checkReputation = document.getElementById('checkReputation');
    // let checkAdditionalServices = document.getElementById('checkAdditionalServices');
    // let checkFlexibleHours = document.getElementById('checkFlexibleHours');
    // let checkCosmeticDentistry = document.getElementById('checkCosmeticDentistry');
    // let checkOrthodontics = document.getElementById('checkOrthodontics');
    // let checkTeethWhitening = document.getElementById('checkTeethWhitening');
    // let checkDentalImplants = document.getElementById('checkDentalImplants');

    // let veryPositive = document.getElementById('veryPositive');
    // let positive = document.getElementById('positive');
    // let neutral = document.getElementById('neutral');
    // let negative = document.getElementById('negative');
    // let veryNegative = document.getElementById('veryNegative');


    validateInput();
    validateCheckBox();
    validateRatios();
 
    

    if(EmptyRatio1 === true){
        validationAlert()

        let asterisk4 = document.createElement('span');
        asterisk4.textContent = ' *';
        asterisk4.style.color = 'red';

        let label4 = document.querySelector(`label[for='${experienciaClinica.id}']`);
        label4.appendChild(asterisk4);

    }

    if(EmptyRatio2 === true){
        validationAlert()
        let asterisk5 = document.createElement('span');
        asterisk5.textContent = ' *';
        asterisk5.style.color = 'red';

        let label5 = document.querySelector(`label[for='${comunicacionPersonal.id}']`);
        label5.appendChild(asterisk5);

    }

    if(EmptyRatio3 === true){
        validationAlert()
        let asterisk6 = document.createElement('span');
        asterisk6.textContent = ' *';
        asterisk6.style.color = 'red';

        let label6 = document.querySelector(`label[for='${experienciaAgenda.id}']`);
        label6.appendChild(asterisk6);

    }

    if(EmptySpaceInput === true){
        validationAlert()
        let asterisk3 = document.createElement('span');
        asterisk3.textContent = ' *';
        asterisk3.style.color = 'red';

        let label3 = document.querySelector(`label[for='${satisfaction.id}']`);
        label3.appendChild(asterisk3);
    }

    if (EmptySpaceCheckBox1 === true) {
        validationAlert()
        let OpcionesImportantes = document.getElementById('OpcionesImportantes');

        // Asterisko1
        let asterisk = document.createElement('span');
        asterisk.textContent = ' *';
        asterisk.style.color = 'red';

        let label = document.querySelector(`label[for='${OpcionesImportantes.id}']`);
        label.appendChild(asterisk);
        

    }
    if (EmptySpaceCheckBox2 === true) {
        validationAlert()
        let serviciosAdicionales = document.getElementById('serviciosAdicionales');
        // Asterisko2
        let asterisk2 = document.createElement('span');
        asterisk2.textContent = ' *';
        asterisk2.style.color = 'red';

        let label2 = document.querySelector(`label[for='${serviciosAdicionales.id}']`);
        label2.appendChild(asterisk2);
        
    }

    calcularEncuesta()


}

function validateInput(){

    console.log('satisfaction.value --> ', satisfaction.value)

    if (satisfaction.value === "") {
        EmptySpaceInput = true;
    }else{
        datosCorrectos()
    }
}


function validateCheckBox() {
    var frm = document.forms["form"];
    EmptySpaceCheckBox1 = false;
    EmptySpaceCheckBox2 = false;

    if (
        !frm["checkCost"].checked &&
        !frm["checkLocation"].checked &&
        !frm["checkReputation"].checked &&
        !frm["checkAdditionalServices"].checked
        
    ) {
        EmptySpaceCheckBox1 = true;

    }else{
        datosCorrectos()
    }

    if (
        !frm["checkCosmeticDentistry"].checked &&
        !frm["checkOrthodontics"].checked &&
        !frm["checkTeethWhitening"].checked &&
        !frm["checkDentalImplants"].checked
    ) {
        EmptySpaceCheckBox2 = true;
    }else {
        datosCorrectos()
    }
} 

function validateRatios(){
    var frm = document.forms["form"];
    EmptyRatio1 = false;

    if (
        !frm["veryPositive1"].checked &&
        !frm["positive1"].checked &&
        !frm["neutral1"].checked &&
        !frm["negative1"].checked &&
        !frm["veryNegative1"].checked
    ) {
        EmptyRatio1 = true;
    }else{
        datosCorrectos()
    }

    if (
        !frm["veryPositive2"].checked &&
        !frm["positive2"].checked &&
        !frm["neutral2"].checked &&
        !frm["negative2"].checked &&
        !frm["veryNegative2"].checked
    ) {
        EmptyRatio2 = true;
    }else{
        datosCorrectos()
    }

    if (
        !frm["veryPositive3"].checked &&
        !frm["positive3"].checked &&
        !frm["neutral3"].checked &&
        !frm["negative3"].checked &&
        !frm["veryNegative3"].checked
    ) {
        EmptyRatio3 = true;
    }else{
        datosCorrectos()
    }
}

function validationAlert(){
    swal.fire({
        /* icon: "error",*/
        title: "Por favor completa todos los campos",
        // text: "",
        confirmButtonText: "Intentar de nuevo",
        confirmButtonColor: "#008383",
        html: '<iframe src="https://lottie.host/?file=39f272c7-e7c0-47be-ad30-3f0a2e86b9cd/bXUbdoAvfP.json"></iframe> <br><p>',
    });
}

function datosCorrectos(){
    Swal.fire({
        title: "Encuesta Enviada",
        text:"Muchas gracias por su tiempo!",
        showConfirmButton: false,
        timer: 5000,
        html: '<iframe src="https://lottie.host/?file=cda0d60c-0580-47dd-8e7b-2af90ccbe152/kR6xj6ooFC.json"></iframe> <br><br><p>Un momento!</p>',

    })
}

function calcularEncuesta() {
    // Get the values from the radio buttons
    var experience1Value = document.querySelector('input[name="experience1"]:checked').value;
    var experience2Value = document.querySelector('input[name="experience2"]:checked').value;
    var experience3Value = document.querySelector('input[name="experience3"]:checked').value;


    console.log(experience1Value, experience2Value, experience3Value)

    // Count the number of "veryPositive" responses
    // var veryPositiveCount = [experience1Value, experience2Value, experience3Value].filter(value => value === 'veryPositive').length;
    // var veryPositiveCount = [experience1Value, experience2Value, experience3Value].filter(value => value === 'veryPositive').length;

    // Determine the overall result based on the conditions
    // if (veryPositiveCount === 3) {
    //     document.getElementById('res').innerText = 'Excelente';
    // } else if (veryPositiveCount === 2) {
    //     document.getElementById('res').innerText = 'Buena';
    // } else {
    //     document.getElementById('res').innerText = 'Regular';
    // }
}


