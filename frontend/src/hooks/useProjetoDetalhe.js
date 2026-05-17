import { useQuery } from '@tanstack/react-query'
import { api } from '../lib/api'

export function useProjetoDetalhe(id){
    return useQuery({
        queryKey: ['projeto', id],
        enabled: !!id,
        queryFn: () => api.projetoDetalhe(id),
        staleTime: 1000 * 60 * 5, 

    })

}