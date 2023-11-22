// Middleware para permitir solicitudes desde cualquier origen (CORS)
export const cors = ((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    next()
})

// Middleware para establecer la cabecera 'Accept: application/json'
export const setJsonHeader = (req, res, next) => {
    res.setHeader('Accept', 'application/json')
    next()
}