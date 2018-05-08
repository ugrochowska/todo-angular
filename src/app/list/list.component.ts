import {Component, OnInit} from '@angular/core';
import {Item} from '../models/item';
import {List} from '../models/list';
import {ListService} from '../list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: List;
  item: Item;

  constructor(private listService: ListService) {
  }

  ngOnInit() {
    this.list = this.listService.getList();
    this.item = new Item('');
  }

  onAddToList(): void {
     this.listService.addToList(this.item);

     this.item = new Item('');
  }

  onRemoveItem(itemUuid: number): void {
    this.listService.removeFromList(itemUuid);
  }
}
