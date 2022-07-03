import { faker } from '@faker-js/faker';
import { addProduct, products, deleteProduct, updateProduct, getProduct } from './products/product.service';

for (let i = 0; i < 5; i++) {
  addProduct({
    id: i,
    title: faker.commerce.productName(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    stock: faker.datatype.number({ min: 0, max: 100 }),
    size: faker.helpers.arrayElement(['M','S','L', 'XL']),
    category: {
      id: faker.datatype.uuid(),
      name: faker.commerce.department(),
      updatedAt: faker.date.recent(),
      createdAt: faker.date.recent(),
    },
    color: faker.color.rgb(),
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    isNew: true,
    price: parseInt(faker.commerce.price(), 10),
    tags: faker.helpers.arrayElement(),
  });
}

console.log(products);
console.log("----------------------------------------------------");
// deleteProduct(1);
// console.log(products);
console.log("----------------------------------------------------");
updateProduct(1, {tags: ['hihi', 'haha',]})
console.log(products);



