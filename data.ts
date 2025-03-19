const categories = [
  {
    id: 1,
    title: 'Пиццы',
    products: [
      {
        productId: 1,
        name: 'Сырная',
        items: [{ price: 300 }],
        categoryId: 1,
        imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF9C1DAAFCF3529A62947B9522A8FE.avif',
        ingredients: [{
          id: 1,
          name: 'Сырный бортик',
          price: 179,
          imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png',
        },
        {
          productId: 2,
          categoryId: 1,
          name: 'Сыры чеддер и пармезан',
          price: 79,
          imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796',
        },
        {
          productId: 3,
          categoryId: 1,
          name: 'Острый перец халапеньо',
          price: 59,
          imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png',
        },
        ],
      },
      {
        productId: 2,
        name: 'Кола-барбекю',
        items: [{ price: 590 }],
        categoryId: 1,
        imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF9050501F3FA690A64053F5F07626.avif',
        ingredients: [{
          id: 1,
          name: 'Сырный бортик',
          price: 179,
          imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png',
        },
        {
          id: 2,
          name: 'Сыры чеддер и пармезан',
          price: 79,
          imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796',
        },
        {
          id: 4,
          name: 'Пряная говвядина',
          price: 59,
          imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/11ef5ed5f8f64595a6d6a99c1fe6f7f0.png',
        },
        ],
      },
      {
        productId: 3,
        name: 'Пепперони фреш',
        items: [{ price: 590 }],
        categoryId: 1,
        imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
        ingredients: [{
          id: 1,
          name: 'Сырный бортик',
          price: 179,
          imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png',
        },
        {
          id: 5,
          name: 'Пикантная пепперони',
          price: 79,
          imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3',
        },
        {
          id: 2,
          name: 'Сыры чеддер и пармезан',
          price: 79,
          imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796',
        },
        {
          id: 6,
          name: 'Сливочная моцарелла',
          price: 79,
          imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png',
        },
        {
          id: 7,
          name: 'Свежие томаты',
          price: 59,
          imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67',
        },

        ],
      },
    ]
  },
  {
    id: 2,
    title: 'Закуски',
    products: [
      {
        productId: 4,
        name: 'Креветки',
        description: 'Цельные креветки в хрустящей панировке',
        items: [{ price: 219 }],
        categoryId: 2,
        imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF549430D2ADB3B91245F0B40BEC66.avif',
        ingredients: [],
      },
      {
        productId: 5,
        name: 'Дэнвич с говядиной',
        description: 'Хрустящая чиабатта с ароматной пряной говядиной и цыпленком с соусами бургер и барбекю, свежими томатами и моцареллой',
        items: [{ price: 170 }],
        categoryId: 2,
        imageUrl: 'https://media.dodostatic.net/image/r:1875x1875/019591cfed20780b8ce864e05bc5e37b.avif',
        ingredients: [],
      }
    ]
  },
  {
    id: 3,
    title: 'Десерты',
    products: [
      {
        productId: 6,
        name: 'Тирамису',
        description: 'Многослойный десерт в лучших итальянских традициях: легкий аромат какао, пропитанная кофе бисквитная прослойка и нежный крем',
        items: [{ price: 179 }],
        categoryId: 3,
        imageUrl: 'https://media.dodostatic.net/image/r:1875x1875/0195920f126b72208ce364b4c459364f.avif',
        ingredients: [

        ],
      },
      {
        productId: 7,
        name: 'Чизкейк Нью-Йорк',
        description: 'Нежнейшая сырная основа, тонкий корж песочного теста и никаких добавок. Классика в мире десертов',
        items: [{ price: 179 }],
        categoryId: 3,
        imageUrl: 'https://media.dodostatic.net/image/r:1875x1875/11eee20b6b6ec471ab74ab8f8885775b.avif',
        ingredients: [
        ],
      },
    ]
  }
]

export default categories