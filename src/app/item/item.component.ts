import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from '../models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  @Output() removeEmitter = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {}

  remove(uuid: number) {
    this.removeEmitter.emit(uuid);
  }

  edit() {
    alert('edit');
    return;
  }
}
