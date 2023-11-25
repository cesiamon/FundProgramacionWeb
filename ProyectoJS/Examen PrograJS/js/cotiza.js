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

  event.preventDefault();

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

  console.log('Total Precio: $', totalPrecio.toFixed(2));

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
totalPagarElement.innerHTML = '$' + totalPagar.toFixed(2);

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

// limpiar 
function limpiar() {
  // Limpiar información del seguro
  var seguroSelect = document.getElementById('seguroSelect');
  seguroSelect.selectedIndex = 0;
  document.getElementById('seguroInfo').innerText = ' ';

  // Limpiar información del paciente (si existe)
  var tipoPacienteSelect = document.getElementById('tipoPacienteSelect');
  if (tipoPacienteSelect) {
    tipoPacienteSelect.selectedIndex = 0;
    document.getElementById('pacienteInfo').innerText = '';
  }

  // Limpiar lista de productos
  var listaProductos = document.getElementById('listaProductos');
  listaProductos.innerHTML = '';

  // Limpiar porcentajes y números
  document.getElementById('subtotal').innerText = '0';
  document.getElementById('descuentoPaciente').innerText = '0';
  document.getElementById('descuentoSeguro').innerText = '0';
  document.getElementById('iva').innerText = '15%';
  document.getElementById('totalPagar').innerText = '0';
}

