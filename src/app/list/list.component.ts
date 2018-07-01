import {Component, OnInit} from '@angular/core';
import {Item, ItemStatus} from '../models/item';
import {List} from '../models/list';
import {ListService} from '../list.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: List;
  item: Item;
  status: ItemStatus;

  constructor(
    private listService: ListService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    router.events.subscribe((val) => {
      if ( val instanceof NavigationEnd ) {
        this.status = this.route.snapshot.paramMap.get('status') as ItemStatus;
      }
    });

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

  onCheckItem(itemUuid: number): void {
    this.listService.changeItemState(itemUuid);
  }
}
