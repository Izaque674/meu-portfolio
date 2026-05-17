const BASE = import.meta.env.VITE_API_URL || '/api'

async function get(endpoint) {
  const res = await fetch(`${BASE}${endpoint}`)
  if (!res.ok) throw new Error(`Erro ${res.status}: ${endpoint}`)
  return res.json()
}

export const api = {
  projetos: () => get('/projetos'),
  jornada:  () => get('/jornada'),
  sobre:    () => get('/sobre'),
  redes:    () => get('/redes'),
  projetoDetalhe: (id) => get(`/projetos/${id}`),
}