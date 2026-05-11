# Selectores

## <header>
- Descripción: Encabezado de la página.
## <nav>
-Descripción: Enlaces de navegación.
## <main>
-Descripción: Contenido principal del documento.
## <section>
-Descripción: Contenido relacionado dentro de la página.
## <article>
-Descripción: Contenido independiente (noticia, post, tarjeta).
## <aside>
-Descripción: Contenido complementario lateral.
## <footer>
-Descripción: Pie de página (autor, derechos, contactos).
## <Div>
-Descripción: Contenedor Generico.
## <A>
-Descripción: Selecciona todos los elementos del tipo A.
## <#id>
-Descripción: Selecciona todos los elementos con esa id.
## <A B>
-Descripción: Selecciona todos los elementos del tipo B que esten dentro de un elemento del tipo A.
## <#id A>
-Descripción: Selecciona todos los elementos del tipo A que esten dentro de un elemento con esa id.
## <.classname>
-Descripción: Selecciona todos los elementos con esa clase.
## <A.classname>
-Descripción: Selecciona todos los elementos A con esa clase.
## <A, B>
-Descripción: Selecciona todos los elementos de ambos tipos. (Es para seleccionar todo junto y no uno por uno)
## <*>
-Descripción: Selecciona todos los elementos.
## <A *>
-Descripción: Selecciona todos los elementos que esten dentro de A.
## <A+B>
-Descripción: Selecciona los elementos del tipo B que este al lado de un elemento A.
## <A~B>
-Descripcion: Selecciona todos los elementos consecuentes del tipo B que esten cerca de un elemento A.
## <"A>B">
-Descripción: Selecciona directamente al único elemento hijo B de un elemento del tipo A. (Un elemento hijo es aquel que es consecuente al elemento principal (A) ).
## <"A :first-child">
-Descripción: Selecciona al elemento más alto en todas las filas del elemento A.
## <"A :only-child">
-Descripción: Selecciona a los elementos que son los únicos dentro de un elemento A.
## <"A :last-child">
-Descripción: Selecciona al elemento más bajo en todas las filas del elemento A.
## <:nth-child(N)>
-Descripción: Selecciona al elemento que este en la posición N contando de izquierda a derecha. Ej: :nth-child(3) elemento nro.3.
## <:nth-last-child(N)>
-Descripción: Selecciona al elemento que este en la posición N pero contando de derecha a izquierda. 
## <A:first-of-type>
-Descripciión: Selecciona al primer elemento del tipo A contando de izquierda a derecha.
## <A:nth-of-type(N)>
-Descripción: Selecciona a los elementos del tipo A que esten en la posición N contando de izquierda a derecha.
## <:nth-of-type(An+N)>
-Descripción: Selecciona a todos los elementos desde la posición N hasta An.
## <:only-of-type>
-Descripción: Selecciona el único elemento de su tipo dentro de otro elemento.
## <:last-of-type>
-Descripción: Selecciona cada último elemento de ese tipo dentro de otro elemento.
## <:empty>
-Descripción: Selecciona elementos que no tienen ningún otro elemento dentro de ellos.
## <:not(X)>
-Descripción: Se cambia X por el nombre de/los elementos a excluir.
## <[attribute]>
-Descripción: Seleccionas a todos los elementos que tengan dicho atributo.
## <A[attribute]>
-Descripción: Selecciona a todos los elementos dentro de A que tengan ese atributo.
## <[attribute]="value">
-Descripción: Selecciona a todos los elementos que tengan un atributo exactamente con ese valor.
## <[attribute^="value"]>
-Descripción: Selecciona a todos los elementos que tengan un atributo que empiece con ese valor.
## <[attribute$="value"]>
-Descripción: Selecciona a todos los elementos que tengan un atributo que termine con ese valor.\
## <[attribute*="value"]>
-Descripción: Selecciona todos los elementos que tengan un atributo que contenga caracteres específicos en cualquier lugar.

---

# Restricciones CSS

- `display`: solo se puede usar `inline` y `block`.
- No usar **box model**:
  - `padding`
  - `mdrain`
  - `border`
  - `position`
 
  - `class`: chi.
  - `id`: ño.
