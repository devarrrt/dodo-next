'use client'

import React from 'react'

import { GroupVariants } from './group-variants'
import { IngredientItem } from './ingredient-item'
import { PizzaImage } from './pizza-image'

import { Title } from '../shared/title'
import { Button } from '../ui'

import { PizzaSize, pizzaSizes, PizzaType, pizzaTypes, mapPizzaType } from '@/constants/pizza'

import { calcTotalPizzaPrice } from '@/lib'
import { cn } from '@/lib/utils'

import { usePizzaOptions } from '@/hooks'

import { Ingredient, ProductItem } from '@/@types/prisma'
interface Props {
  imageUrl: string
  name: string
  ingredients: Ingredient[]
  items: ProductItem[]
  loading?: boolean
  price: number
  onSubmit: (itemId: number, ingredients: number[]) => void
  onClickAddCart?: () => void
  className?: string
}

export const ChoosePizzaForm: React.FC<Props> = ({ className, imageUrl, name, price, ingredients, items, loading, onSubmit, onClickAddCart }) => {
  const {
    size,
    type,
    selectedIngredients,
    allAvailablePizzasSizes,
    currentItemId,
    setSize,
    setType,
    toggleIngredients,
  } = usePizzaOptions(items)

  const totalPrice = calcTotalPizzaPrice(type, size, items, ingredients, selectedIngredients)

  const textDetaills = `${size} см, ${mapPizzaType[type]} тесто`

  const hadndleClickAdd = () => {
    // onClickAddCart()
    console.log({
      size,
      type,
      selectedIngredients
    })
  }

  return (
    <div className={cn(className, 'flex flex-1')}>
      <PizzaImage imageUrl={imageUrl} size={size} />
      <div className="w-[490px] bg-[#f7f6f5]   p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <p className="text-gray-400">{textDetaills}</p>
        <GroupVariants
          items={allAvailablePizzasSizes}
          value={String(size)}
          onClick={(value) => setSize(Number(value) as PizzaSize)} />
        <GroupVariants
          items={pizzaTypes}
          value={String(type)}
          onClick={(value) => setType(Number(value) as PizzaType)}
        />
        <div className="bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar mt-5">
          <div className="grid grid-cols-3 gap-3">
            {ingredients.map((ingredient, index) => (
              <IngredientItem
                key={`${ingredient}_${index}`}
                name={ingredient.name}
                price={ingredient.price}
                imageUrl={ingredient.imageUrl}
                onClick={() => toggleIngredients(ingredient.id)}
                active={selectedIngredients.has(ingredient.id)}
              />
            ))}
          </div>
        </div>
        <Button
          loading={loading}
          onClick={() => hadndleClickAdd()}
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  )
}
