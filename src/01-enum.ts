export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  COSTUMER = 'costumer',
  HELLO = 12
}

export type User = {
  username: string,
  role: ROLES
}

export const myUser: User = {
  username: 'oscar',
  role: ROLES.ADMIN
}
