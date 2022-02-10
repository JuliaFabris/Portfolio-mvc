/* npm init -y -> inicializa nuestro package-json. 
Es decir el archivo de formato json donde especificamos la info de configuracion de nuestro proyecto */
/* npm install express -> avisa que vamos a usar express y crea node_modules 
en donde estan todas las dependencias de app de terceros q necesitamos*/
/* El punto de entrada a nuestra aplicacion es app.js asi que cambiamos el index que viene por defecto a app */


/* require (express nos retorna una funcion, asi que hay que invocarla) */
const express = require('express');


/* En la constante app tendremos todos los framework */
const app = express();


/* Hace falta aclararle a Express dónde vamos a estar almacenando esos recursos. */
app.use(express.static('public'));

let mainRouter = require('./routers/mainRouter');


/* Debemos aclararle a Express cuál es el
motor de plantillas que vamos a estar utilizando para que lo use.
Es decir, en app.js debemos especificar el método set() con la propiedad 'view engine' y el
nombre del motor, en este caso EJS. 
El método .set() permite definir configuraciones de Express. Este se ejecuta sobre
la variable que tenga asociada la ejecución de Express, en la mayoría de los casos llamada app.
Recibe dos strings como parámetros:
● El primero será lo que queremos configurar.
● El segundo será el valor de la configuración.*/
app.set('view engine', 'ejs');


/* Rutas home y about */
app.use('/', mainRouter);
app.use('/about', mainRouter);


/* Puerto... en este caso buscaremos como localhost:3000 o localhost:3000/about */
app.listen (3000, () => {
    console.log('Servidor levantado')
});

/* EJS 
Para renderizar necesitamos instalar en nuestro proyecto ejs.
En la terminal escribimos npm i ejs.
Creamos vistas ejs o a las vistas html le cambiamos a ejs */