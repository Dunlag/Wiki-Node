
# Guía de Integración de Pug con Bootstrap en Node.js y Express

Esta guía cubre la integración de Bootstrap con el motor de plantillas Pug para facilitar la creación de diseños rápidos y fluidos en aplicaciones Node.js y Express.

## Integración de Bootstrap en Pug

Para integrar Bootstrap, puedes incluir los links de CSS y JS directamente en tu archivo `layout.pug`. Estos links se pueden obtener desde el sitio web [BootstrapCDN](https://www.bootstrapcdn.com/). Aquí te muestro cómo integrarlos en tu archivo `layout.pug`:

```pug
doctype html
html
  head
    title= title
    link(rel="stylesheet", href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css", integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH", crossorigin="anonymous")
    link(rel='stylesheet', href='/stylesheets/style.css')
  body
    nav.navbar.bg-body-tertiary
      .container-fluid
        span.navbar-brand.mb-0.h1 Navbar

    .container
      block content

    script(src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js", integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy", crossorigin="anonymous")
```

Este archivo `layout.pug` incluye:

- Bootstrap CSS y JS desde CDN.
- Un Navbar básico de Bootstrap.
- Un bloque `content` que se puede sobrescribir en otros archivos Pug, como `index.pug`.

## Estructura de la Página en `index.pug`

En tu archivo `index.pug`, puedes usar la estructura de la siguiente manera:

```pug
extends layout

block content
  .row
    .col-12.col-md-6
      p Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur sapiente fuga, ducimus laboriosam temporibus vitae eum harum iste, laudantium dolorem atque praesentium ex odio libero, aspernatur fugiat velit labore laborum!
    .col-12.col-md-6
      p Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium incidunt repudiandae est delectus corporis quidem, natus accusantium inventore libero! Quidem, eaque! Vel reiciendis obcaecati ea praesentium optio vitae, iure consequuntur.

  .row
    .col-12.col-md-3.offset-md-3
      .card(style="width: 18rem;")
        img.card-img-top(src="..." alt="...")
        .card-body
          h5.card-title Card title
          p.card-text Some quick example text to build on the card title and make up the bulk of the card's content.
          a.btn.btn-primary(href="#") Go somewhere
    .col-12.col-md-3
      .card(style="width: 18rem;")
        img.card-img-top(src="..." alt="...")
        .card-body
          h5.card-title Card title
          p.card-text Some quick example text to build on the card title and make up the bulk of the card's content.
          a.btn.btn-primary(href="#") Go somewhere
```

Este código utiliza:

- La estructura de filas (`row`) y columnas (`col`) de Bootstrap para crear una página responsive.
- Tarjetas (`card`) de Bootstrap para mostrar contenido de forma estilizada.

## Uso de HTML dentro de Pug

Aunque estamos utilizando Pug como motor de plantillas, también es posible escribir directamente HTML dentro de un archivo `.pug`. Si en algún momento necesitas agregar código HTML sin convertirlo a formato Pug, puedes hacerlo así:

```pug
block content
  .row
    .col-12
      // Esto es HTML puro dentro de Pug
      <div class="alert alert-warning" role="alert">
        Este es un mensaje de alerta en HTML.
      </div>
```

