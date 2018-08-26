import {AfterContentInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Item} from '../models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements AfterContentInit {
  @Input() item: Item;
  @Output() onRemove = new EventEmitter<number>();
  @Output() onCheck = new EventEmitter<number>();
  @Output() onItemEdit = new EventEmitter<boolean>();

  @ViewChild('name') labelEdit;

  isEditing: boolean;
  oldName: string;

  constructor() {
    this.isEditing = false;
  }

  ngAfterContentInit() {
    this.oldName = this.item.name;
  }

  remove(uuid: number) {
    this.onRemove.emit(uuid);
  }

  check(uuid: number) {
    this.onCheck.emit(uuid);
  }

  edit() {
    this.isEditing = true;
    this.onItemEdit.emit(true);
  }

  onEditToDo(): void {
    if (this.labelEdit.invalid) {
      this.item.name = this.oldName;
    }
    this.isEditing = false;
    this.oldName = this.item.name;
    this.onItemEdit.emit(false);
  }
}
