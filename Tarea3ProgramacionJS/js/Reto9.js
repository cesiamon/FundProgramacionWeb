document.addEventListener('DOMContentLoaded', function () {
    const radioButtons = document.querySelectorAll('input[name="payment-method"]');
    const paymentInfoDiv = document.getElementById('divPaymentInfo');

    radioButtons.forEach(function (radio) {
        radio.addEventListener('change', function () {
            if (radio.checked) {
                paymentInfoDiv.style.display = 'block';
                mostrar(); 
            } else {
                paymentInfoDiv.style.display = 'none';
            }
        });
    });

    const checkbox = document.getElementById('checkbox');
    const discountCodeInput = document.getElementById('discountCode');

    checkbox.addEventListener('change', function () {
        // Check if the checkbox is checked
        if (checkbox.checked) {
            // Display the discountCode input field if it is checked
            discountCodeInput.style.display = 'block';
        } else {
            // Hide the discountCode input field if it is not checked
            discountCodeInput.style.display = 'none';
        }
    });

});

document.addEventListener('DOMContentLoaded', function () {
    // Obtén el botón "Pay"
    const payButton = document.getElementById('pay-button');

    // Agrega un controlador de eventos al botón "Pay"
    payButton.addEventListener('click', function () {
        // Obtiene los campos de entrada
        const cardNameInput = document.getElementById('cardName');
        const cardNumberInput = document.getElementById('cardNumber');
        const expirationDateInput = document.getElementById('expirationDate');
        const billingAddressInput = document.getElementById('billingAddress');

        // Elimina las clases de estilo previas para restablecer los bordes
        cardNameInput.classList.remove('error');
        cardNumberInput.classList.remove('error');
        expirationDateInput.classList.remove('error');
        billingAddressInput.classList.remove('error');

        // Verifica si los campos están vacíos y aplica el estilo de borde rojo
        if (cardNameInput.value.trim() === '') {
            cardNameInput.classList.add('error');
        }
        if (cardNumberInput.value.trim() === '') {
            cardNumberInput.classList.add('error');
        }
        if (expirationDateInput.value.trim() === '') {
            expirationDateInput.classList.add('error');
        }
        if (billingAddressInput.value.trim() === '') {
            billingAddressInput.classList.add('error');
        }

        // Verifica si hay campos vacíos y muestra la alerta de error
        if (cardNameInput.value.trim() === '' || cardNumberInput.value.trim() === '' || expirationDateInput.value.trim() === '' || billingAddressInput.value.trim() === '') {
            Swal.fire({
                icon: 'error',
                iconColor: '#3a7aa5',
                text: 'Campos vacíos. Intentar de nuevo por favor.',
            });
        } else {
            // Si todos los campos están llenos, muestra la alerta de éxito
            Swal.fire({
                icon: 'success',
                iconColor: '#1df914',
                text: 'Informacion verifica!',
            });
        }
    });
});



function mostrar() {
    if (document.getElementById('visaRadio').checked) {
        visa();
    }
    if (document.getElementById('paypalRadio').checked) {
        paypal();
    }
    if (document.getElementById('amexRadio').checked) {
        amex();
    }
    if (document.getElementById('mastercardRadio').checked) {
        mastercard();
    }
}

function visa() {
    Swal.fire({
        title: 'Visa, siempre con vos!',
        icon: 'success',
        iconColor: '#3a7aa5',
        text: 'Acompañandote desde 1958.',
        imageUrl: "img/tarjetas/visa.png",
        imageWidth: 300,
        imageHeight: 256,
        confirmButtonText: "Aceptar",
    })
}

function paypal() {
    Swal.fire({
        title: 'Rapido y sencillo',
        icon: 'success',
        iconColor: '#3a7aa5',
        text: 'Tus pagos en la mejor plataforma',
        imageUrl: "img/tarjetas/paypal.png",
        imageWidth: 256,
        imageHeight: 256,
        confirmButtonText: "Aceptar",
    })
}

function amex() {
    Swal.fire({
        title: 'No salgas sin ella!',
        icon: 'success',
        iconColor: '#3a7aa5',
        text: 'Tu mejor version con American Express',
        imageUrl: "img/tarjetas/amex.png",
        imageWidth: 256,
        imageHeight: 256,
        confirmButtonText: "Aceptar",
    })
}

function mastercard() {
    Swal.fire({
        title: 'Hay cosas que el dinero no puede comprar,',
        icon: 'success',
        iconColor: '#3a7aa5',
        text: 'Para todo lo demas, existe MasterCard.',
        imageUrl: "img/tarjetas/mastercard.png",
        imageWidth: 300,
        imageHeight: 200,
        confirmButtonText: "Aceptar",
    })
}