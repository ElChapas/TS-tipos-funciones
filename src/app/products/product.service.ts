import { Product } from './product.model';
import { CreateProductDto, FindProductDto, UpdateDto } from './product.dto';
import { faker } from '@faker-js/faker';

export const products: Product[] = [];

const getIndex = (id: Product['id']) => {
  // Tipado por indice
  return products.findIndex((p) => p.id === id);
};

export const addProduct = (data: CreateProductDto) => {
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: new Date(),
    updatedAt: new Date(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
  };

  products.push(newProduct);
};

export const updateProduct = (
  id: Product['id'],
  changes: UpdateDto
): Product => {
  const index = getIndex(id);
  const prevData = products[index];
  products[index] = { ...prevData, ...changes, updatedAt: new Date() };
  return products[index];
};

export const deleteProduct = (id: Product['id']) => {
  const index = getIndex(id);
  products.splice(index, index);
};

export const findProducts = (data: FindProductDto): Product[] => {
  const product = products.find((p) => p.id === data.id);
  return products;
};
