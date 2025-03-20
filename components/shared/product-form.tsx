import React from 'react'
import { ProductWithRelations } from '@/@types/prisma'

import { ChoosePizzaForm } from './choose-pizza-form'
import { ChooseProductForm } from './choose-product-form'
import { log } from 'console'

interface Props {
  product: ProductWithRelations
  onSubmit?: VoidFunction
}

export const ProductForm: React.FC<Props> = ({ product, onSubmit }) => {

  const isPizza = product?.categoryId === 1
  const firstItem = product.items[0]

  console.log(product,'product')

  if (isPizza) {
    return (
      <ChoosePizzaForm
        imageUrl={product.imageUrl}
        name={product.name}
        ingredients={product.ingredients}
        items={product.items}
        onSubmit={() => { }}
        price={firstItem.price}
        loading={false}
      />
    )
  }

  return (
    <ChooseProductForm
      imageUrl={product.imageUrl}
      name={product.name}
      onSubmit={() => { }}
      price={firstItem.price}
      loading={false}
    />
  )
}