# Deployment in Render

## Description:

With the objective of deploying the backend of the phone book in [render](https://render.com/). Separate this app into a new repository. The new repository can be found here [phonebook-backend](https://github.com/fernargdev/phonebook-backend). The URL of the deployment can be found here: [phonebook-backend-render](https://phonebook-backend-gqub.onrender.com/)

## URL:

- Deployment in render: https://phonebook-backend-gqub.onrender.com/

## Errores:

- Parece ser que la funcionalidad de actualizar los numeros de telefono no funciona debido a problemas con el server porque json server funcionaba

## Ejercicios:

### 3.11 pila completa de agenda telefónica

Genere una compilación de producción de su interfaz y agréguela a la aplicación de Internet utilizando el método presentado en esta parte.

NB: si usa Render, asegúrese de que el directorio dist no esté ignorado.

Además, asegúrese de que la interfaz aún funcione localmente (en modo de desarrollo cuando se inicia con el comando npm run dev ).

Si tiene problemas para que la aplicación funcione, asegúrese de que la estructura de su directorio coincida con la aplicación de ejemplo .

- Para hacer esto, el primer paso seria ver que funcione correctamente con la extructura actual. ✅
- Despues hacer el build y ver que funcione correctamente en local. ✅
- Despues actualizar el repositorio que se esta desplegando.

### 3.12: base de datos de línea de comandos:

1. Cree una base de datos MongoDB basada en la nube para la aplicación de agenda telefónica con MongoDB Atlas. ✅

2. Cree un archivo mongo.js en el directorio del proyecto, que se puede usar para agregar entradas a la agenda telefónica y para enumerar todas las entradas existentes en la agenda telefónica.

- NB: ¡ No incluya la contraseña en el archivo que confirma y envía a GitHub!

3. La aplicación debería funcionar de la siguiente manera. Utiliza el programa pasando tres argumentos de línea de comando (el primero es la contraseña), por ejemplo:

   - node mongo.js yourpassword Anna 040-1234556
   - added Anna number 040-1234556 to phonebook
   - node mongo.js yourpassword "Arto Vihavainen" 045-1232456

- Nota: no cierres la conexión en el lugar equivocado . Por ejemplo, el siguiente código no funcionará:
- NB: Si define un modelo con el nombre Person , mongoose nombrará automáticamente la colección asociada como people .
