//Se crea una funcion donde se genere una cadena de caracteres de 5 digitos para luego utilizarla en la modificacion de archivos csv
export function generateRandomText() {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let result = ''
  
  for (let i = 0; i < 5; i++) {
    // Generar un índice aleatorio
    const randomIndex = Math.floor(Math.random() * 5) + 1
  
    // Obtener el carácter correspondiente al índice aleatorio
    const randomChar = characters.charAt(randomIndex)
  
    // Alternar entre mayúsculas y minúsculas
    if (i % 2 === 0) {
      result += randomChar.toUpperCase()
    } else {
      result += randomChar.toLowerCase()
    }
  }
  
  return result
}