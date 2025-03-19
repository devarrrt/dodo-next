import React from 'react'
import qs from 'qs'
import { useRouter } from 'next/navigation'

import { Filters } from './use-filters'

export const useQueryFilters = (filters: Filters) => {
  const isMounted = React.useRef(false)
  const router = useRouter()

  React.useEffect(() => {
    const params = {
      ...filters.selectedPrices,
      pizzaTypes: Array.from(filters.selectedPizzaTypes),
      sizes: Array.from(filters.selectedSizes),
      ingredients: Array.from(filters.selectedIngredients),
    }

    const query = qs.stringify(params, { arrayFormat: 'comma' })
    router.push(`?${query}`, {
      scroll: false
    })

  }, [filters, router])
}
