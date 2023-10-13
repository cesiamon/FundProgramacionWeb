let num = 1;

btn_facturar = document.getElementById('facturar');
btn_limpiar = document.getElementById('limpiar');

const facturar = () => {
    const nombre = document.getElementById('nombre').value;
    const articulo = document.getElementById('articulo').value;
    const precio = document.getElementById('precio').value;
    const cantidad = document.getElementById('cantidad').value;

    if (nombre == "" || articulo == "" || precio == "" || cantidad == "") {
        Swal.fire({
            icon: 'error',
            iconColor: '#3a7aa5',
            text: 'Campos vacios. Intentar de nuevo por favor.',
        })
    }else{
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

btn_facturar.addEventListener("click", facturar)
