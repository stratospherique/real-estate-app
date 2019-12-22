let faker = require('faker');

const generateEstates = () => {
  let articles = [];
  for (let index = 0; index < 30; index += 1) {
    let id = index;
    let description = faker.random.words(10);
    let price = faker.commerce.price(1000, 5000, 0, '$');
    let preview = [faker.random.image()];
    let buildingType = faker.random.words(1);
    let propertyType = faker.random.words(1);
    let city = faker.address.city('mizouri');
    let footage = `${faker.finance.amount(50, 5000, 2, '')} sqrt`;
    let rating = faker.random.number(5);

    articles.push({
      id,
      description,
      price,
      preview,
      buildingType,
      propertyType,
      city,
      footage,
      rating,
    });
  }

  const users = [
    {
      userName: 'admin',
      email: faker.internet.email(),
      password: 'admin',
    },
  ];

  return {
    articles,
    trending: articles.slice(0, 10),
    users,
  };
};

module.exports = generateEstates;
