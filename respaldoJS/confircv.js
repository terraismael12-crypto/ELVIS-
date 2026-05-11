document.getElementById('Formulariocv').addEventListener('submit', function(event) {
  
  const archivo = document.getElementById('archivoCV').files[0];
  const limiteMB = 5 * 1024 * 1024;

  if (archivo && archivo.size > limiteMB) {
        alert("Su archivo es muy pesado. El máximo son 5MB.");
       return;
  }

  console.log("Enviando formulario con asunto: Solicitud de trabajo");

  document.getElementById('contenedor-formulariocv1').style.display = 'none';
  document.getElementById('contenedor-formulariocv2').style.display = 'none';
  document.getElementById('mensaje-exito-cv').style.display = 'block';
});