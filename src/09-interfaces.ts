type Sizes = 'S' | 'M' | 'L' | 'X' | 'XL'

interface Product { // A diferencia de un type como este, interface puede extenderse.
    id: string | number;
    title: string;
    createdAt: Date;
    stock: number;
    size: Sizes;
}

const products: Product[] = [];

const addProduct = (data: Product) => {
    products.push(data);
}

