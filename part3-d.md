# (Parte 3-d: Validación y ESLint) [https://fullstackopen.com/en/part3/validation_and_es_lint]

## (Parte 3-d: Validación y ESLint) [https://fullstackopen.com/en/part3/validation_and_es_lint]

1. Te explican como validar la req mediante el schema y la funcion de validacion de mongoose
2. Se amplia el errorHandler para tratar estos errores de validacion
3. Se explica el problema que ocurre con los metodos de UPDATE de mongoose, que al parecer la libreria no validas estos. Le dan solucion a este problema mediante un reestructuracion del endpoint

## (Implementación del backend de la base de datos en producción) [https://fullstackopen.com/en/part3/validation_and_es_lint#deploying-the-database-backend-to-production]:

1. Explican como funciona el entorno de produccion de fly.io, como configurar las variables, como ver los logs,
2. Explican los mismo pero para el entorno de render
3. Dan el codigo fuente hasta el momento que se encuentra en: https://github.com/fullstack-hy2020/part3-notes-backend/tree/part3-6

## 3.19: Base de datos de la agenda telefónica, paso 7 ✅:

Amplíe la validación para que el nombre almacenado en la base de datos tenga al menos tres caracteres. ✅

Expanda la interfaz para que muestre algún tipo de mensaje de error cuando ocurra un error de validación. ✅

El manejo de errores se puede implementar agregando un bloque catch como se muestra a continuación: ✅

Puede mostrar el mensaje de error predeterminado devuelto por Mongoose, aunque no sean tan legibles como podrían ser: ✅

NB: en las operaciones de actualización, los validadores de mongoose están desactivados de forma predeterminada.
Lea la documentación para determinar cómo habilitarlos. ✅
