import {Item} from './item';
import { v4 as uuid } from 'uuid';

export class List {
  id: number;
  name: string;
  items: Item[];

  constructor(name: string) {
    this.name = name;
    this.id = uuid();
    this.items = [];

    this.items.unshift(new Item('First'));
    this.items.unshift(new Item('Second'));
  }
}
