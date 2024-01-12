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

### 3.12: base de datos de línea de comandos ✅:

1. Cree una base de datos MongoDB basada en la nube para la aplicación de agenda telefónica con MongoDB Atlas. ✅

2. Cree un archivo mongo.js en el directorio del proyecto, que se puede usar para agregar entradas a la agenda telefónica y para enumerar todas las entradas existentes en la agenda telefónica. ✅

- NB: ¡ No incluya la contraseña en el archivo que confirma y envía a GitHub! ✅

3. La aplicación debería funcionar de la siguiente manera. Utiliza el programa pasando tres argumentos de línea de comando (el primero es la contraseña), por ejemplo: ✅

   - node mongo.js yourpassword Anna 040-1234556
   - added Anna number 040-1234556 to phonebook
   - node mongo.js yourpassword "Arto Vihavainen" 045-1232456

- Nota: no cierres la conexión en el lugar equivocado . Por ejemplo, el siguiente código no funcionará: ✅
- NB: Si define un modelo con el nombre Person , mongoose nombrará automáticamente la colección asociada como people . ✅

#### Pasos:

1. Crearme una cuenta en (MongoDB Atlas)[https://www.mongodb.com/atlas/database] ✅
2. Conectarme con MongoDB ✅
3. Crear objetos basados en un modelo en una coleccion y db especifica. ✅
4. Ser capaz de recuperar esos objetos a ver si crearon bien sin la necesidad de ir a la web ✅

- NO LOGRE FORMAR DE CORREGIR EL ERROR QUE DA AL CONECTARSE CON MONGODB. Se corrigio el error solo que daba: "Operation `notes.insertOne()` buffering timed out after 10000ms". Me sique dando el error cuando le da la gana, tiene toda la pinta que se debe a conexion debil en mi caso, porque he visto en interntet que puede dar por otros motivos pero en mi caso no se cumple lo de los demas caso, ademas pasa a veces si y aveces no. Cuando desconecte el VPN dejo de suceder, puede ser porque el VPN me consumia ancho de banda o porque detectaban que no era mi IP real.

- Como tal el unico problema real fue a la hora de conectarse con mongodb por el error que me daba pero despues todo fluyo bien, el error no me dio mas desde que desconecte el VPN y permiti el acceso desde cualquier ip a mi db.

### 3.13: Base de datos de la agenda telefónica, paso 1 ✅:

Cambie la recuperación de todas las entradas de la agenda telefónica para que los datos se obtengan de la base de datos. ✅

Verifique que la interfaz funcione después de que se hayan realizado los cambios. ✅

En los siguientes ejercicios, escriba todo el código específico de Mongoose en su propio módulo, tal como lo hicimos en el capítulo Configuración de la base de datos en su propio módulo .✅

#### Pasos:

1. Cambiar el back para recuperar las notas de la DB ✅
2. Escribir todo el codigo especifico de mongoose en su propio modulo ✅
3. Verificar que siga funcionando mediante el navegador, postman y rest. ✅
4. Verificar que funcione con el front de la app. ✅

- Estoy en la primera parte(https://fullstackopen.com/en/part3/saving_data_to_mongo_db#connecting-the-backend-to-a-database) pero me da error debido a que estoy levantando el backend con npm run dev lo que hace que no se pasen parametros para conectarme, voy a tratar de solucionar esto momentaneamente con un nuevo escript no nativo. Asi funciono pero entonces tengo que ignorar el package ahora. Ahora lo que hice fue instalar dotenv y usarla en su lugar, ya eso parece solucionar el problema en su totalidad.✅

### 3.14: sdfsdfsdfdsf:
