import { useQuery } from '@tanstack/react-query'
import { api } from '../lib/api'

export function useProjetos() {
  return useQuery({
    queryKey:  ['projetos'],
    queryFn:   api.projetos,
    staleTime: 1000 * 60 * 5,  // cache por 5 minutos
  })
}