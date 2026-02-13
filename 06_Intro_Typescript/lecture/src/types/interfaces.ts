import type { Hobby, Address, Order } from './types';

export interface IPerson {
  name: string | undefined;
  age?: number | undefined;
  hobbies?: Hobby[];
  email: string;
  address: Address;
}

export interface IEmployee extends IPerson {
  salary: number;
  isAdmin: boolean;
  startDate: string;
  endDate: string | undefined;
}

export interface ICustomer extends IPerson {
  orders?: Order[];
  created_at: string;
  updated_at: string;
}
