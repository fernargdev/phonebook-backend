# (Parte 3-d: Validación y ESLint) [https://fullstackopen.com/en/part3/validation_and_es_lint]

## (Parte 3-d: Validación y ESLint) [https://fullstackopen.com/en/part3/validation_and_es_lint]

1. Te explican como validar la req mediante el schema y la funcion de validacion de mongoose
2. Se amplia el errorHandler para tratar estos errores de validacion
3. Se explica el problema que ocurre con los metodos de UPDATE de mongoose, que al parecer la libreria no validas estos. Le dan solucion a este problema mediante un reestructuracion del endpoint

## (Implementación del backend de la base de datos en producción) [https://fullstackopen.com/en/part3/validation_and_es_lint#deploying-the-database-backend-to-production]:

1. Explican como funciona el entorno de produccion de fly.io, como configurar las variables, como ver los logs,
2. Explican los mismo pero para el entorno de render
3. Dan el codigo fuente hasta el momento que se encuentra en: https://github.com/fullstack-hy2020/part3-notes-backend/tree/part3-6

## (Lint) [https://fullstackopen.com/en/part3/validation_and_es_lint#lint]:

1. Te explican que es y para que sirve las herramientas de tipos Lint
2. Se explica como instalar y configurar para iniciar con ESLint
3. Se explica como analisar archivos individuales, como analisar todo el proyecto y como ignorar archivos y directorios
4. Te explican que una buena idea en vez de ejecutar ESLint mediante comandos es usar la extension para VSCode que se encuentra en: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint. Esto hara que nuestro codigo sea analizado a la vez que se escribe
5. Te explican como configurar el archivo eslintrc.js para establecer algunas reglas que le dan consistencia al codigo.
6. Te explican sobre la configuracion por defecto y como deshabilitar reglas en ella
7. Te dan consejo sobre ejecutar ESLint para ver si el formateo de las configuraciones del propio ESLint estan bien despues de modificar estas
8. Te explican que muchas empresas definen sus estandares de codigo mediante la configuracion de ESLint por lo que es una buena idea adoptar un estilo popular dentro de la industria para estar acorde al mercado. Un estilo bastante popular es el de Airbnb que se puede encontrar en: https://github.com/airbnb/javascript
9. El codigo fuente de la app de ejemplo hasta este punto se puede encontrar en: https://github.com/fullstack-hy2020/part3-notes-backend/tree/part3-7

## 3.19: Base de datos de la agenda telefónica, paso 7 ✅:

Amplíe la validación para que el nombre almacenado en la base de datos tenga al menos tres caracteres. ✅

Expanda la interfaz para que muestre algún tipo de mensaje de error cuando ocurra un error de validación. ✅

El manejo de errores se puede implementar agregando un bloque catch como se muestra a continuación: ✅

Puede mostrar el mensaje de error predeterminado devuelto por Mongoose, aunque no sean tan legibles como podrían ser: ✅

NB: en las operaciones de actualización, los validadores de mongoose están desactivados de forma predeterminada.
Lea la documentación para determinar cómo habilitarlos. ✅

## 3.20: Base de datos de la agenda telefónica, paso 8 ✅:

Agregue validación a su aplicación de directorio telefónico, lo que garantizará que los números de teléfono tengan el formato correcto.
Un número de teléfono debe:

1. Tener una longitud de 8 o más ✅
2. Estar formado por dos partes que están separadas por -, ✅
   la primera parte tiene dos o tres números y
   la segunda parte también consta de números.

p.ej. 09-1234556 y 040-22334455 son números de teléfono válidos
p.ej. 1234556, 1-22334455 y 10-22-334455 no son válidos

Utilice un validador personalizado para implementar la segunda parte de la validación. ✅

Si una solicitud HTTP POST intenta agregar a una persona con un número de teléfono no válido, ✅
el servidor debe responder con un código de estado y un mensaje de error apropiados.

## 3.21 Implementación del backend de la base de datos en producción ✅:

Genere una nueva versión "completa" de la aplicación
creando una nueva compilación de producción del frontend
y copiándola en el repositorio del backend.
Verifique que todo funcione localmente utilizando la aplicación completa
desde la dirección http://localhost:3001/ ✅

Envíe la última versión a Fly.io/Render y verifique que todo funcione allí también. ✅

NOTA : debe implementar el BACKEND en el servicio en la nube.
Si está utilizando Fly.io, los comandos deben ejecutarse en el directorio raíz del backend
(es decir, en el mismo directorio donde está el backend package.json).
En caso de utilizar Render, el backend debe estar en la raíz de tu repositorio. ✅

NO implementará la interfaz directamente en ninguna etapa de esta parte.
Es solo un repositorio backend que se implementa en toda la parte, nada más. ✅

## 3.22: configuración de Lint:

Agregue ESlint a su aplicación y corrija todas las advertencias.
