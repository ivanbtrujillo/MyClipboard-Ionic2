import {Page, NavController, NavParams} from 'ionic/ionic';
import {FormBuilder} from 'angular2/angular2';

@Page({
  templateUrl: 'app/add-item/add-item.html',
})
export class AddItemPage {
  constructor(nav: NavController, navParams: NavParams, fb: FormBuilder) {
    this.nav = nav;
    this.navParams = navParams;

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

  save(event){
    event.preventDefault();

    let newItem = {
      title: this.itemForm.value.title,
      description: this.itemForm.value.description
    }

    this.navParams.get('listPage').saveItem(newItem);
    this.nav.pop();
  }


}
