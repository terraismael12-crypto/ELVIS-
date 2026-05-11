document.getElementById('Formularioconsulta').addEventListener('submit', function(event) {
 
  event.preventDefault();

  
  console.log("Enviando formulario con asunto: Consulta");

  document.getElementById('contenedor-formularioconsulta1').style.display = 'none';
  document.getElementById('contenedor-formularioconsulta2').style.display = 'none';
  document.getElementById('mensaje-exito-consulta').style.display = 'block';
});