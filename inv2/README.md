# React 
Es una librería basada en JavaScript y desarrollada por Facebook para crear interfaces de usuario para web y móviles. Por su alto desempeño y modularidad. React es ideal para la creación de aplicaciones que requieren grandes cantidades de datos actualizados en tiempo real, por esto es usado por sitios como Facebook, Netflix,Imgur y Airbnb ente otros.

## Prerrequisitos
Conocimiento de JavaScript.
Conocimiento de HTML y CSS.

## ¿Qué hace diferente a React JS de otras librerias?
Utiliza lenguaje JSX para construir la interfaz de usuario, por lo que si dominas HTML podras con gran facilidad crear tus propios componentes y su comportamiento. JSX crea plantillas donde se pueden anidar elementos, por lo que podrás crear componentes tan pequeños o grandes como creas conveniente.

1. React JS usa un DOM Virtual que recarga individualmente cada componente cuando haga falta, por lo que ofrece una gran velocidad a la hora de renderizar vistas.

2. Los componentes son totalmente independientes y contienen su propio comportamiento, un estado y el contenido a renderizar. Éstos,  contienen elementos que se pueden anidar, igual que podemos anidar componentes y que se comuniquen entre ellos.

3. Las aplicaciones en React JS tienen un estado global que repercute en el estado individual de cada componente.

4. El isomorfismo (renderización HTML en servidor como en cliente)  de React JS ofrece la posibilidad de entregar el HTML ya renderizado a los buscadores web, como Google, y así mejorar el posicionamiento. De esta manera se evita el problema de que el buscador se encuentre el cuerpo de la página vacío).

## Creación de un proyecto React JS

Paso 1. Descargar Node.js
  Para facilitar la creación de un proyecto, su estructura de carpetas, hacer uso de librerias externas y el despliegue local de la           aplicación usaremos npm. Para hacer uso de ello tenemos que tener descargado e instalado Node.js en nuestro equipo.
  En este link: https://nodejs.org/en/download/

Paso 2. Instalar create-react-app
  Gracias a create-react-app podremos, con un simple comando, crear nuestra primera aplicación con React JS. Para instalar este paquete,   usaremos npm y lo instalaremos de forma global usando el parametro –g.
 Deberás abrir la consola de comandos (cmd en Windows, Terminal en Mac) y escribir lo siguiente:
  ###### npm install -g create-react-app
Este paso suele ser algo largo, pero sabremos identificar cuando ha terminado de instalar con facilidad.

Paso 3. Crear proyecto React con create-react-app
  Con la consola de comandos y haciendo uso del comando cd nos colocaremos en la carpeta donde queremos que se almacene nuestro proyecto    de React JS. Por ejemplo, vamos a crearlo dentro de la carpeta react que se encuentrará en el Escritorio: 
 ###### cd C:\Users\nombreUsuario\Desktop\react. 
   Donde nombreusuario es el nombrel tu usuario y react la carpeta que debes haber creado previamente en el escritorio.
Una vez que ya estamos colocados en la carpeta que queremos, simplemente usaremos create-react-app para crear el proyecto, que llamaremos, por ejemplo, prueba-react.

###### create-react-app prueba-react

La creación puede que lleve un rato, pero sabremos que ha acabado cuando salga un mensaje de éxito y nos indique que el proyecto ya está disponible en el directorio donde nos situámos.


Paso 4. Comprender la Estructura del Proyecto creado
  Es importante conocer la estructura del proyecto, dado que será la base de nuestra aplicación.

###### Carpeta node_modules
  Aquí se guardan todas las dependencias ppm del proyecto que vayamos necesitando. Create-react-app ya nos habrá instalado unas cuantas   por defecto.

###### Carpeta public
  Esta es la raíz del proyecto y aquí estará el archivo principal: index.html y el favicon: icono que aparecerá en la pestaña del         navegador cuando despleguemos la aplicación. Habrá una etiqueta <div> dentro de index.html con un id “root” que nos indica dónde se va   a introducir el componente principal (App.js) de nuestra aplicación.
  
###### Carpeta src
  En esta carpeta, es donde están los componentes y sus estilos, a parte de otros ficheros js que necesitemos. Por defecto, el componente principal de todo proyecto React JS se llama App.js. También habrá un index.js que se encarga de introducir el componente App en el <div> de index.html que hemos mencionado en el punto anterior.

  Encontramos a la misma altura, las hojas de estilo: App.css e index.css; una imagen (svg) del logo de React JS; un archivo para realizar tests sobre el componente App y un archivo javascript llamado registerServiceWorker.js.

###### Archivo readme.md
  Se trata de un fichero de informacion sobre el proyecto.

###### Archivo package.json
  Aquí encontramos las dependencias de npm que hayamos instalado en el proyecto, tanto para desarrollo como para producción.

###### Archivo .gitignore
  Documento donde se definen aquellos archivos a ignorar en git.
  

Paso 5. Desplegar el proyecto y visualizarlo en el navegador
  El proyecto a estas alturas es perfectamente desplegable. Obviamente, es el proyecto por defecto que nos ha ofrecido create-react-app.

  Para poder desplegar el proyecto en nuestro entorno local (localhost) usaremos un comando npm que nos abrirá el navegador que tengamos   predeterminado y en una pestaña nueva nos mostrara la interfaz de usuario definida. Tenemos que estar en la carpeta del proyecto, por   lo que haremos cd para entrar en pruebaReact y desde ahí podremos hacer:

###### npm start



