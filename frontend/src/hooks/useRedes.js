import { useQuery } from '@tanstack/react-query'
import { api } from '../lib/api'

export function useRedes() {
  return useQuery({
    queryKey:  ['redes'],
    queryFn:   api.redes,
    staleTime: 1000 * 60 * 5,
  })
}