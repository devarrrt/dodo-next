import React from 'react'
import { useSearchParams } from 'next/navigation'
import { useSet } from 'react-use'

interface PropsRange {
  priceFrom?: number
  priceTo?: number
}

interface QueryFilters extends PropsRange {
  pizzaTypes: string
  sizes: string
  ingredients: string
}

export interface Filters {
  selectedSizes: Set<string>
  selectedPizzaTypes: Set<string>
  selectedIngredients: Set<string>
  selectedPrices: PropsRange
}

interface ReturnProps extends Filters {
  setPrices: (name: keyof PropsRange, value: number) => void
  setPizzaTypes: (value: string) => void
  setSizes: (value: string) => void
  setSelectedIngredients: (value: string) => void
}

export const useFilters = (): ReturnProps => {
  const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>

  const [selectedIngredients, { toggle: toggleIngredients }] = useSet(new Set<string>(searchParams.get('ingredients')?.split(',')))

  const [selectedSizes, { toggle: toggleSizes }] = useSet(new Set<string>(searchParams?.get('sizes') ? searchParams.get('sizes')?.split(',') : []))

  const [selectedPizzaTypes, { toggle: togglePizzaTypes }] = useSet(new Set<string>(searchParams.get('pizzaTypes') ? searchParams.get('pizzaTypes')?.split(',') : []))

  const [selectedPrices, setSelectedPrices] = React.useState<PropsRange>({
    priceFrom: Number(searchParams.get('priceFrom')) || undefined,
    priceTo: Number(searchParams.get('priceTo')) || undefined,
  })

   const changePrice = (name: keyof PropsRange, value: number) => {
    setSelectedPrices((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return React.useMemo(
    () => ({
      selectedSizes,
      selectedPizzaTypes,
      selectedIngredients,
      selectedPrices,
      
      setPrices: changePrice,
      setPizzaTypes: togglePizzaTypes,
      setSizes: toggleSizes,
      setSelectedIngredients: toggleIngredients,
    }),
    [selectedSizes, selectedPizzaTypes, selectedIngredients, selectedPrices],
  )

}