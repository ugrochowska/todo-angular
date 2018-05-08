import { v4 as uuid } from 'uuid';

export class Item {

  private readonly _id: number;
  private _name: string;
  private status: ItemStatus;

  constructor(name: string) {
    this._name = name.trim();
    this._id =  uuid();
    this.status = ItemStatus.tbd;
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}

export enum ItemStatus {
  tbd = 1,
  done = 2
}
