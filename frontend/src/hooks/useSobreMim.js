import { useQuery } from '@tanstack/react-query'
import { api } from '../lib/api'

export function useSobreMim() {
  return useQuery({
    queryKey:  ['sobre'],
    queryFn:   api.sobre,
    staleTime: 1000 * 60 * 5,
  })
}