import axios from 'axios'
import { expect } from 'chai'
import sinon from 'sinon'
import fetchAllFiles from '../src/services/fetchAllFiles.js'
import { config } from '../src/config/config.js'

describe('fetchAllFiles', () => {
  it('should fetch all files', async () => {
    //Se configura el mock de axios
    const axiosGetStub = sinon.stub(axios, 'get')
    const mockApiResponse = {
      data: {
        files: ['file1.txt', 'file2.txt']
      }
    }
    axiosGetStub.resolves(mockApiResponse)

    //Se coonfigura datos de prueba
    const expectedApiUrl = config.api //Url de la api
    const expectedSecretKey = config.secretKey //Key de autorizacion

    //Llama la funcion y espera la respuesta
    const result = await fetchAllFiles()

    //Verifica que axios.get se llamo con los parametros correctos
    sinon.assert.calledOnceWithExactly(axios.get, expectedApiUrl + '/files', {
      headers: {
        Authorization: expectedSecretKey
      }
    })

    expect(result).to.be.an('array').that.is.not.empty

    result.forEach((file) => {
      expect(file).to.have.property('filename').that.is.a('string')
      expect(file).to.have.property('lines').that.is.an('object')
      expect(file.lines).to.have.property('number').that.is.a('number')
      expect(file.lines).to.have.property('text').that.is.a('string')
      expect(file.lines).to.have.property('hex').that.is.a('string')
    })

    //Restaurar la función original de axios
    axiosGetStub.restore()
  })

  it('should handle API error', async () => {

    //Configurar el mock de axios para simular un error
    const axiosGetStub = sinon.stub(axios, 'get')
    axiosGetStub.rejects(new Error('API error'))

    //Llama a la funcion y esperar a que arroje un error
    try {
      await fetchAllFiles()
    } catch (error) {
      //Verifica que el error sea manejado correctamente
      expect(error).to.be.an.instanceOf(Error)
      expect(error.message).to.equal('Error en la solicitud a la API externa')
    }

    //Restaurar la función original de axios
    axiosGetStub.restore()
  })
})
