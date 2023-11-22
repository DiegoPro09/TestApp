Front End para la aplicacion de prueba tecnica.

La ruta predeterminada es en 'localhost:3000'.

Al iniciar se muestra el conjunto de archivos requeridos desde la api ya realizada a la api externa, siempre y cuando se haya inicializado el servido de la api

La ruta inicial seria 'localhost:3000/' o 'localhost:3000/files'

Para ingresar a un solo archivo requiriendola desde la api la url de la peticion deberia ser 'localhost:3000/file/nombre_del_archivo.csv'

Para inicializar el front basta con usar el comando 'npm start'

Los test estan hechos en Jest y se ejecutan con 'npm test'