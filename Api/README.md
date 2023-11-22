Back End para la aplicacion de prueba tecnica.

La ruta predeterminada es en 'localhost:3001'.

Se debe inicializar primero este servidor para luego poder ejecutar correctamente el front.

Desde un motor aparte tipo Postman, se debe ingresar a la url 'localhost:3001/api/files' para que devuelva todos los archivos.csv

Desde el mismo motor, para que devuelva solamente un solo archivo debe hacerse desde la url 'localhost:3001/api/file/nombre_de_archivo.csv'

Para inicializar el servidor basta con usar el comando 'npm start'

Los test estan hechos en Mocha + Chai y se ejecutan con 'npm test'