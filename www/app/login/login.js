import {IonicApp, Page, NavController} from 'ionic/ionic';
import {ListPage} from '../list/list';
import {RegisterPage} from '../register/register';

@Page({
  templateUrl: 'app/login/login.html',
})
export class LoginPage {
  constructor(nav: NavController, app: IonicApp) {
    this.nav = nav;
    this.app = app;
    this.app.getComponent('leftMenu').enable(true);
  }

  login() {
    //At this moment doesn't do anything, just go to the mainpage. Currently is disabled
    this.nav.setRoot(ListPage);
    this.nav.push(ListPage);
  }

  register() {
    this.nav.push(RegisterPage);
  }

  onPageWillLeave() {
    this.app.getComponent('leftMenu').enable(true);
  }


}
