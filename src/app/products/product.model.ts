import { Category } from "../categories/category.model";

export type Sizes = 'S' | 'M' | 'L' | 'X' | 'XL'

export interface Product { // A diferencia de un type como este, interface puede extenderse.
    id: string | number;
    title: string;
    createdAt: Date;
    stock: number;
    size: Sizes;
    category: Category
}
