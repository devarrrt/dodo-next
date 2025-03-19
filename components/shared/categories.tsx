'use client'

import { cn } from '@/lib/utils'
import { Category } from '@prisma/client'

import { useCategoryStore } from '@/store/category'

interface Props {
  items: Category[]
  className?: string
}

export const Categories: React.FC<Props> = ({ items, className }) => {
  const activeCategoryId = useCategoryStore((state) => state.activeId)

  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {items?.map((cat, index) => (
        <a
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            activeCategoryId === cat?.id && 'bg-white shadow-md shadow-gray-200 text-primary',
          )}
          href={`/#${cat?.title}`}
          key={index}>
          <button>{cat?.title}</button>
        </a>
      ))}
    </div>
  )
}
