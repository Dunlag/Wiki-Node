# Desplegando un Proyecto en Render

## 1. Registro en Render.com
Para desplegar nuestro proyecto en Render, lo primero que debemos hacer es registrarnos en [Render.com](https://render.com). La mejor opción es registrarse utilizando **GitHub**, ya que esto nos permitirá sincronizar fácilmente nuestro código.

---

## 2. ¿Qué es Render y qué opciones ofrece?
Render es una plataforma de **hosting en la nube** que nos permite desplegar aplicaciones web, servidores, bases de datos y otros servicios sin necesidad de administrar servidores manualmente.

### Opciones principales de Render:
- **Static Sites**: Para alojar sitios estáticos sin backend.
- **Web Services**: Para aplicaciones con backend en Node.js, Python, Ruby, etc.
- **Background Workers**: Para procesos en segundo plano.
- **Cron Jobs**: Para ejecutar tareas programadas.
- **Databases**: Bases de datos PostgreSQL totalmente administradas.

---

## 3. Subiendo un Proyecto a GitHub
Antes de desplegar en Render, nuestro código debe estar alojado en GitHub. Para ello:

### Opción 1: Desde la terminal
```sh
# Inicializar Git en el proyecto
git init

# Conectar con un repositorio remoto en GitHub
git remote add origin https://github.com/tuusuario/tu-repositorio.git

# Añadir y subir los archivos
git add .
git commit -m "Primer commit"
git push -u origin main
```

### Opción 2: Usando GitHub Desktop
1. Abrir GitHub Desktop.
2. Seleccionar "Add Local Repository" y elegir la carpeta del proyecto.
3. Hacer commit de los cambios.
4. Publicar el repositorio en GitHub.

---

## 4. Configurando Render
Una vez que tenemos el código en GitHub:
1. En Render, ir a **New > Web Service**.
2. Seleccionar el repositorio donde está nuestro código.
3. Configurar las opciones básicas:
   - **Nombre del servicio**.
   - **Región** en la que queremos desplegarlo.
   - **Rama principal** (por defecto, `main`).
4. Render detectará automáticamente que es un proyecto **Node.js**.
5. En la sección de **Build Command**, cambiar `$yarn` por:
   ```sh
   npm install
   ```
6. En la sección **Start Command**, asegurarnos de usar:
   ```sh
   npm start
   ```
   ⚠️ **No usar** `npm run dev`, ya que Render no reconoce `nodemon` y fallará el despliegue.

---

## 5. Configuración Avanzada
En la pestaña **Advanced**, podemos añadir **variables de entorno**, como:
- `PORT=3000`
- `API_KEY=tu_api_key`

Esto es útil si nuestra aplicación necesita credenciales o configuraciones específicas.

---

## 6. Desplegando la Aplicación
1. Pulsar **Create Service**.
2. Render clonará el código desde GitHub e instalará todas las dependencias.
3. Una vez finalizado el proceso, Render generará una **URL pública** para nuestro proyecto.

---

## 7. Actualizando la Aplicación
Cada vez que hagamos cambios en nuestro código, simplemente debemos subirlos a GitHub:
```sh
git add .
git commit -m "Actualización del código"
git push origin main
```
Render detectará los cambios y hará automáticamente un nuevo despliegue.

---

## 8. Alternativas a Render
Si queremos probar otros servicios similares, algunas opciones son:
- **Vercel**: Más enfocado en aplicaciones frontend y Node.js.
- **Heroku**: Similar a Render, pero con ciertas limitaciones en la versión gratuita.
- **Railway**: Muy flexible y con buen soporte para bases de datos.
- **Fly.io**: Ideal para despliegues con Docker.

---

## Conclusión
Render es una excelente opción para desplegar aplicaciones de manera sencilla y gratuita. Con unos pocos pasos, podemos tener nuestra aplicación en línea y lista para ser utilizada. 🚀

