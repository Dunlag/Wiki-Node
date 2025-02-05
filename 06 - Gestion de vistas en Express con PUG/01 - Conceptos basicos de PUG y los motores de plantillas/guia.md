# Guía para instalar Pug como gestor de vistas en Express

## 1. Instalación de Pug

Si ya estás creando tu servidor Express, puedes instalar Pug como motor de plantillas y configurar Git automáticamente durante la instalación con el siguiente comando:

```bash
npm init express --git --pug
```

Este comando instalará Express, configurará Pug como motor de plantillas, y también generará un archivo `.gitignore` con las configuraciones necesarias para que no subas archivos innecesarios al repositorio.

Una vez instalado, configura Express para usar Pug como el motor de plantillas en tu archivo principal de configuración (generalmente `app.js` o `index.js`):

```javascript
var express = require('express');
var app = express();

// Configurar Pug como motor de vistas
app.set('view engine', 'pug');
```

## 2. Estructura de un archivo `.pug`

A continuación, te proporciono un ejemplo básico de un archivo `index.pug` que puedes usar para probar Pug en tu aplicación:

```pug
//- Título de la página
h1 Titulo de la pagina
h2 subtitulo

div
  p contenido del parrafo 

div 
  a(href="http://google.com" class='', id='') Google.com
  a#enlaceYoutube.enlaceYT.links(href="http://www.youtube.com") Enlace youtube

div 
  p= name
  p me llamo #{name}

div 
  if avaiable 
    p esta disponible 
  else 
    p no esta disponible

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
```

### Explicación del código:
- **Variables dinámicas**: Usamos `#{}` para interpolar variables en el HTML, como en `me llamo #{name}`.
- **Condicionales**: Pug permite usar condicionales con `if` y `else`, como en el bloque `if avaiable`.
- **Bucles**: Para iterar sobre arrays, usamos `each` o el método estándar `for`.
- **Comentarios**: Los comentarios en Pug se hacen con `//` para HTML y `//-` para comentarios dentro de Pug.

## 3. Configuración de las rutas

En el archivo de rutas (por ejemplo, `index.js`), debes pasar los datos necesarios al renderizar la vista:

```javascript
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    name: 'Alberto',
    avaiable: false,
    animales: ['perro', 'gato', 'cuervo', 'tortuga'] 
  });
});

module.exports = router;
```

Este código renderiza la vista `index.pug` y pasa un objeto con las variables `name`, `avaiable` y `animales` para ser utilizadas en la plantilla.

## 4. Ventajas de usar Pug

Pug tiene varias ventajas como motor de plantillas en aplicaciones Express:

- **Sintaxis limpia y sencilla**: Pug utiliza una sintaxis de sangrías en lugar de etiquetas HTML explícitas, lo que hace que el código sea más limpio y legible.
- **Reducción de la verbosidad**: Al eliminar la necesidad de escribir etiquetas de cierre y atributos de manera redundante, el código es más compacto.
- **Potente sistema de plantillas**: Permite la inserción de variables, condicionales, bucles y otros elementos dinámicos de forma eficiente.
- **Soporte para comentarios**: Puedes agregar comentarios tanto en el código HTML como en el archivo Pug.
- **Facilidad de mantenimiento**: Pug hace que sea más fácil mantener y modificar las plantillas a medida que el proyecto crece, ya que las vistas son más fáciles de leer y entender.

## 5. Conclusión

Pug es un excelente motor de plantillas para proyectos Express que permite crear vistas dinámicas de manera eficiente. Su sintaxis minimalista y su potente sistema de plantillas lo convierten en una herramienta valiosa para proyectos web.

Si deseas más información, consulta la [documentación oficial de Pug](https://pugjs.org/).