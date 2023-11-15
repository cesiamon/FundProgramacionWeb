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
