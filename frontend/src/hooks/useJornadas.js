import { useQuery } from '@tanstack/react-query'
import { api } from '../lib/api'

export function useJornada() {
  return useQuery({
    queryKey:  ['jornada'],
    queryFn:   api.jornada,
    staleTime: 1000 * 60 * 5,
  })
}