// Parametros por defecto
export const createProduct = (
  id: string | number,
  stock: number = 0,
  isNew: boolean = true
) => {
  return {
    id,
    stock,
    isNew
  }
}

createProduct(1) // {id: 1, stock: 0, isNew: true}
createProduct(2, 20)// {id: 2, stock: 20, isNew: true}
createProduct(3, 23, false)// {id: 3, stock: 23, isNew: false}

export const createProductV2 = (data: {
  id: string | number,
  stock?: number, // Aqui no se puede definir un valor por defecto
  isNew?: boolean
}) => {
  const {id, stock = 0, isNew = true} = data;
  // Desestrcturamos data y aqui mismo asignamos los valores por defecto.
  // Existen muchas formas de hacer parametros opcionales en un parametro de tipo objeto.
  return {
    id,
    stock,
    isNew
  }
}

console.log(createProductV2({id: 1, isNew: false}));
// De esta forma podemos asignar los parametros a gusto, sin ir en un orden.

