import { Product } from './product.model'

export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  // ... Atributos de Product con datos omitidos. Y un nuevo atributo categoryId
  // Esos atributos omitidos deben ser generados al momento de crear el producto
  categoryId: string;
}

// type example = Pick<Product, 'color' | 'size'>

export interface UpdateDto extends Partial<CreateProductDto> {
  // Partial de CreateProductDto porque este ya omite los mismos atributos que necesitamos
}

export interface FindProductDto extends Readonly<Partial<Product>> {}
