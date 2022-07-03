import { BaseModel } from "../base.model";
import { Category } from "../categories/category.model";

export type Sizes = 'S' | 'M' | 'L' | 'X' | 'XL'

export interface Product extends BaseModel  {
    title: string;
    image: string;
    description: string;
    stock: number;
    size: Sizes;
    color: string;
    price: number;
    isNew: boolean;
    category: Category;
    tags: string[];
    readonly createdAt: Date;
    updatedAt: Date;
}
