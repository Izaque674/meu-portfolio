const express = require('express')
const router  = express.Router()
const pool    = require('../db')

// GET /api/projetos
router.get('/', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM projetos ORDER BY ordem ASC'
    )
    res.json(result.rows)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Erro ao buscar projetos' })
  }
})

// GET /api/projetos/:id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const result = await pool.query(
      'SELECT * FROM projetos WHERE id = $1',
      [id]                          // ← $1 previne SQL Injection
    )
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Projeto não encontrado' })
    }
    res.json(result.rows[0])
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar projeto' })
  }
})

module.exports = router