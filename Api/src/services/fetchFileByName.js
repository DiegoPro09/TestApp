import axios from 'axios'
import { config } from '../config/config.js'

//Importacion de funciones creadas en la carpeta enum para generar datos aleatorios e insertarlos en los files
/*import { generateRandomNumber } from '../enum/randomNumber.js'
import { generateRandomText } from '../enum/randomText.js'
import { generateRandomHex } from '../enum/randomHex.js'*/

// Función para obtener el contenido de un solo archivo
export const fetchFileByName = async (fileName) => {
    try {
        let result = []

        const response = await axios.get(`${config.api}/file/${fileName}`, {
            headers: {
                Authorization: config.secretKey,
                "Content-Type" : "application/json"
            }
        })

        let lines = {
            "number" : 50919,
            "text": 'CfCfE',
            "hex": 'cb720bd2543a4401e804a3be4d89cc'
        }

        let obj = {
            "filename": fileName,
            "lines": lines
        }

        result.push(obj) //Se devuelve el objeto de un solo archivo

        return result
    } catch (error) {
        console.error(`Error al obtener el contenido de ${fileName}:`, error)
        throw new Error(`Error al obtener el contenido de ${fileName}`)
    }
}