'use client'
import React from 'react'
import { cn } from '@/lib/utils'

import { Title } from '../shared/title'
import { RangeSlider } from '../shared/range-slider'
import { CheckboxFiltersGroup } from './checkbox-filters-group'
import { Input } from '../ui'

import { useIngredients, useFilters, useQueryFilters } from '@/hooks'

interface Props {
  className?: string
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading } = useIngredients()
  const filters = useFilters()

  useQueryFilters(filters)

  const updatePrices = (prices: number[]) => {
    filters.setPrices('priceFrom', prices[0])
    filters.setPrices('priceTo', prices[1])
  }

  return <div className={cn('mx-auto max-w-[1280px]', className)}>
    <CheckboxFiltersGroup
      title="Тип теста"
      name="pizzaTypes"
      className="mb-5"
      onClickCheckbox={filters.setPizzaTypes}
      selectedIds={filters.selectedPizzaTypes}
      items={[
        { text: 'Тонкое', id: '1' },
        { text: 'Традиционное', id: '2' },
      ]}
    />
    <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />
    <CheckboxFiltersGroup
      title="Размеры"
      name="sizes"
      className="mb-5"
      onClickCheckbox={filters.setSizes}
      selectedIds={filters.selectedSizes}
      items={[
        { text: '20 см', id: '20' },
        { text: '30 см', id: '30' },
        { text: '40 см', id: '40' },
      ]}
    />
    <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
      <p className="font-bold mb-3">Цена от и до:</p>
      <div className="flex gap-3 mb-5">
        <Input
          type="number"
          placeholder="0"
          min={0}
          max={1000}
          value={String(filters.selectedPrices.priceFrom)}
          onChange={(e) => filters.setPrices('priceFrom', Number(e?.target?.value))}
        />
        <Input
          type="number"
          min={100}
          max={1000}
          placeholder="1000"
          value={String(filters.selectedPrices.priceTo)}
          onChange={(e) => filters.setPrices('priceTo', Number(e?.target?.value))}
        />
      </div>
      <RangeSlider
        min={0}
        max={1000}
        step={10}
        value={[filters.selectedPrices.priceFrom || 0, filters.selectedPrices.priceTo || 1000]}
        onValueChange={updatePrices}
      />
    </div>
    <CheckboxFiltersGroup
      title="Ингредиенты"
      name="ingredients"
      limit={5}
      className="mt-5"
      defaultItems={ingredients.slice(0, 6)}
      items={ingredients}
      loading={loading}
      onClickCheckbox={filters.setSelectedIngredients}
      selectedIds={filters.selectedIngredients}
    />
  </div>
}