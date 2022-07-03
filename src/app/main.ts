import { faker } from '@faker-js/faker';
import { addProduct, products, deleteProduct, updateProduct, findProducts } from './products/product.service';

for (let i = 0; i < 5; i++) {
  addProduct({
    title: faker.commerce.productName(),
    stock: faker.datatype.number({ min: 0, max: 100 }),
    size: faker.helpers.arrayElement(['M','S','L', 'XL']),
    color: faker.color.rgb(),
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    isNew: true,
    price: parseInt(faker.commerce.price(), 10),
    tags: faker.helpers.arrayElement(),
    categoryId: faker.datatype.uuid()
  });
}

console.log(products);
console.log("----------------------------------------------------");
// deleteProduct(1);
// console.log(products);
console.log("----------------------------------------------------");
console.log(updateProduct(1, {
  title: 'hi'
}));

console.log("----------------------------------------------------");
console.log(findProducts({
  color:'red'
}));




