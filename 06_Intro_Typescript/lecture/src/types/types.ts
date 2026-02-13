export type User = {
  name: string | undefined;
  age?: number | undefined;
  isStudent: boolean;
  hobbies?: Hobby[];
  email: string;
};

export type Hobby = {
  name: string;
  id: number;
};
export type Address = {
  street: string;
  streetNumber: number;
  postalcode: number;
  country: string;
};
export type Product = {
  productName: string;
  productPrice: number;
  productQty: number;
  productDescription: string;
};

export type Order = {
  orderId: number;
  products: Product[];
  totalAmount: number;
  created_at: string;
  updated_at: string;
};

export type UsersArray = User[];
