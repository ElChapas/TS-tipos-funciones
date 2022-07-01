export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  COSTUMER = 'costumer',
  HELLO = 12
}

export interface User {
  id: string | number;
  username: string;
  role: ROLES;
}
