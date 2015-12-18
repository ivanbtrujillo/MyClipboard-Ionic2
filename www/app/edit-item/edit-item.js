import {Page, NavController, NavParams} from 'ionic/ionic';
import {FormBuilder} from 'angular2/angular2';

@Page({
  templateUrl: 'app/edit-item/edit-item.html',
})
export class EditItemPage {
  constructor(nav: NavController, navParams: NavParams, fb: FormBuilder) {
    this.nav = nav;
    this.navParams = navParams;
    this.oldItem  = this.navParams.get('item');


    if(!this.navParams.get('item')){
      this.itemForm = fb.group({
        title : [""],
        description : [""]
      });

    }else{
      this.itemForm = fb.group({
        title : [ this.navParams.get('item').title],
        description : [this.navParams.get('item').description]
      });
    }


  }

  update(event){
    event.preventDefault();
    let newItem = {
      title: this.itemForm.value.title,
      description: this.itemForm.value.description
    }
    this.navParams.get('listPage').updateItem(this.oldItem, newItem);

    this.nav.pop();
  }


}
