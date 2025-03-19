import React from 'react'
import { cn } from '@/lib/utils'

import { Title } from '../shared/title'
import { PizzaImage } from '../shared/pizza-image'
import { Button } from '../ui'

interface Props {
  className?: string
  imageUrl: string
  name: string
  items?: any[]
  price: number
  loading?: boolean
  onSubmit: (itemId: number, ingredients: number[]) => void
}

const textDetaills = '30 см, традиционная на тонком тесте'
const totalPrice = 340

export const ChooseProductForm: React.FC<Props> = ({ className, imageUrl, name, price, items, loading, onSubmit }) => {
  return (
    <div className={cn(className, 'flex flex-1')}>
      ChooseProductForm
      <div className="flex items-center justify-center flex-1 relative w-full">
        <PizzaImage imageUrl={imageUrl} size={30} />
      </div>
      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <p className="text-gray-400">{textDetaills}</p>

        <Button className='h-[55px] px-10 test-base rounded-[18px]w-full'>
          Добавить в корзину за {totalPrice} Р.
        </Button>
      </div>
    </div>
  )
}
