// Sobre carga de funciones: la solucion

export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;
// Declarar el tipo de dato de retorno de la funcion antes nos
// ayuda a no tener que hacer una verificacion de datos a los retornos que da la funcion.

export function parseStr(input: unknown): (unknown) { // recibe y retorna unknown para dar mas generalizacion
  if (Array.isArray(input)) {
    return input.join('') // string
  } else if(typeof(input) === 'string'){
    return input.split('');
  } else if(typeof(input) === 'number') {
    return true;
  }
}

const res1 = parseStr('Oscar') // res1 ahora es array string[]
const res2 = parseStr(['O','s','c','a','r'])// res1 ahora es string
const res3 = parseStr(12)
console.log(typeof(res3));
// Si asignamos que se retorna un boolean, pero en realidad no se retorna:
// ts detecta la respuesta como boolean, pero en realidad es undefined.
// En todo caso los overloads no son muy comunes y solo hay que tener estos detalles en cuenta.

//const res4 = parseStr([12])




