//Archivo app para poder manejar las peticiones y las rutas junto con el puerto del servidor
import { port, app } from './server.js'
import fetchAllFiles from './services/fetchAllFiles.js'
import { fetchFileByName } from './services/fetchFileByName.js'

app.get('/api/files', async (r, res) => { //Generacion de ruta para mostrar todos los archivos que vienen desde la api externa
    try {
        const files = await fetchAllFiles()
        
        // Enviar una respuesta JSON
        res.json(files)
      } catch (error) {
        res.status(500).json({ message: error.message })
      }
})

app.get('/api/file/:fileName', async (req, res) => { //Generacion de ruta para mostrar un solo archivo ingresada por url que desde la api externa
    try {
        const fileName = req.params.fileName
        const file = await fetchFileByName(fileName)

        // Enviar una respuesta JSON
        res.json(file)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`)
})