import React from 'react'
import { notFound } from 'next/navigation'

import categories from '@/data'

import { ChooseProductModal, Container, GroupVariants, Title } from '@/components/shared'


//этот компонент открывает модальное окно по id
export default async function ProductModalPage({ params: { id } }: { params: { id: string } }) {
  // const product = await prisma.product.findFirst({where: { id: Number(id)}}) - таким образом мы бы искали продукт, если бы работала призма

  const product = categories
    ?.map(category => category?.products.find(product => product?.productId === Number(id)))
    ?.find(product => product)

  if (!product) {
    return notFound()
  }

  return (
    <ChooseProductModal product={product} />
  )
}
