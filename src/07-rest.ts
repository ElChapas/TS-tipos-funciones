// Parametros rest, flexibilidad en los parametros
import { User, ROLES } from "./01-enum";

const currentUser: User = {
  username: 'Oscar',
  role: ROLES.HELLO
}

const checkAdminRole = () => {
  if(currentUser.role === ROLES.ADMIN){
    return true
  }
  return false
}

const checkRole = (...roles: ROLES[]) => {
  // rest params, podemos obtener una array como parametros, que contien los parametros que se enviaron
  if(roles.includes(currentUser.role)){
    return true
  }
  return false
}
const res =checkRole(ROLES.ADMIN, ROLES.COSTUMER, ROLES.HELLO, ROLES.SELLER) // podemos mandar tantos parametrso queramos
console.log(res);

