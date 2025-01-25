# Node Core

En esta sección exploramos dos conceptos fundamentales del núcleo de Node.js: el objeto global y el control de procesos. Estas herramientas son esenciales para trabajar con Node.js de manera eficiente y construir aplicaciones portables y dinámicas.

---

## 1. Objeto Global

### Archivos relacionados:
- `index.js`

En Node.js, el objeto global proporciona variables y funciones que están disponibles en todo el entorno sin necesidad de importarlas. Entre las más útiles encontramos:

### `__dirname` y `__filename`

- **`__dirname`**: Proporciona la ruta absoluta al directorio del archivo que se está ejecutando.
- **`__filename`**: Proporciona la ruta absoluta del archivo actual.

#### Ejemplo:
```javascript
console.log(__dirname);
console.log(__filename);
```

#### Salida esperada:
Ejecutando este archivo desde cualquier lugar, obtendremos:
```
/home/usuario/proyecto
/home/usuario/proyecto/index.js
```
Esto permite que el código sea independiente del sistema operativo, lo que facilita localizar rutas relativas para cargar archivos o módulos.

---

## 2. Control de Procesos

### Archivos relacionados:
- `index.js`

El módulo `process` en Node.js permite interactuar con el proceso actual en ejecución. Entre sus propiedades más utilizadas se encuentra `process.argv`, que es una matriz que contiene los argumentos pasados al ejecutar el archivo.

### `process.argv`

#### Ejemplo:
```javascript
console.log(process.argv);
```
Si ejecutamos el archivo con:
```bash
node index.js --nombre Ines --edad 35
```
La salida incluirá:
```
[
  '/usr/bin/node',
  '/home/usuario/proyecto/index.js',
  '--nombre',
  'Ines',
  '--edad',
  '35'
]
```

### Función para obtener parámetros personalizados
Podemos extraer argumentos específicos mediante una función:

#### Código:
```javascript
function getParam(param){
    const index = process.argv.indexOf(param);
    return  index === -1 ? null : process.argv[index+1];
}

const nombre = getParam('--nombre');
const edad = getParam('--edad');

if(nombre && edad){
    console.log('El nombre es ' + nombre + ' y la edad es: ' + edad);
}else{
    console.log('Alguno de los dos tiene un error');
}
```

#### Ejecución:
```bash
node index.js --nombre Ines --edad 35
```

#### Salida esperada:
```
El nombre es Ines y la edad es: 35
```

Si faltan parámetros o están mal escritos, mostrará:
```
Alguno de los dos tiene un error
```

### Aplicaciones comunes:
- Envío de parámetros para personalizar la ejecución del programa.
- Pasar configuraciones rápidas sin necesidad de archivos de configuración externos.

---

Con estas herramientas, puedes crear programas portables y flexibles que interactúan fácilmente con el sistema operativo y con datos proporcionados por el usuario en la línea de comandos.

