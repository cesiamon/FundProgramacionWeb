
var num = 1;

btn_facturar = document.getElementById('facturar');
btn_limpiar = document.getElementById('limpiar');

btn_facturar.addEventListener("click", facturar)

const facturar = () => {
    nombre = document.getElementById('nombre').value;
    articulo = document.getElementById('articulo').value;
    precio = document.getElementById('precio').value;
    cantidad = document.getElementById('cantidad').value;

    if (nombre == "" || articulo == "" || precio == "" || cantidad == "") {
        Swal.fire({
            icon: 'error',
            iconColor: '#3a7aa5',
            text: 'Campos vacios. Intentar de nuevo por favor.',
          
        })
    }else{
        subtotal = precio * cantidad;
        IVA = subtotal * 0,13;
        servicio = subtotal * 0,5;
        total = subtotal + IVA + servicio;

        var datosTabla = "<td>" + num + "</td><td>" + nombre + "</td><td>" + articulo + "</td><td>" + "</td><td>" + "₡" + precio + "</td><td>" + "₡" + cantidad + "</td><td>" + "₡" + IVA + "</td><td>" + "₡" + Servicio + "</td>";

        var agregar = document.createElement("tr");

        agregar.innerHTML = datosTabla;
 




    }
}