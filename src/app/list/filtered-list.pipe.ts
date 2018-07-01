import { Pipe, PipeTransform } from '@angular/core';
import {Item, ItemStatus} from '../models/item';

@Pipe({
  name: 'filteredList'
})
export class FilteredListPipe implements PipeTransform {

  transform(listToFiler: Item[], status: ItemStatus): Item[] {
    return status ? listToFiler.filter(item => item.status === status) : listToFiler;
  }
}
