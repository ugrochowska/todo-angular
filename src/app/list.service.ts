import {Injectable} from '@angular/core';
import {List} from './models/list';
import {Item} from './models/item';

@Injectable()
export class ListService {

  private list: List = new List('New List');

  addToList(newItem: Item): void {
    newItem.name = newItem.name.trim();
    if (!newItem.name) {
      return;
    }
    this.list.items.push(newItem);
  }

  removeFromList(uuid: number): void {
    if (!uuid) {
      return;
    }
    const index = this.list.items.findIndex(item => item.id === uuid);
    this.list.items.splice(index, 1);
    //     this.list.items = this.list.items.filter(i => i !== item);
  }

  getList(): List {
    this.addToList(new Item('first'));
    this.addToList(new Item('second'));
    return this.list;
  }
}
