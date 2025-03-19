'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'

import { Title } from '../shared/title'
import { Button } from '../ui'
import { GroupVariants } from './group-variants'
import { PizzaSize, pizzaSizes, PizzaType } from '@/constants/pizza'

interface Props {
  imageUrl: string
  name: string
  ingredients: any[]
  items?: any[]
  loading?: boolean
  price: number
  onSubmit: (itemId: number, ingredients: number[]) => void
  className?: string
}

const textDetaills = '30 см, традиционная на тонком тесте'

export const ChoosePizzaForm: React.FC<Props> = ({ className, imageUrl, name, price, ingredients, items, loading, onSubmit }) => {
  const [size, setSize] = useState<PizzaSize>(40)
  const [type, setType] = useState<PizzaType>(1)

  return (
    <div className={cn(className, 'flex flex-1')}>
      ChoosePizzaForm
      <div className="flex items-center justify-center flex-1 relative w-full">
        <img
          src={imageUrl}
          alt={name}
          className="relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]"
        />
      </div>
      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <p className="text-gray-400">{textDetaills}</p>

        <GroupVariants items={pizzaSizes} value={String(size)} onClick={(value) => setSize(Number(value))} />

        <Button className='h-[55px] px-10 test-base rounded-[18px]w-full'>
          Добавить в корзину за {price} Р.
        </Button>
      </div>
    </div>
  )
}
