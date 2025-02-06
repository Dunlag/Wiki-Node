# Repositorio: Wiki de Node.js y Express

Bienvenido a este repositorio, una guía organizada para aprender y dominar **Node.js** y **Express**, con un enfoque en el desarrollo y despliegue de aplicaciones modernas. Aquí encontrarás documentación estructurada en secciones para facilitar el aprendizaje y como referencia para proyectos y exámenes.

## Contenido

### 1. [Introducción a Node.js](introduccion-nodejs.md)
- ¿Qué es Node.js?
- Instalación en Windows y Linux
- Gestión de dependencias, `package.json` y `node_modules`
- Ejemplo básico: Uso de dependencias (`@colors/colors` y `axios`)
- Creacion y uso de módulos

### 2. [Node Core](node-core.md)
- **Objeto Global**: Uso de `__dirname` y `__filename` para rutas absolutas.
- **Control de Procesos**: Gestión de argumentos con `process.argv` y su aplicación práctica.

### 3. [File System](file-system.md)
- **Lectura de Directorios**: Usando `fs` y `fs/promises`.
- **Lectura y Escritura de Ficheros**: Operaciones básicas con `fs.readFile` y `fs.writeFile`.
- **Operaciones Básicas sobre Ficheros**: Renombrar y eliminar archivos.
- **Streams de Lectura**: Manejo de grandes volúmenes de datos de manera eficiente.
- **Streams de Escritura**: Uso del módulo `readline` para crear interfaces de escritura.

### 4. [http - https](http-https.md)
- **Creación de servidores básicos**: Uso del módulo `http` para levantar un servidor simple y procesar solicitudes.
- **Servidores avanzados 01**: Servir archivos estáticos como HTML desde un servidor con `fs.readFile`.
- **Servidores avanzados 02**: Manejo de archivos CSS e imágenes con `fs.createReadStream` y `path`.
- **Peticiones de tipo POST**: Recepción y procesamiento de datos enviados mediante formularios HTML.
- **Respuestas con JSON**: Creación de servidores API simples que devuelven datos en formato JSON.


### 5. [Express.js](express.md)
- **Características de Express.js**: Introducción a Express.js, un framework minimalista y flexible para Node.js que facilita la creación de servidores web.
- **Arquitectura de aplicaciones Express.js**: Estructura básica de una aplicación Express, con rutas, middleware y controladores.
- **Gestión de rutas**: Definición y manejo de rutas HTTP utilizando `app.get`, `app.post`, etc.
- **Parámetros variables en la URL**: Uso de parámetros en las rutas para capturar valores dinámicos desde la URL, como `:id`.
- **Recuperando el body de la petición**: Manejo de datos enviados en el cuerpo de las peticiones, utilizando middleware como `express.json()` o `express.urlencoded()`.
- **Query params**: Acceso a parámetros de consulta en la URL con `req.query`.
- **Creación y uso de middleware**: Implementación de funciones middleware para procesar solicitudes antes de llegar a las rutas o respuestas.
- **Tipos de respuestas**: Envío de respuestas con diferentes formatos, como texto, HTML, JSON, etc., utilizando `res.send`, `res.json`, `res.render`, entre otros.


### 3. Despliegue de Aplicaciones 
- Despliegue de aplicaciones en [Render.com](https://render.com/)

## Cómo usar este repositorio
1. Clona el repositorio:
   ```bash
   git clone https://github.com/Dunlag/Wiki-Node.git
   ```
2. Explora las secciones según tus necesidades.
3. Contribuye: Si encuentras errores o tienes sugerencias, no dudes en abrir un *pull request* o una *issue*.

## Contribución
Este repositorio está diseñado para evolucionar. Si tienes ejemplos, correcciones o nuevas secciones que puedan enriquecer el contenido, eres bienvenido a contribuir.

---

### Autor
**Fernando**  

---

> Nota: Este repositorio está en constante desarrollo. ¡Mantente atento a nuevas actualizaciones!

