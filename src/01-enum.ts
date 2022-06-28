enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  COSTUMER = 'costumer'
}

type user = {
  username: string,
  role: ROLES
}

const myUser: user = {
  username: 'oscar',
  role: ROLES.ADMIN
}
