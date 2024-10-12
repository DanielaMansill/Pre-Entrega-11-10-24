document.getElementById('Agregar').addEventListener('click', function(event) {
    event.preventDefault();

    const anio = document.getElementById('lanzamiento').value;
    const descripcion = document.getElementById('descripcion').value;
    const url = document.getElementById('url').value;


    if ( anio === ''|| url === ''|| descripcion === '' ) {
      Swal.fire({
        icon: 'warning',
        title: 'Campos incompletos',
        text: 'Todos los campos deben estar completos',
      });
    } 
  });
