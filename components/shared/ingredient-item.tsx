import { CircleCheck } from 'lucide-react'
import React from 'react'

import { cn } from '@/lib/utils'

interface Props {
  key: string
  name: string
  price: number
  imageUrl: string
  onClick: () => void
  active?: boolean
  className?: string
}

export const IngredientItem: React.FC<Props> = ({ name, price, imageUrl, active, className, onClick }) => {
  return (
    <div
      className={cn(
        'flex items-center flex-col p-1 rounded-md w-32 text-center relative cursor-pointer shadow-md bg-white',
        { 'border border-primary': active },
        className,
      )}
      onClick={onClick}>
      {active && <CircleCheck className="absolute top-2 right-2 text-primary" />}
      <img width={110} height={110} src={imageUrl} />
      <span className="text-xs mb-1">{name}</span>
      <span className="font-bold">{price} ₽</span>
    </div>
  )
}