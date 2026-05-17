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

    // busca o projeto
    const projeto = await pool.query(
      'SELECT * FROM projetos WHERE id = $1',
      [id]
    )

    if (projeto.rows.length === 0) {
      return res.status(404).json({ error: 'Projeto não encontrado' })
    }

    // busca as imagens do projeto
    const imagens = await pool.query(
      'SELECT * FROM projeto_imagens WHERE projeto_id = $1 ORDER BY ordem ASC',
      [id]
    )

    // junta tudo em um objeto só
    res.json({
      ...projeto.rows[0],
      imagens: imagens.rows,
    })

  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Erro ao buscar projeto' })
  }
})

module.exports = router