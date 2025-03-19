import React from 'react'
import { notFound } from 'next/navigation'

import { Container, GroupVariants, Title } from '@/components/shared'

import categories from '@/data'

//этот компонент открывает страницу по id
export default async function ProductPage({ params: { id }, }: { params: { id: string } }) {

  // const product = await prisma.product.findFirst({where: { id: Number(id)}}) - таким образом мы бы искали продукт, если бы работала призма
  const product = categories
    .map(category => category.products.find(product => product.productId === Number(id)))
    .find(product => product)

  if (!product) {
    return notFound()
  }

  return (
    <div>
      <Container className="flex flex-col my-10">
        <div className="flex flex-1">
          {/* <PizzaImage imageUrl={product.imageUrl} className="" size={40} /> */}
          <div className="w-[490px] bg-[#f7f6f5] p-7">
            <Title text={product.name} size="md" className="font-extrabold mb-1" />
            <p className="text-gray-400">{'textDetaills'}</p>

            <div className="flex flex-col gap-4 mt-5">
              <GroupVariants
                value='2'
                items={
                  [
                    {
                      name: 'Маленькая',
                      value: '1'
                    },
                    {
                      name: 'Средняя',
                      value: '2'
                    },
                    {
                      name: 'Большая',
                      value: '3'
                    },
                  ]} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}