const express = require('express')
const router  = express.Router()
const pool    = require('../db')

router.get('/', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM redes_sociais ORDER BY ordem ASC'
    )
    res.json(result.rows)
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar redes' })
  }
})

module.exports = router