import { useEffect, useState } from "react"
import { useSet } from "react-use"

import { Variant } from "@/components/shared/group-variants"

import { PizzaSize, PizzaType } from "@/constants/pizza"

import { getAvailablePizzaSizes } from "@/lib"

import { ProductItem } from "@/@types/prisma"

interface ReturnProps {
  size: PizzaSize
  type: PizzaType
  selectedIngredients: Set<number>
  allAvailablePizzasSizes: Variant[]
  // currentItemId?: number
  setSize: (size: PizzaSize) => void
  setType: (size: PizzaType) => void
  toggleIngredients: (id: number) => void
}

export const usePizzaOptions = (items: ProductItem[]): ReturnProps => {

  const [size, setSize] = useState<PizzaSize>(40)
  const [type, setType] = useState<PizzaType>(1)
  const [selectedIngredients, { toggle: toggleIngredients }] = useSet(new Set<number>([]))

  const allAvailablePizzasSizes = getAvailablePizzaSizes(type, items)
  const currentItemId = items.find((item) => item.pizzaType === type && item.size === size)?.id

  useEffect(() => {
    const selectedPizza = allAvailablePizzasSizes?.find(item => Number(item.value) === size && !item.disabled)

    const availablePizzaSizes = allAvailablePizzasSizes?.find(item => !item.disabled)

    if (!selectedPizza && availablePizzaSizes) {
      setSize(Number(availablePizzaSizes.value) as PizzaSize)
    }
  }, [type])

  return {
    size,
    type,
    selectedIngredients,
    allAvailablePizzasSizes,
    // currentItemId,
    setSize,
    setType,
    toggleIngredients,
  }
}