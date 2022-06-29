// Tipo 'never' funciones que nunca terminan de ejecutarse o ejecutarse por completo.

const withoutEnd = () => {
  while(true){
    console.log('arremangala arrempujala');
  }
}

const fail = (message: string) => {
  throw new Error(message)
}

const example = (input: unknown) => {
  if (typeof(input) === 'string') {
    return 'es un string'
  } else if(Array.isArray(input)) {
    return 'es un array'
  }
  return fail('No hay match')
}

console.log(example('Hola'));
console.log(example([1,2,3]));
console.log(example(1));



