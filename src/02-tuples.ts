const user: [string, number] = ['Oscar', 22] // Tipamos fuertemente el array.
const [username, age] = user;
username // 'Oscar'
age // 22

user.push('hello'); // Esto es posible porque la tupla es de strings y numbers. Aunque esto no seria lo ideal
// user.push(false); // Esto no es permitido.
console.log(user);

