// Una forma de evitar usar "any"
let anyVar: any;
anyVar = [];

let myBool: boolean = anyVar; //Esto es posible porque anyVar incluye tipo boolean. Hay que evitar hacer esto.

// Unknown

let unVar: unknown;
unVar = {};
if(typeof(unVar) == 'string'){
  unVar.toUpperCase(); //Necesitamos una verificacion de tipo para hacer algo con unVar
  // Dentro de este if unVar es un string.
}

function parse(str: string): unknown {
  return JSON.parse(str)
}

parse("{name: 'luis'}")
parse("{name: 'luis'") // Aqui se envia un sting invalido, por lo que retornar unknown en la funcion parse es ideal.
