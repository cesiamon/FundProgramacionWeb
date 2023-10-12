//evento que carga la funcion automáticamente...

window.onload = function() {
    //evento que permite cambiar el objeto onchange    
    document.getElementById("lugaresCanada").onchange = function(e) {
        //destino del valor seleccionado por el usuario
        let n = e.target.value;
        //expresiones que guardan las imágenes de los lugares y la información de cada uno...
        //las fotos se deben de guardar en una subcarpeta dentro de img llamada lugaresCanada
        let imagen = "<img src='img/lugaresCanada/" + n + ".jpeg' class='img-fluid img-thumbnail rounded' alt='Lugar' />";
        let text = ["Atracción: Parque Nacional Banff y el Lago Louise (Alberta)",
            "Atracción: Cataratas del Niágara (Ontario)",
            "Atracción: Ciudad de Quebec (Quebec)",
            "Atracción: Toronto, Ontario",
            "Atracción: Parque Nacional Jasper (Alberta)",
            "Atracción: Islas de la Bahía de Fundy (Nuevo Brunswick y Nueva Escocia)",
            "Atracción: Parque Nacional Gros Morne (Terranova y Labrador)",
        ];
        //salida de las imágenes y los textos informativos...
        document.getElementById("output-img").innerHTML = imagen;
        document.getElementById("output-cityName").innerHTML = text[n - 1];

        // Ahora, puedes usar la variable 'n' dentro de este controlador para mostrar la descripción.
        if (n == 1) {
            document.getElementById("output-cityDescription").innerText = "Sumérgete en la majestuosidad de las Montañas Rocosas en el Parque Nacional Banff, donde la naturaleza alcanza su máxima expresión. Desde los picos nevados hasta los lagos de aguas turquesa, cada rincón de este parque te dejará sin aliento. El icónico Lago Louise, rodeado de montañas, es un lugar de ensueño para caminatas y fotografías impresionantes.";
        } else if (n == 2) {
            document.getElementById("output-cityDescription").innerText = "Las Cataratas del Niágara son un espectáculo natural inolvidable. El rugido del agua y la neblina que se eleva desde las cataratas crean una experiencia única. Puedes explorar las cataratas desde diversos ángulos y disfrutar de actividades emocionantes, como paseos en barco y observación de fuegos artificiales.";
        } else if (n == 3) {
            document.getElementById("output-cityDescription").innerText = "La Ciudad de Quebec es como un viaje en el tiempo a la época colonial francesa. Sus calles adoquinadas, murallas históricas y arquitectura europea te transportarán al pasado. El casco antiguo, con sus encantadoras tiendas y restaurantes, es un lugar perfecto para pasear.";
        } else if (n == 4) {
            document.getElementById("output-cityDescription").innerText = "Toronto, la ciudad más grande de Canadá, es un centro cosmopolita lleno de vida. Desde la icónica CN Tower hasta el Museo Real de Ontario, la ciudad ofrece una amplia gama de atracciones. Además, su diversidad cultural se refleja en su vibrante escena gastronómica.";
    }else if (n == 5) {
        document.getElementById("output-cityDescription").innerText = "El Parque Nacional Jasper es un paraíso natural en las Montañas Rocosas. Con montañas escarpadas, glaciares impresionantes y lagos de aguas cristalinas, es un destino ideal para los amantes de la naturaleza y las actividades al aire libre.";
    }else if (n == 6) {
        document.getElementById("output-cityDescription").innerText =  "Vancouver es una fusión perfecta entre la naturaleza y la vida urbana. Con su hermoso paisaje costero, montañas cercanas y un ambiente relajado, la ciudad ofrece oportunidades para practicar deportes al aire libre, disfrutar de la playa y explorar sus diversos barrios.";
    }else if (n == 7) {
        document.getElementById("output-cityDescription").innerText =  "Las Islas de la Bahía de Fundy son un tesoro natural con las mareas más altas del mundo. Aquí, puedes explorar paisajes escénicos, caminar por playas interiores y maravillarte con la rica vida marina, incluyendo la observación de ballenas.";
    }else if (n == 8) {
        document.getElementById("output-cityDescription").innerText =  "El Parque Nacional Gros Morne es un escape geológico impresionante. Desde sus dramáticos fiordos hasta sus mesetas rocosas, este parque es un paraíso para los amantes de la geología y la belleza natural. Además, ofrece oportunidades para practicar senderismo y kayak en un entorno único.";
    }

    // Función del botón Reiniciar 
    document.getElementById("btn-clean").onclick = function() {

        // Limpia los textos informativos de los lugares...
        document.getElementById("output-cityName").innerHTML = "";
        document.getElementById("output-cityDescription").innerHTML = "";
        // Dejar el select con la opción por defecto...
        document.getElementById("lugaresCanada").value = "";
        document.getElementById("output-img").innerHTML = "";

        Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: 'Cargando informacion, un momento por favor...',
            timer: 1000,
        });
    }
    };
};
