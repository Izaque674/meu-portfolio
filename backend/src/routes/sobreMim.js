const express = require('express')
const router  = express.Router()
const pool    = require('../db')

router.get('/', async (req, res) => {
  try {
    // Busca sobre_mim e habilidades em paralelo (Promise.all)
    const [sobre, habilidades] = await Promise.all([
      pool.query('SELECT * FROM sobre_mim LIMIT 1'),
      pool.query('SELECT * FROM habilidades ORDER BY ordem ASC'),
    ])
    res.json({
      ...sobre.rows[0],
      habilidades: habilidades.rows,
    })
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar dados' })
  }
})

module.exports = router