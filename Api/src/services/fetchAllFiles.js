import axios from 'axios'
import { config } from '../config/config.js'

//Importacion de funciones creadas en la carpeta enum para generar datos aleatorios e insertarlos en los files
/*import { generateRandomText } from '../enum/randomText.js'
import { generateRandomNumber } from '../enum/randomNumber.js'
import { generateRandomHex } from '../enum/randomHex.js'*/

//Funcion para adquirir la lista de archivos desde la api externa
const fetchAllFiles = async () => {
  try {
    //Peticion a la api externa desde la url preconfigurada en el archivo config
    const response = await axios.get(`${config.api}/files`, {
      headers: {
        Authorization: config.secretKey
      }
    })

    let result = []

    //Mapeo donde por cada file que venga se le añaden los datos predefinidos del requerimiento, dentro de cada atributo en lines, se puede suplantar el dato definido por las funciones que se crearon para que sean datos aleatorios
    response.data.files.forEach(fileName => {
      let lines = {
        "number" : 50919,
        "text": 'CfCfE',
        "hex": 'cb720bd2543a4401e804a3be4d89cc'
      }

      let obj = {
        "filename": fileName,
        "lines": lines
      }

      result.push(obj)
    })

    return result //Devolucion del objeto 

  } catch (error) {
    console.error('Error en la solicitud a la API externa:', error)

    throw new Error('Error en la solicitud a la API externa')
  }
}

export default fetchAllFiles
