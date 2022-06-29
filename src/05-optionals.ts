// Parametros opcionales y nullish-coalescing
export const createProduct = (
  id: string | number,
  stock: number,
  isNew?: boolean
) => {
  return {
    id,
    stock: stock ?? 10, // nullish-coalescing
    isNew: isNew ?? true // Solo valida si es null o undefined. Para evitar problemas.
  }
}

console.log(createProduct(1,10,false));

