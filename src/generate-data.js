var faker = require('faker');

var database = { products: [] };

for (var i=1; i<=50; i++) {
  database.products.push({
    id: i,
    itemName: faker.random.words(),
    price: Math.random()*100,
    type: faker.random.words()
  });
}

console.log(JSON.stringify(database));