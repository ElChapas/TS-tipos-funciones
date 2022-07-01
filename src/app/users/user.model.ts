import { BaseModel } from "../base.model";

export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  COSTUMER = 'costumer',
  HELLO = 12
}

export interface User extends BaseModel {
  username: string;
  role: ROLES;
}
