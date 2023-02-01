export const cardsMock = [
    {
      id: 1,
      name: 'Сет "4 Филадельфии"',
      imgPath: './img/setImages/set4.png',
      price: '1559',
      description: '1100 грамм 32 кусочек',
      count: 100,
    },
    {
      id: 2,
      name: 'Филадельфия LOVE сет',
      imgPath: './img/setImages/setLove.png',
      price: '1479',
      currency: 'BYN',
      description: '1000 грамм 40 кусочек',
      count: 100,
    },
    {
      id: 3,
      name: 'Филадельфия LOVE сет',
      imgPath: './img/setImages/setLove.png',
      price: '1479',
      description: '1000 грамм 40 кусочек',
      count: 100,
    },
  ];

  const convertedCards = {
    1: cardsMock[0],
    2: cardsMock[1],
    3: cardsMock[2]
  }

//   convertedCards['1'].name = 'New name';