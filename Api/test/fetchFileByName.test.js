import axios from 'axios'
import { expect } from 'chai'
import sinon from 'sinon'
import { config } from '../src/config/config.js'
import { fetchFileByName } from '../src/services/fetchFileByName.js'

describe('fetchFileByName', () => {
  it('should fetch file by name', async () => {
    //Se configura el mock de axios
    const axiosGetStub = sinon.stub(axios, 'get')
    const fileName = 'test1.csv'
    const mockApiResponse = {
      data: {
        //Simular la estructura de datos que se espera recibir
        filename: fileName,
        lines: {
          number: 50919,
          text: 'CfCfE',
          hex: 'cb720bd2543a4401e804a3be4d89cc'
        }
      }
    }
    axiosGetStub.resolves(mockApiResponse)

    //Se configura los datos de prueba
    const expectedApiUrl = config.api //Url de la api
    const expectedSecretKey = config.secretKey //Key de autorizacion

    //Llama la funcion y espera la respuesta
    const result = await fetchFileByName(fileName)

    //Verifica que axios.get se llamo con los parametros correctos
    sinon.assert.calledOnceWithExactly(axios.get, `${expectedApiUrl}/file/${fileName}`, {
      headers: {
        Authorization: expectedSecretKey,
        'Content-Type': 'application/json'
      }
    })

    expect(result).to.be.an('array').that.is.not.empty
    expect(result[0]).to.have.property('filename').that.equals(fileName)
    expect(result[0]).to.have.property('lines').that.is.an('object')
    expect(result[0].lines).to.have.property('number').that.is.a('number')
    expect(result[0].lines).to.have.property('text').that.is.a('string')
    expect(result[0].lines).to.have.property('hex').that.is.a('string')

    //Restaurar la función original de axios
    axiosGetStub.restore()
  })

  it('should handle API error', async () => {
    //Configurar el mock de axios para simular un error
    const axiosGetStub = sinon.stub(axios, 'get')
    axiosGetStub.rejects(new Error('API error'))
    const fileName = 'testFile.txt'

    //Llama a la funcion y esperar a que arroje un error
    try {
      await fetchFileByName(fileName)
    } catch (error) {
      //Verifica que el error sea manejado correctamente
      expect(error).to.be.an.instanceOf(Error)
      expect(error.message).to.equal(`Error al obtener el contenido de ${fileName}`)
    }

    //Restaurar la función original de axios
    axiosGetStub.restore()
  })
})
