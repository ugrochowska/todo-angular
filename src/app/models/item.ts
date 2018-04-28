import { v4 as uuid } from 'uuid';

export class Item {
  id: number;
  name: string;
  status: ItemStatus;

  constructor(name: string) {
    this.name = name;
    this.id =  uuid();
    this.status = ItemStatus.tbd;
  }
}

export enum ItemStatus {
  tbd = 1,
  done = 2
}
