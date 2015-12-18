import {App, IonicApp, Platform} from 'ionic/ionic';
import {ListPage} from './list/list';
import {LoginPage} from './login/login';
import {EventsPage} from './events/events';
import {DataService} from './data/data';

@App({
  templateUrl: 'app/app.html'
  providers: [DataService]
})
export class MyApp {
  constructor(platform: Platform, app: IonicApp) {
    this.platform = platform;
    this.app = app;
    this.initializeApp();

    //You cant set LoginPage as Root to see the login components
    this.root = ListPage;

    this.pages = [
      { title: 'My Clipboard', component: ListPage, icon: 'clipboard' },
      { title: 'Agenda', component: EventsPage, icon: 'calendar' },

  }

  openPage(page){

    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component).then(() => {
      this.app.getComponent('leftMenu').close();
    })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log('Platform ready');
    });
  }
}
