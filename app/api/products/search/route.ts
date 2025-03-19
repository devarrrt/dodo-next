import { prisma } from '@/prisma/prisma-client'
import { NextRequest, NextResponse } from 'next/server'

const products = [
  {
    "id": 1,
    "name": "Омлет с ветчиной и грибами",
    "imageUrl": "https://media.dodostatic.net/image/r:292x292/11EE7970321044479C1D1085457A36EB.webp",
    "categoryId": 2,
    "createdAt": "2024-11-30T13:42:14.127Z",
    "updatedAt": "2024-11-30T13:42:14.127Z"
  },
  {
    "id": 2,
    "name": "Омлет с пепперони",
    "imageUrl": "https://media.dodostatic.net/image/r:292x292/11EE94ECF33B0C46BA410DEC1B1DD6F8.webp",
    "categoryId": 2,
    "createdAt": "2024-11-30T13:42:14.127Z",
    "updatedAt": "2024-11-30T13:42:14.127Z"
  },
  {
    "id": 3,
    "name": "Кофе Латте",
    "imageUrl": "https://media.dodostatic.net/image/r:292x292/11EE7D61B0C26A3F85D97A78FEEE00AD.webp",
    "categoryId": 2,
    "createdAt": "2024-11-30T13:42:14.127Z",
    "updatedAt": "2024-11-30T13:42:14.127Z"
  },
  {
    "id": 4,
    "name": "Дэнвич ветчина и сыр",
    "imageUrl": "https://media.dodostatic.net/image/r:292x292/11EE796FF0059B799A17F57A9E64C725.webp",
    "categoryId": 3,
    "createdAt": "2024-11-30T13:42:14.127Z",
    "updatedAt": "2024-11-30T13:42:14.127Z"
  },
  {
    "id": 5,
    "name": "Куриные наггетсы",
    "imageUrl": "https://media.dodostatic.net/image/r:292x292/11EE7D618B5C7EC29350069AE9532C6E.webp",
    "categoryId": 3,
    "createdAt": "2024-11-30T13:42:14.127Z",
    "updatedAt": "2024-11-30T13:42:14.127Z"
  },
  {
    "id": 6,
    "name": "Картофель из печи с соусом 🌱",
    "imageUrl": "https://media.dodostatic.net/image/r:292x292/11EED646A9CD324C962C6BEA78124F19.webp",
    "categoryId": 3,
    "createdAt": "2024-11-30T13:42:14.127Z",
    "updatedAt": "2024-11-30T13:42:14.127Z"
  },
  {
    "id": 7,
    "name": "Додстер",
    "imageUrl": "https://media.dodostatic.net/image/r:292x292/11EE796F96D11392A2F6DD73599921B9.webp",
    "categoryId": 3,
    "createdAt": "2024-11-30T13:42:14.127Z",
    "updatedAt": "2024-11-30T13:42:14.127Z"
  },
  {
    "id": 8,
    "name": "Острый Додстер 🌶️🌶️",
    "imageUrl": "https://media.dodostatic.net/image/r:292x292/11EE796FD3B594068F7A752DF8161D04.webp",
    "categoryId": 3,
    "createdAt": "2024-11-30T13:42:14.127Z",
    "updatedAt": "2024-11-30T13:42:14.127Z"
  },
  {
    "id": 9,
    "name": "Банановый молочный коктейль",
    "imageUrl": "https://media.dodostatic.net/image/r:292x292/11EEE20B8772A72A9B60CFB20012C185.webp",
    "categoryId": 4,
    "createdAt": "2024-11-30T13:42:14.127Z",
    "updatedAt": "2024-11-30T13:42:14.127Z"
  },
  {
    "id": 10,
    "name": "Карамельное яблоко молочный коктейль",
    "imageUrl": "https://media.dodostatic.net/image/r:292x292/11EE79702E2A22E693D96133906FB1B8.webp",
    "categoryId": 4,
    "createdAt": "2024-11-30T13:42:14.127Z",
    "updatedAt": "2024-11-30T13:42:14.127Z"
  },
  {
    "id": 11,
    "name": "Молочный коктейль с печеньем Орео",
    "imageUrl": "https://media.dodostatic.net/image/r:292x292/11EE796FA1F50F8F8111A399E4C1A1E3.webp",
    "categoryId": 4,
    "createdAt": "2024-11-30T13:42:14.127Z",
    "updatedAt": "2024-11-30T13:42:14.127Z"
  },
  {
    "id": 12,
    "name": "Классический молочный коктейль 👶",
    "imageUrl": "https://media.dodostatic.net/image/r:292x292/11EE796F93FB126693F96CB1D3E403FB.webp",
    "categoryId": 4,
    "createdAt": "2024-11-30T13:42:14.127Z",
    "updatedAt": "2024-11-30T13:42:14.127Z"
  },
  {
    "id": 13,
    "name": "Ирландский Капучино",
    "imageUrl": "https://media.dodostatic.net/image/r:292x292/11EE7D61999EBDA59C10E216430A6093.webp",
    "categoryId": 5,
    "createdAt": "2024-11-30T13:42:14.127Z",
    "updatedAt": "2024-11-30T13:42:14.127Z"
  },
  {
    "id": 14,
    "name": "Кофе Карамельный капучино",
    "imageUrl": "https://media.dodostatic.net/image/r:292x292/11EE7D61AED6B6D4BFDAD4E58D76CF56.webp",
    "categoryId": 5,
    "createdAt": "2024-11-30T13:42:14.127Z",
    "updatedAt": "2024-11-30T13:42:14.127Z"
  },
  {
    "id": 15,
    "name": "Кофе Кокосовый латте",
    "imageUrl": "https://media.dodostatic.net/image/r:292x292/11EE7D61B19FA07090EE88B0ED347F42.webp",
    "categoryId": 5,
    "createdAt": "2024-11-30T13:42:14.127Z",
    "updatedAt": "2024-11-30T13:42:14.127Z"
  },
  {
    "id": 16,
    "name": "Кофе Американо",
    "imageUrl": "https://media.dodostatic.net/image/r:292x292/11EE7D61B044583596548A59078BBD33.webp",
    "categoryId": 5,
    "createdAt": "2024-11-30T13:42:14.127Z",
    "updatedAt": "2024-11-30T13:42:14.127Z"
  },
  {
    "id": 17,
    "name": "Кофе Латте",
    "imageUrl": "https://media.dodostatic.net/image/r:292x292/11EE7D61B0C26A3F85D97A78FEEE00AD.webp",
    "categoryId": 5,
    "createdAt": "2024-11-30T13:42:14.127Z",
    "updatedAt": "2024-11-30T13:42:14.127Z"
  }
]

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get('query') || ''

  // реализация со статичными данными почему-то не работает. поэтому, вероятно, придется на фронте прописывать логику поиска
  // const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(query.toLowerCase()))

  //реализация с работающей базой 
  // const products = await prisma.product.findMany({
  //   where: {
  //     name: {
  //       contains: query,
  //       mode: 'insensitive',
  //     },
  //   },
  //   take: 5,
  // });

  return NextResponse.json(filteredProducts)
}