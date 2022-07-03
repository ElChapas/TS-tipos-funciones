import { Product } from "./product.model";

export const products: Product[] = [];

export const addProduct = (data: Product) => {
    products.push(data);
}

const getIndex = (id: number | string) => {
    return products.findIndex(p => p.id === id)
}

export const updateProduct = (id: number | string, changes: Object) => {
    const index = getIndex(id);
    const p = products[index];
    products[index] = {...p, ...changes};
}

export const deleteProduct = (id: string | number) => {
    const index = getIndex(id);
    products.splice(index, index)
}

export const getProduct = (id: string | number) => {
    return products.find(p => p.id === id)
}
