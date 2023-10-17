function loadingSite(url) {
    Swal.fire({
      title: 'Cargando sitio',
      text: 'Espere un momento...',
      showCancelButton: true, 
      allowOutsideClick: false, 
      onBeforeOpen: () => {
        Swal.showLoading();
      }
    }).then((result) => {
      if (result.isConfirmed) {
        window.open(url, '_blank'); 
      }
    });
  }
  