const express  = require('express')
const cors     = require('cors')
require('dotenv').config()

const app = express()

// Middlewares
app.use(cors({ origin: 'http://localhost:5173' })) // porta padrão do Vite
app.use(express.json())

// Rotas
app.use('/api/projetos', require('./routes/projetos'))
app.use('/api/jornada',  require('./routes/jornada'))
app.use('/api/sobre',    require('./routes/sobreMim'))
app.use('/api/redes',    require('./routes/redes'))

// Health check — útil para saber se o servidor está de pé
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`🚀 API rodando em http://localhost:${PORT}`)
})