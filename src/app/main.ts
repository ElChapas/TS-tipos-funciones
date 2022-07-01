import { addProduct } from "./products/product.service";

addProduct({
    id: 12,
    title: 'Laptop',
    createdAt: new Date,
    updatedAt: new Date,
    stock: 12,
    size: 'L',
    category: {
      id: 1,
      name: 'electronics',
      updatedAt: new Date,
      createdAt: new Date
    }
})
