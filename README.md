
![Logo](https://i.ibb.co/X87LTv3/Logo.png)


# TP Frontend para Codo a Codo Full Stack 👋


## Autores

- Lucia Iribarren [@luchireps](https://www.github.com/octokatherine)
- Federico Fenner [@fedefenner](https://www.github.com/fedefenner)
- Sebastian Villafañe [@sheyk87](https://www.github.com/sheyk87)


## 🛠 Tecnologías

[![My Skills](https://skillicons.dev/icons?i=js,html,css)](https://www.w3schools.com/)
## Características

- Flex
- Grid
- Media
- Transform
- Transition
- Animation


## Documentation

### a. Estructura que comparten todas las páginas:
1. Header-Barra de navegación:
- Posee "display: flex" y "flex-wrap: wrap"
- Cuenta con: Logo del sitio, nombre del sitio, menú de navegación
- Posee propiedad Fixed, por lo que siempre está visible
- Es responsive, al llegar a 840px de ancho, el menú se convierte en Menú Hamburguesa, funciona mediante JS (script.js)
- Al pasar el puntero sobre el menú(Hover):
   - Posee una animación en los links, en la cual aparecen lineas horizontales sobre y debajo del menú.
   - Cambio de color de blanco a amarillo anaranjado
   - Cuenta en su parte inferior con una barra horizontal que carga a medida que se hace scroll vertical, funciona mediante JS (script.js).
   - Al hacer click para cambiar a cada página, esa etiqueta "a" seleccionada recibe la clase "active", por lo que el color de las letras pasan de blanco a amarillo anaranjado.
   - Es responsive, las secciones se acomodan hacia abajo al llegar a 840px
- Se carga en esta sección
  - Favicon
  - Background Image
  - CSS que cambia el estilo de las barras de scroll, las cuales son de un color amarillo, correspondiente al de "Codo a Codo"

2. Body: Contenido correspondiente de cada página

3. Footer: Cuenta con 3 secciones:
- Posee "display: flex" y "flex-wrap: wrap"
  - El Grupo: Link hacia página "Sobre Nosotros", y los links hacia las cuentas Github de cada integrante del grupo
  - Navegación: Links hacia las diferentes páginas del sitio
  - Acceso al Código: Íconos obtenidos mediante CDN de Font-Awesome
    - Ícono Github con link hacia del repositorio del sitio
    - Ícono con link hacia la publicación del sitio en Github Pages
    - Validación en página validator.w3.org (Cada página tiene su propio link correspondiente al validador)
  - Es responsive, las secciones se acomodan hacia abajo al llegar a 767px y 574px

### b. El sitio cuenta con 6 páginas:
1. Inicio
2. Galería
3. Mitología
4. Historia
5. Contacto
6. Sobre Nosotros

- 1- Inicio:
  - Son 3 cards, con "display: flex"
  - Cada Card posee:
    - Imágen representativa de la sección a la que corresponde, con efecto hover
    - Título de la card
    - Texto descriptivo
    - 1 Boton con efecto hover, que lleva correspondientemente a las siguientes secciones del sitio: Galería, Mitología, Historia

- 2- Galeria:
  - Es un slider de imágenes, con display: inline-block
  - Funciona con JS (carrusel.js)
  - Para el efecto de slider, posee conbinación de "transform: translate", transition y "animation: animate"

- 3- Mitología
  - Posee "display: grid"
  - Es responsive con 3 cortes:
    - "min-width: 769px": 6 columnas y 8 filas
    - "(min-width:601px) and (max-width: 768px)": 4 columnas y 7 filas
    - "max-width: 600px": 2 columnas y 10 filas

- 4- Historia:
  - Maquetación de simples etiquetas div, p y h3
  - Cuenta con una etiqueta p, id="parrafo", la cual:
    - Posee propiedad "position: fixed", para que siempre se vea, y baja al hacer scroll vertical.
    - Mediante JS (historia.js), se controla la posición Top de tema2 y tema3, para cambiar el texto de la etiqueta.

- 5- Contacto:
  - Formulario de contacto, con propiedad "display: flex"
  - Botones con efecto hover
  - Cada input cuenta transition y transform, para animar el nombre del input al hacer foco, y que aparezca el placeholder
  - Se controla mediante JS (form.js):
    - El text-area Mensaje, posee las propiedades minlength="10" y maxlength="136" 
    - Que cada campo no este vacío
    - Que el campo Email posea el fomato correcto
    - Que se haya seleccionado el motivo
    - Que se haya marcado el check de Términos y Condiciones
    - Si algun control no cumple, se indica mediante un cartel pop-up (libreria sweetalert2)

- 6- Sobre nosotros:
  - Son 3 flip-cards, con las fotos de los integrantes del frupo
  - Poseen propiedad "display: flex" y "flex-wrap: wrap" y "justify-content: center"
  - Efecto hover en cada Card, con transform de 180deg, el cual muestra información de los integrantes del grupo y medios de contacto.
## Publicación Github Pages

https://luchireps.github.io/FRONTEND.TP/


## Screenshots

- Barra de Navegación
![App Screenshot](https://i.ibb.co/LpDs8ck/Barra.png)

- Footer
![App Screenshot](https://i.ibb.co/BZkyTyd/Footer.png)

- Index
![App Screenshot](https://i.ibb.co/QvSB7Yz/Index.png)

- Galeria
![App Screenshot](https://i.ibb.co/yhFhNYr/Galeria.png)

- Mitologia
![App Screenshot](https://i.ibb.co/qBtRLtb/Mitologia.png)

- Historia
![App Screenshot](https://i.ibb.co/dWRcXnV/Historia.png)

- Contacto
![App Screenshot](https://i.ibb.co/WkhNpYW/Contacto.png)

- Nosotros
![App Screenshot](https://i.ibb.co/FBRJcbY/Nosotros.png)