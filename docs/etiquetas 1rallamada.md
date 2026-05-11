# Issue #4: Página de empleados

## <form> 
- Descripcion: La base para hacerlo en formato formulario.

## <input type="text" pattern="[0-9]+">
- Descripcion: Fuerza el ingreso unico de numeros.

## <input type="password">
- Descripcion: Oculta los caracteres mostrando asteriscos.

## <button type="submit">Ingresar</button>
- Descripcion: Agrega un boton llamado "Ingresar" del tipo Enviar.

# Issue #12: Espacio de Formularios

## Requiered
- Descripcion: Atributo que indica que es de caracter obligatorio.

## <input type="text" requiered>

## <input type="tel" requiered>

## <input type="email" requiered>
- Descripcion: Valida que tenga un formato tipo @domino.com.

## <textarea requiered></textarea>
- Descripcion: Input de texto que permite varios renglones.

## <select requiered>
- Descripcion: Permite seleccionar una opcion.

## <option>
- Descripcion seleccionable.

## <button type="submit">Enviar Consulta</button>
- Descripcion: Agrega un boton llamado "Enviar Consulta" del tipo Enviar.

# Issue #13: Espacio de usuarios movil

## <input type="tel" requiered >
- Descripcion: Permite el ingreso de caracteres registrados como numeros de telefono.

 ## <input type="tel" inputmode="numeric">
 - Descripcion: Le indica al telefono que se debe usar el teclado numerico.

 ## <input type="tel" pattern="[0-9]+">
 - Descripcion: Solo permite el envio de caracteres del 0 al 9.

 ## <input type="tel" autocomplete="tel">
 - Descripcion: Permite al sistema y/o navegador la sugerencia de numeros previamente guardados por estos mismos.

 # Issue #14: Pagina Trabaja con Nosotros

 ## <input type="email" required>
- Descripcion: Permite el ingreso de caracteres registrados como Emails.

## <input type="email" placeholder="Ej: juan@mail.com"> 
- Descripcion: Muestra un texto en forma de ejemplo en el campo a rellenar.

## <textarea placeholder="Escribe tu mensaje aquí..." required></textarea>
- Descripcion: Input de texto que permite varios renglones y ademas muestra texto en forma de ejemplo en el campo a rellenar.

## <input type="file" accept=".pdf" requiered> 
# (se necesita que la etiqueta <form> tenga el atributo <form enctype="multipart/form-data">)

- Descripcion: Permite ingresar archivos pero solo acepta los de formato pdf.

## <input type="checkbox" requiered>
- Descripcion: Permite seleccionar una o mas opciones.

## <button type="submit">Enviar</button>
- Descripcion: Agrega un boton llamado "Enviar" del tipo Enviar.