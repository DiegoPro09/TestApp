//Se crea una funcion donde se genere un numero entre 1 y 8 digitos para luego utilizarla en la modificacion de archivos csv
export function generateRandomNumber() {
    const length = Math.floor(Math.random() * 8) + 1
    let result = ''
  
    for (let i = 0; i < length; i++) {
      const randomDigit = Math.floor(Math.random() * 10)
      result += randomDigit
    }
  
    return result
}
  