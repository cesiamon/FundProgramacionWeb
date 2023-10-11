

$("#r0").click(function() {
    Swal.fire({
        icon: 'info',
        title: 'Atención usuario',
        text: 'Ventana es una abertura que se deja en una pared para permitir el ingreso de luz y la ventilación. Las ventanas se encuentran a una altura más o menos elevada del suelo y suelen presentar un vidrio para que, cuando estén cerradas, no pueda ingresar nada del exterior.',
    });
});



$("#r1").click(function() {
    Swal.fire({
        title: 'Atención usuario',
        textAlign: 'right',
        icon: 'question',
        iconColor: '#eea025',
        position: 'center',
        confirmButtonColor: '#eea025',
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Aceptar',
        animation: true,
        customClass: 'recuerde1',
        showClass: {
            popup: 'animated bounceIn',
        },
        hideClass: {
            popup: 'animated bounceOut',
        },
        showCloseButton: true,
        html: '<strong>El término pared que ahora vamos a analizar hay que exponer, en primer lugar, que deriva del latín. Emana concretamente de la palabra “paries”, que puede traducirse como “pared”.</strong> ' +
            '<br><br><br>' +
            '<p class=""> - La pared de Shakira.</p>' +
            '<br>' +
            '<p class=""> - Contra la pared” de Jiggy Drama. </p>' +
            '<br>' +
            '<p class=""> - La pared de José Manuel Soto. </p>'
    });
});



$("#r2").click(function() {
    Swal.fire({
        icon: 'info',
        title: 'Información general',
        showClass: {
            popup: 'animated zoomIn',
        },
        hideClass: {
            popup: 'animated zoomOut',
        },
        text: 'El suelo es la parte inferior de ciertas construcciones o cosas. Puede decirse que el término, con origen etimológico en el latín solum, refiere a la superficie de la Tierra (la parte exterior de la corteza terrestre) y donde se plantan las semillas para las actividades agrícolas.',
        footer: '<a href="https://definicion.de/suelo" target="blank">Leer más</a>'
    });
});




$("#r3").click(function() {
    Swal.fire({
        title: 'Atención usuario',
        imageUrl: 'imagenes/logo.jpg',
        position: 'center',
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Aceptar',
        animation: true,
        customClass: 'recuerde1',
        showClass: {
            popup: 'animated fadeInDown',
        },
        hideClass: {
            popup: 'animated fadeOutUp',
        },
        showCloseButton: true,
        html: '<strong> ¡Más tarjetas de crédito es sinónimo de más deudas! </strong> ' +
            '<br><br><br>' +
            '<p class="aliizq">- Es por eso que antes de adquirir una tarjeta de crédito en estos momentos, le aconsejamos analizar si realmente la requiere. </p>' +
            '<br>' +
            '<p class="aliizq">- La tarjeta de crédito puede ser un instrumento útil siempre y cuando se tenga claro cómo funciona y desde luego, pueda manejarla. </p>'
    });
});





$("#r4").click(function() {
    Swal.fire({
        title: 'Información',
        text: 'Framework CSS.',
        imageUrl: 'imagenes/logo1.png',
        imageWidth: 500,
        imageHeight: 400,
        imageAlt: 'Logo',
    });
});



$("#r5").click(function() {
    Swal.fire({
        title: 'Atención Amigo!',
        text: 'Esta ventana va a cerrarse en 3 segundos',
        icon: 'info',
        timer: 3000,
        onOpen: function() {
            swal.showLoading()
        }
    }).then(
        function() {},
        function(dismiss) {
            if (dismiss === 'timer') {
                console.log('Desplegable cerrada')
            }
        }
    )
});