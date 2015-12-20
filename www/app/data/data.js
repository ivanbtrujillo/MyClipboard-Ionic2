import {Storage, SqlStorage} from 'ionic/ionic';
import {Injectable} from 'angular2/angular2';

@Injectable()

export class DataService{
  constructor(){

    this.storage = new Storage(SqlStorage, {name: 'todoapp'});
    this.data = null;

    this.storage.get('todoapp').then((todos) =>{
      this.data = JSON.parse(todos) || [];
    })
  }

  getData(){
    return this.storage.get('todoapp');
  }

  save(item){
        this.data.push(item);
        let newData = JSON.stringify(this.data);
        this.storage.set('todoapp', newData);
  }
}
