# Parte 3-C: Guardar datos en MongoDB

## Notas:

### Primera Parte

#### (Depuración de aplicaciones de nodo) [https://fullstackopen.com/en/part3/saving_data_to_mongo_db#debugging-node-applications]:

En esta parte te explican como depurar aplicaciones full stack. Te explican 3 estrategias
1 - La primera es mediante console.log, que aunque algunos en la industria dicen que no es buena, lo cierto es que la usan todos y siempre es una opcion valida
2 - La segunda es mediante el debugger que viene integrado en VSCode
3 - La tercera es mediante las herramientas de debugger que trae el navegador, se puede acceder a esta mediante los comandos: - node --inspect index.js o nodemon --inspect index.js

Tambien te explican a cuestionar todo desde el front hasta la db ya que el error puede estar en cualquier lado. Ademas de eso te explican el principio de detener y reparar que dice que cuando ocurre un error inesperado lo mejor es detenerse hasta encontrarlo, ya que de sequir tu codigo sera mas dificil de depurar y tendra mas errores

#### (MongoDB) [https://fullstackopen.com/en/part3/saving_data_to_mongo_db#debugging-node-applications]:

1. En esta parte hablan sobre porque escoger MongoDB que basicamente es por su menor a complejidad a una base de datos relacional.
2. Tambien explican que a pesar que puedes ejecutar MongoDB en local, la opcion mas recomendable es usar un servicio en la nube.
3. Su servicio predilecto es (MongoDB Atlas)[https://www.mongodb.com/atlas/database] y te explican como empezar con el.
4. Se explica como usar (Mongoose)[http://mongoosejs.com/index.html] como ODM.
5. Crean una base de datos de prueba y la destruyen despues.
6. MongoDB Atlas crea automaticamente un nueva db cuando una app intenta conectarse a una db que no existe. Considero esto un detalle importante para entender lo que hicieron.

#### (Esquema) [https://fullstackopen.com/en/part3/saving_data_to_mongo_db#schema]:

1. Un esquema es lo que define la forma de los documentos dentro de una coleccion. El esquema le dice a Mongoose cómo se almacenarán los objetos de nota en la base de datos.
2. Creea un esquema de muestra para las notas y los usan en la contruccion del modelo
3. Las bases de datos de documentos como Mongo no tienen esquema , lo que significa que a la base de datos en sí no le importa la estructura de los datos almacenados en la base de datos.
4. La idea detrás de Mongoose es que a los datos almacenados en la base de datos se les asigna un esquema a nivel de la aplicación que define la forma de los documentos almacenados en una colección determinada.

#### (Crear y guardar objetos) [https://fullstackopen.com/en/part3/saving_data_to_mongo_db#creating-and-saving-objects]:

1. Crean un nuevo objeto de nota con la ayuda del modelo Note. Los modelos son las llamadas funciones constructoras que crean nuevos objetos JS basandose en los parametros.
2. Se cierra la conexion con la DB con el comando mongoose.connection.close() del controlador de eventos. Si la conexion no se cierra, el programa nunca finaliza su ejecucion.

#### (Obteniendo objetos de la base de datos) [https://fullstackopen.com/en/part3/saving_data_to_mongo_db#fetching-objects-from-the-database]:

1. Basicamente hacen un pequeno ejemplo de como obtener todos los datos de la coleccion.

### Segunda Parte:

#### (Conexión del backend a una base de datos) [https://fullstackopen.com/en/part3/saving_data_to_mongo_db#connecting-the-backend-to-a-database]:

1. Como usar mongoose con el backend que tenian de la app de notas y usarlo para recuperar las notas de un endpoint
2. Usar set, toJSON y transform para transformar las notas para formatear los objetos devueltos por mongoose

#### (Configuración de la base de datos en su propio módulo) [https://fullstackopen.com/en/part3/saving_data_to_mongo_db#database-configuration-into-its-own-module]:

1. Crear un nuevo modulo para el codigo de mongoose llamado modelos y un nuevo archivo note.js dentro de los modelos
2. Se explica como importar modulos de Node que es ligeramente diferente a los modulos de ES6
3. Se explican como usar las variables de entorno nativas y con la biblioteca dotenv

#### (Nota importante para los usuarios de Fly.io)[https://fullstackopen.com/en/part3/saving_data_to_mongo_db#important-note-to-fly-io-users]:

1. Aqui se explica como es el tema de las variables de entorno tanto para Render como para Fly.io
2. En Fly.io hay que crear un archivo .dockerignore y ahi es donde iria el .env con las variables
3. En render las variables se definen en la interfaz web en el apartado de Enviorment

#### (Uso de bases de datos en controladores de rutas)[https://fullstackopen.com/en/part3/saving_data_to_mongo_db#using-database-in-route-handlers]:

1. Cambian el backend para usar la DB y explican que estan haciendo

#### (Verificación de la integración frontend y backend)[https://fullstackopen.com/en/part3/saving_data_to_mongo_db#verifying-frontend-and-backend-integration]:

1. Prueba la funcionalidad modificada en el apartado anterior mediante el Rest, Postman y el navegador.
2. Te explican como integrar el frontend con el backend modificado el cual esta haciendo uso de la db. Te explican que la mejor idea sea ir integrando una funcionalidad a la vez y que cuando se halla comprobado que dicha funcionalidad funciona bien, entonces se deberia pasar a la siquiente.
3. Ya entonces tendriamos una mezcla de front, back y db, por lo que seria recomendable inspeccionar el estado persistente en la db. Algunas maneras recomendables seria mediante el panel de control de MongoDb Atlas o mediante pequeños programas auxiliares de Node, como en el caso de mongo.js, estos programitas pueden ser muy utiles.
4. Dan la direccion donde encontrar el codigo en su totalidad. Esta es: https://github.com/fullstack-hy2020/part3-notes-backend/tree/part3-4.

### Tercera Parte:

#### (Manejo de errores)[https://fullstackopen.com/en/part3/saving_data_to_mongo_db#error-handling]:

1. Te explican como manejar errores en diferentes situaciones tomando como referencia el enpoint que se solicia una nota por un id
2. Te explican como manejar un 404(No Found) en caso de que se introduzca un id que no existe
3. Te explican como manejar un 500(Internal Server Error) en caso de que se rechaze la promesa por x motivo
4. Te explican como manejar un 400(Bad Request) en caso de que el cliente haga una solicitud incorrecta, como por ejemplo obtener una nota por su id y pasando el id como un number, esto estaria mal teniendo en cuente que el id es un string.
5. Te aconsejan dar la mayor info posible acerca del error, se puede lograr imprimiendo en consola o devolviendo una respuesta con info adicional

#### (Trasladar el manejo de errores al middleware)[https://fullstackopen.com/en/part3/saving_data_to_mongo_db#moving-error-handling-into-middleware]:

1. Te explican porque hay casos en lo que es mejor practicar implementar todo el manejo de errores en un solo lugar.
2. Te explican como funcionan los middleware y como se pueden usar para manejar errores

#### (El orden de carga del middleware.)[https://fullstackopen.com/en/part3/saving_data_to_mongo_db#the-order-of-middleware-loading]:

1. Te explican el orden de ejecucion de una app de express con ejemplos
2. Te explican el orden en que se ejecutan los middleware y porque
3. Te mustran con ejemplos como debe estar secuenciado en el backend y lo que pasaria sino fuera asi

#### (Otras operaciones)[https://fullstackopen.com/en/part3/saving_data_to_mongo_db#other-operations]:

1. Actualizan el resto de endpoint que faltan por actualizar del backend para que todos hagan uso de la db
2. Te explican como actualizar el delete con el metodo findByIdAndDelete
3. Te explican como actualizar el update con el metodo findByIdAndUpdate
4. Te explican algunos detalles del parametro opcional {new: true} usado en findByIdAndUpdate
5. El codigo hasta este momento esta en: https://github.com/fullstack-hy2020/part3-notes-backend/tree/part3-5

#### (Un verdadero juramento de desarrollador full stack)[https://fullstackopen.com/en/part3/saving_data_to_mongo_db#a-true-full-stack-developers-oath]:

1. Al agregar una capa mas de complejidad y ahora tener front, back y db trabajando en cojunto, la app da un salto por eso te dan los puntos claves a seguir para tu desarrollo, ya que existen muchas fuentes potenciales de error
2. Te explican que uses las herramientas de la DevTools en todo momento como la consola y network
3. Estar atento al estado del back y de la db
4. Progresar en pequeños pasos simpre teniendo conocimiento de como se comporta el codigo en todo momento
5. Ante errores, parar de escribir codigo y buscar la solucion mediante las herramientas de depuracion, console.log es util en algunas situaciones en otras puede ser mas util el depurador de node del navegador.
6. Puedes preguntar simpre por el canal de discord o por el telegram.

### Ejercicios:

#### 3.12: base de datos de línea de comandos:

1. Cree una base de datos MongoDB basada en la nube para la aplicación de agenda telefónica con MongoDB Atlas.

2. Cree un archivo mongo.js en el directorio del proyecto, que se puede usar para agregar entradas a la agenda telefónica y para enumerar todas las entradas existentes en la agenda telefónica.

- NB: ¡ No incluya la contraseña en el archivo que confirma y envía a GitHub!

3. La aplicación debería funcionar de la siguiente manera. Utiliza el programa pasando tres argumentos de línea de comando (el primero es la contraseña), por ejemplo:

   - node mongo.js yourpassword Anna 040-1234556
   - added Anna number 040-1234556 to phonebook
   - node mongo.js yourpassword "Arto Vihavainen" 045-1232456

- Nota: no cierres la conexión en el lugar equivocado . Por ejemplo, el siguiente código no funcionará:
- NB: Si define un modelo con el nombre Person , mongoose nombrará automáticamente la colección asociada como people .

##### Pasos:

1. Crearme una cuenta en (MongoDB Atlas)[https://www.mongodb.com/atlas/database] ✅
2. Conectarme con MongoDB ✅
3. Crear objetos basados en un modelo en una coleccion y db especifica. ✅
4. Ser capaz de recuperar esos objetos a ver si crearon bien sin la necesidad de ir a la web ✅

- NO LOGRE FORMAR DE CORREGIR EL ERROR QUE DA AL CONECTARSE CON MONGODB. Se corrigio el error solo que daba: "Operation `notes.insertOne()` buffering timed out after 10000ms". Me sique dando el error cuando le da la gana, tiene toda la pinta que se debe a conexion debil en mi caso, porque he visto en interntet que puede dar por otros motivos pero en mi caso no se cumple lo de los demas caso, ademas pasa a veces si y aveces no. Cuando desconecte el VPN dejo de suceder, puede ser porque el VPN me consumia ancho de banda o porque detectaban que no era mi IP real.

- Como tal el unico problema real fue a la hora de conectarse con mongodb por el error que me daba pero despues todo fluyo bien, el error no me dio mas desde que desconecte el VPN y permiti el acceso desde cualquier ip a mi db.

#### 3.13: Base de datos de la agenda telefónica, paso 1 ✅:

Cambie la recuperación de todas las entradas de la agenda telefónica para que los datos se obtengan de la base de datos.

Verifique que la interfaz funcione después de que se hayan realizado los cambios.

En los siguientes ejercicios, escriba todo el código específico de Mongoose en su propio módulo, tal como lo hicimos en el capítulo Configuración de la base de datos en su propio módulo .

##### Pasos:

1. Cambiar el back para recuperar las notas de la DB ✅
2. Escribir todo el codigo especifico de mongoose en su propio modulo ✅
3. Verificar que siga funcionando mediante el navegador, postman y rest. ✅
4. Verificar que funcione con el front de la app. ✅

- Estoy en la primera parte(https://fullstackopen.com/en/part3/saving_data_to_mongo_db#connecting-the-backend-to-a-database) pero me da error debido a que estoy levantando el backend con npm run dev lo que hace que no se pasen parametros para conectarme, voy a tratar de solucionar esto momentaneamente con un nuevo escript no nativo. Asi funciono pero entonces tengo que ignorar el package ahora. Ahora lo que hice fue instalar dotenv y usarla en su lugar, ya eso parece solucionar el problema en su totalidad.✅

#### 3.14: Base de datos de la agenda telefónica, paso 2 ✅:

Cambie el backend para que los nuevos números se guarden en la base de datos . Verifique que su interfaz aún funcione después de los cambios. ✅

En esta etapa, puede ignorar si ya existe una persona en la base de datos con el mismo nombre que la persona que está agregando. ✅

#### 3.15: Base de datos de la agenda telefónica, paso 3 ✅:

Cambie el backend para que la eliminación de entradas de la agenda telefónica se refleje en la base de datos. ✅

Verifique que la interfaz aún funcione después de realizar los cambios. ✅

#### 3.16: Base de datos de la agenda telefónica, paso 4 ✅:

Mueva el manejo de errores de la aplicación a un nuevo middleware de manejo de errores.

#### 3.17: Base de datos de la agenda telefónica, paso 5 ✅:

Si el usuario intenta crear una nueva entrada en la agenda telefónica para una persona cuyo nombre ya está en la agenda telefónica, ✅
la interfaz intentará actualizar el número de teléfono de la entrada existente realizando una solicitud HTTP PUT a la URL única de la entrada. ✅

Modifique el backend para admitir esta solicitud. ✅

Verifique que la interfaz funcione después de realizar los cambios.

#### 3.18: Base de datos de la agenda telefónica paso 6:

Actualice también el manejo de las rutas api/persons/:id
e info para usar la base de datos
y verifique que funcionen directamente con el navegador, Postman o el cliente REST de VS Code.

La inspección de una entrada individual de la agenda desde el navegador debería verse así:

### ME QUEDE:

Me quede en: https://fullstackopen.com/en/part3/saving_data_to_mongo_db#exercises-3-13-3-14 ni los he empezado.
