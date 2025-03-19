import { Container, Title, TopBar, Filters, ProductsGroupList } from '@/components/shared'

import categories from '@/data'

export default async function Home() {
  return (
    <>
      <Container className="mt-5">
        <Title text="Все пиццы" size='lg' className='font-extrabold' />
      </Container>
      <TopBar categories={categories?.filter(category => category.products.length > 0)} />
      <Container className='mt-10 pb-14'>
        <div className='flex gap-[60px]'>
          <div className='w-[250px]'>
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {categories?.map(
                (category) =>
                  category.products.length > 0 && (
                    <ProductsGroupList
                      key={category.id}
                      title={category.title}
                      categoryId={category.id}
                      items={category.products}
                    />
                  ),
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}