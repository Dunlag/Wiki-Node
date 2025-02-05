# Guía para trabajar con plantillas en Pug en Express.js

## Introducción

Pug es un motor de plantillas para Node.js que te permite generar HTML de manera más concisa y limpia. En esta guía, aprenderás cómo crear y utilizar plantillas en Pug dentro de tu aplicación Express.

## Estructura Básica de una Plantilla

Una plantilla en Pug se compone de un conjunto de bloques y extendidos que ayudan a estructurar y reutilizar el código HTML.

### Ejemplo de `layout.pug`

En este archivo definimos la estructura base de nuestra página web. El contenido específico de cada página se insertará en los bloques definidos en este layout.

```pug
doctype html
html
  head
    title= title
    link(rel='stylesheet', href='/stylesheets/style.css')
  body
    block content
    footer
      block footer
```

- **`doctype html`**: Define el tipo de documento como HTML5.
- **`html`**: Etiqueta raíz del documento.
- **`head`**: Define el encabezado de la página donde se incluyen elementos como el título y enlaces a archivos de estilo.
- **`block content`**: Un bloque donde se inyectará el contenido específico de cada página que extienda este layout.
- **`footer`**: Un bloque para definir un pie de página que se puede personalizar.

### Ejemplo de `index.pug`

Este archivo es un ejemplo de cómo extender el layout y definir contenido específico dentro de los bloques.

```pug
extends layout.pug

block content
  h1 Titulo de la página
  h2 subtitulo

  div
    p contenido del párrafo

  div 
    a(href="http://google.com" class='', id='') Google.com
    a#enlaceYoutube.enlaceYT.links(href="http://www.youtube.com") Enlace YouTube

  div 
    p= name
    p me llamo #{name}

  div 
    if avaiable
      p está disponible
    else
      p no está disponible

  div 
    ul 
    - for(let i = 0; i < animales.length; i++)
      li= animales[i]

  div 
    - animales = []
    // Comentarios en HTML 
    //- Comentarios de tipo PUG
    ul 
      each animal in animales 
        li Animal: #{animal}
      else 
        li No hay animales

block footer
  p Lista de animales
```

### Explicación

1. **`extends layout.pug`**: Este comando indica que estamos utilizando la plantilla base `layout.pug` para definir la estructura general de la página.
2. **`block content`**: En este bloque se define el contenido específico de la página. Pug permite insertar variables y lógica condicional de manera sencilla.
