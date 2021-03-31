export interface MyWorker {
  id: number;
  name: string;
  surname: string;
  patronymic: string;
  phone: string;
  email: string;
  department: number;
  edit: boolean;
}

export enum MyDepartments {
  it,
  sale,
  delivery,
  legal,
}
