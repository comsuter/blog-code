import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent {

  item_byParent = 'Television';

  itemList = ['item1', 'item2', 'item3', 'item4'];

  addItem_byParent(item: string) {
    this.itemList.push(item);
  }


}
