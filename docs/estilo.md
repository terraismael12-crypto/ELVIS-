# Selectores

## <"header>
- Descripción: Encabezado de la página.
## <"nav>
-Descripción: Enlaces de navegación.
## <"main>
-Descripción: Contenido principal del documento.
## <"section>
-Descripción: Contenido relacionado dentro de la página.
## <"article>
-Descripción: Contenido independiente (noticia, post, tarjeta).
## <"aside>
-Descripción: Contenido complementario lateral.
## <"footer>
-Descripción: Pie de página (autor, derechos, contactos).
## <"Div>
-Descripción: Contenedor Generico.
## <"A>
-Descripción: Selecciona todos los elementos del tipo A.
## <#id>
-Descripción: Selecciona todos los elementos con esa id.
## <"A B>
-Descripción: Selecciona todos los elementos del tipo B que esten dentro de un elemento del tipo A.
## <#id A>
-Descripción: Selecciona todos los elementos del tipo A que esten dentro de un elemento con esa id.
## <.classname>
-Descripción: Selecciona todos los elementos con esa clase.
## <"A.classname>
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
## <"A>B>
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

---

# Flexbox

## <justify-content: flex-end;>
-Descripción: Alineación al final del eje horizontal.

## <justify-content: center;>
-Descripción: Centrado en el eje horizontal.

## <justify-content: space-around;>
-Descripción: Espacio equitativo al rededor de los elementos.

## <justify-content: space-between;>
-Descripción: Espacio máximo entre los elementos epujando los bordes.

## <align-items: flex-end;>
-Descripción: Alineación al fondo del eje vertical.

## <justify-content: center;>
-Descripción: Centro absoluto horizontal.

## <align-items: center;>
-Descripción: Centro absoluto vertical.

## <flex-direction: row-reverse;>
-Descripción: Invierte el orden de la fila.

## <flex-direction: column;>
-Descripción: Cambia la fila por una columna.

## <order: 1;>
-Descripción: Mueve un elemento específico al final de la fila.

## <order: -1;>
-Descripción: Fuerza a un elemento específico a ir al principio de todo.

## <align-self: flex-end;>
-Descripción: Alinea a un solo elemento al fondo.

## <flex-wrap: wrap;>
-Descripción: Permite que los elementos salten a una nueva fila si no caben.

## <align-content: flex-start;>
-Descripción: Alinea bloques de múltiples filas hacia el principio del eje vertical.

## <align-content: flex-end;>
-Descripción: Alinea bloques de múltiples filas hacia el final del eje vertical.

---

# Box Model

## Padding
 
 ### <padding-top;>
 (Controla el espacio superior).

 <padding-right;>
 (Controla el espacio derecho).

 ### <padding-bottom;>
 (Controla el espacio inferior).

 ### <padding-left;> (Controla el espacio izquierdo).
 
 ####  Atajos

 ### <padding: 10px 20px 15px 5px;> 
 (Arriba, Derecha, Abajo, Izquierda).

 ### <padding: 10px 20px;>
 (Arriba/Abajo, Izquierda/Derecha).

 ### <padding: 15px;>
 (El mismo valor para los 4 lados).
 
## Border
  
  ### <border-radius;>
  (Controla la curvatura de las esquinas del borde).

  ### <border-width;>
  (Define el grosor).

  ### <border-style;>
  (Define el tipo de línea).

  ### <border-color;>
  (Define el color).

 #### Atajos

  ### <border: 2px solid #333;>
  (Combina las últimas tres en una sola línea para todo el elemento).

## Margin

 ### <margin-top;> 
 (Controla el espacio superior).

 ### <margin-right;> 
 (Controla el espacio derecho).

 ### <margin-bottom;> 
 (Controla el espacio inferior).

 ### <margin-left;> 
 (Controla el espacio izquierdo).
 
 #### Atajos

 ### <margin: 10px 20px 15px 5px;> 
 (Arriba, Derecha, Abajo, Izquierda).

 ### <margin: 10px 20px;>
 (Arriba/Abajo, Izquierda/Derecha).

 ### <margin: 15px;>
 (El mismo valor para los 4 lados).

 ### <margin: 0 auto;>
 (El navegador se encarga de calcular los margenes y centrar el elemento).

## Box-Sizing 

 ### <box-sizing: content-box;>
 (Suma el tamaño del elemento mas las medidad de padding y border 
 Ej: Suma=100+10+10+2+2=124).

 ### <box-sizing: border-box;>
 (Ajusta el tamaño del elemento para que al sumar todo de el valor buscado 
 Ej: 100px).

 ---

# Unidades Absolutas y Relativas

## Unidades Absolutas
Tienen un valor fijo y físico que no cambia independientemente del tamaño de la pantalla, del dispositivo o de la configuración del usuario.

#### Ej: px/cm/mm/in/pt.
Los píxeles son los más usados para páginas webs y los centímetros se suelen utilizar cuando se crea algo para imprimir. 

## Unidades Relativas
No tienen un valor fijo. Su tamaño depende de otro factor, como el tamaño del texto del navegador, el tamaño del elemento contenedor o las dimensiones de la pantalla.

#### Ej: rem/em/%/vw/vh,.
Rem: es relativa al tamaño de fuente del elemento raíz (html). Por defecto, la mayoría de los navegadores web tienen una raíz de 16px, por lo que 1rem equivale a 16px                      

##### -(Suele ser usado para textos).

Em: es relativa al tamaño de fuente de su propio contenedor o del mismo elemento. Si el contenedor tiene font-size=20px, entonces 1em en ese contenedor serán 20px.

##### -(Conviene usarlo en elementos pequeños donde quieres que todo guarde una proporción interna).

%: es relativa al tamaño del elemento padre. Si el padre mide 500px de ancho, un hijo con width: 50%; medirá 250px.

##### -(Es usado para columnas y estructuras internas).

Vm: es relativa al ancho de la pantalla de visualización. 100vw equivale exactamente al 100% del ancho total de la ventana.

Vh: es relativa al alto de la pantalla de visualización. 100vh equivale exactamente al 100% de la altura de la ventana.

##### -(Vm y Vh suelen usarse en pantallas de inicio para que ocupe todo sin importar la pantalla).