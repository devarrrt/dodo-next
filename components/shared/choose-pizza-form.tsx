'use client'

import React, { useMemo, useState } from 'react'
import { cn } from '@/lib/utils'
import { useSet } from 'react-use'

import { Title } from '../shared/title'
import { Button } from '../ui'
import { GroupVariants } from './group-variants'
import { IngredientItem } from './ingredient-item'
import { PizzaImage } from './pizza-image'

import { PizzaSize, pizzaSizes, PizzaType, pizzaTypes } from '@/constants/pizza'

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

const textDetaills = '30 см, традиционная на тонком тесте'

export const ChoosePizzaForm: React.FC<Props> = ({ className, imageUrl, name, price, ingredients, items, loading, onSubmit, onClickAddCart }) => {
  const [size, setSize] = useState<PizzaSize>(40)
  const [type, setType] = useState<PizzaType>(1)


  //need fix
  const pizzaPrice = useMemo(() => items.find(el => el.pizzaType === type && el.size === size)?.price, [type])

  const [selectedIngredients, { toggle: toggleIngredients }] = useSet(new Set<number>([]))

  return (
    <div className={cn(className, 'flex flex-1')}>
      <PizzaImage imageUrl={imageUrl} size={size} />
      <div className="w-[490px] bg-[#f7f6f5]   p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <p className="text-gray-400">{textDetaills}</p>
        <GroupVariants
          items={pizzaSizes}
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
          onClick={() => { }}
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
          Добавить в корзину за {pizzaPrice} ₽
        </Button>
      </div>
    </div>
  )
}
