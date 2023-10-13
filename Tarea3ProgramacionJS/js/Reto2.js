let num = 1;

btn_facturar = document.getElementById('facturar');
btn_limpiar = document.getElementById('limpiar');
btn_instrucciones = document.getElementById('Instrucciones');

const facturar = () => {
    const nombreInput = document.getElementById('nombre');
    const articuloInput = document.getElementById('articulo');
    const precioInput = document.getElementById('precio');
    const cantidadInput = document.getElementById('cantidad');

    const nombre = nombreInput.value;
    const articulo = articuloInput.value;
    const precio = precioInput.value;
    const cantidad = cantidadInput.value;

    // Restablece los bordes a su color original
    nombreInput.style.borderColor = '';
    articuloInput.style.borderColor = '';
    precioInput.style.borderColor = '';
    cantidadInput.style.borderColor = '';

    if (nombre == "" || articulo == "" || precio == "" || cantidad == "") {
        Swal.fire({
            icon: 'error',
            iconColor: '#3a7aa5',
            text: 'Campos vacios. Intentar de nuevo por favor.',
        });

        if (nombre == "") {
            nombreInput.style.borderColor = 'red';
        }
        if (articulo == "") {
            articuloInput.style.borderColor = 'red';
        }
        if (precio == "") {
            precioInput.style.borderColor = 'red';
        }
        if (cantidad == "") {
            cantidadInput.style.borderColor = 'red';
        }
        
    
    }else{

        Swal.fire({
            icon: 'success',
            iconColor: '#1df914',
            text: 'Factura calculada!',
        });
        const subtotal = precio * cantidad;
        const IVA = subtotal * 0.13;
        const servicio = subtotal * 0.5;
        const total = subtotal + IVA + servicio;
        const datosTabla = "<td>" + num + "</td><td>" + nombre + "</td><td>" + articulo + "</td><td>" + "</td><td>" + "₡" + precio + "</td><td>" + "₡" + cantidad + "</td><td>" + "₡" + IVA + "</td><td>" + "₡" + servicio + "</td>";
        const agregar = document.createElement("tr");
        agregar.innerHTML = datosTabla;

        const rows = [
            {id: 'table_name', value: nombre}, 
        {id: 'table_amount', value: cantidad}, 
        {id: 'table_price', value: precio}, 
        {id: 'table_subtotal', value: subtotal}, 
        {id: 'table_tax', value: IVA}, 
        {id: 'table_service', value: servicio}, 
        {id: 'table_total', value: total}]
        
        rows.map(row => {
            console.log('row --> ', row)
            document.getElementById(row.id).textContent = row.value;
        })
    }
}


const limpiar = () => {
    const nombreInput = document.getElementById('nombre');
    const articuloInput = document.getElementById('articulo');
    const precioInput = document.getElementById('precio');
    const cantidadInput = document.getElementById('cantidad');

    nombreInput.value = '';
    articuloInput.value = '';
    precioInput.value = '';
    cantidadInput.value = '';

    nombreInput.style.borderColor = '';
    articuloInput.style.borderColor = '';
    precioInput.style.borderColor = '';
    cantidadInput.style.borderColor = '';

}


const instrucciones = () => {
    Swal.fire({
        icon: 'info',
        text: '1. Ingrese la informacion de sus productos',
        // text: '2. Asegurese de llenar todas las cajas de informacion',
        // text: '3. Escoja la opcion deseada',
        // text: '4. Limpie los valores de ser necesario',
        // text: '5. Revise la informacion desplegada en la columna derecha',
        
        })
}

btn_facturar.addEventListener("click", facturar)
btn_limpiar.addEventListener("click", limpiar)
btn_instrucciones.addEventListener("click", instrucciones)
