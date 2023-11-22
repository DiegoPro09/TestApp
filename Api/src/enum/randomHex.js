//Se crea una funcion donde se genere un numero Hexadecimal de 30 digitos para luego utilizarla en la modificacion de archivos csv
export function generateRandomHex() {
    const length = 30
    let result = ''
  
    for (let i = 0; i < length; i++) {
      const randomHexDigit = Math.floor(Math.random() * 16).toString(16)
      result += randomHexDigit
    }
  
    return result
}