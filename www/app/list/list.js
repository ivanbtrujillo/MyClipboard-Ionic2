import {Page, NavController} from 'ionic/ionic';
import {AddItemPage} from '../add-item/add-item';
import {EditItemPage} from '../edit-item/edit-item';
import {ItemDetailPage} from '../item-detail/item-detail';
import {DataService} from '../data/data';

@Page({
  templateUrl: 'app/list/list.html'
})

export class ListPage {
  constructor(nav: NavController, dataService: DataService) {
    this.nav = nav;
    this.dataService = dataService;

    this.items = [];

    this.dataService.getData().then((todos) => {
      this.items = JSON.parse(todos) || [];
    });

  }

  addItem(){
    this.nav.push(AddItemPage, {listPage: this});
  }

  saveItem(item){
    this.items.push(item);
    this.dataService.save(item);
  }

  removeItem(item){
    for(i = 0; i < this.items.length; i++) {
      if(this.items[i] == item){
        this.items.splice(i, 1);
      }
    }
  }

  editItem(item){
    this.item = item;
    this.nav.push(EditItemPage, {listPage: this, item: this.item; items:this.items});
  }

  updateItem(oldItem, newItem){
    for(i = 0; i < this.items.length; i++) {
      if(this.items[i] == oldItem){
        this.items[i].title = newItem.title;
        this.items[i].description = newItem.description;
      }
    }
  }

  viewItem(item){
   this.nav.push(ItemDetailPage, {item: item });
  }
}
