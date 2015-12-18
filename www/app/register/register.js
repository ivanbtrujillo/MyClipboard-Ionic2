import {IonicApp, Page, NavController} from 'ionic/ionic';
import {ListPage} from '../list/list';

@Page({
  templateUrl: 'app/register/register.html',
})
export class RegisterPage {
  constructor(nav: NavController, app: IonicApp) {
    this.nav = nav;
    this.app = app;
    this.app.getComponent('leftMenu').enable(false);
  }

  register() {
    //At this moment doesn't do anything, just go to the mainpage. Currently is disabled
    this.nav.push(ListPage);
  }

  onPageWillLeave() {
    this.app.getComponent('leftMenu').enable(true);
  }
}
