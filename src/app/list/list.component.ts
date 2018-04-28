import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../models/item';
import {List} from '../models/list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() list: List;

  constructor() {
  }

  ngOnInit() {
    this.list = new List('nowa lista');
    this.add('first');
    this.add('second');
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.list.items.push(new Item(name));
  }

  remove(item: Item): void {
    this.list.items = this.list.items.filter(i => i !== item);
  }
}
