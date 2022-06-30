// Sobre carga de funciones
// solo funciona con funciones declaradas como function

export function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join('') // string
  }
  return input.split('');
}

const res1 = parseStr('Oscar')
const res2 = parseStr(['O','s','c','a','r'])

// El problema es que en este punto res1 o res2 no reconoce que tipo de dato es
// hay que volver a hacer una validacion de tipos para que ts reconozca el tipo.

// Podemos asignar explicitamente como queremos que se comporte la respuesta
const res3 = parseStr('Adrian') as string[];


