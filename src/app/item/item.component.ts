import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from '../models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  @Output() onRemove = new EventEmitter<number>();
  @Output() onCheck = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {}

  remove(uuid: number) {
    this.onRemove.emit(uuid);
  }

  check(uuid: number) {
    this.onCheck.emit(uuid);
  }

  edit() {
    alert('edit');
    return;
  }
}
