import { v4 as uuid } from 'uuid';

export class Item {

  private readonly _id: number;
  private _name: string;
  private _status: ItemStatus;

  constructor(name: string) {
    this._name = name.trim();
    this._id =  uuid();
    this._status = ItemStatus.tbd;
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

  get status(): ItemStatus {
    return this._status;
  }

  changeState() {
    this._status = this._status === ItemStatus.tbd ? ItemStatus.done : ItemStatus.tbd;
  }
}

export enum ItemStatus {
  tbd = 'tbd',
  done = 'done'
}
