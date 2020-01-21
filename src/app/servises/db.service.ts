import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';
import {ITask} from '../resurses/interfaisis';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private storage : Storage) { }

  //Create
  addElem(item: ITask, dbKey : string): Promise<ITask> {
    return this.storage.get(dbKey).then((items: ITask[]) => {
      if (items) {
        items.push(item);
        return this.storage.set(dbKey, items);
      } else {
        return this.storage.set(dbKey, [item]);
      }
    })
  }

  // Read
  getElems(dbKey): Promise<ITask[]> {
    return this.storage.get(dbKey);
  }

  //Delete
  deleteElem(id: string, dbKey): Promise<ITask> {
    return this.storage.get(dbKey).then((items: ITask[]) => {
      if (!items || items.length === 0) {
        return null;
      }
      let toKeep: any[] = [];
      for (let i of items) {
        if (i.id !== id) {
          toKeep.push(i);
        }
      }
      return this.storage.set(dbKey, toKeep);
    });
  }

  // Update
  updateElem(elem : ITask, dbKey) : Promise<any>{
    return this.storage.get(dbKey).then((items: ITask[]) => {
      if (!items || items.length === 0){
        return null
      }

      let newItems : ITask[]

      for (let i of items){
        if(i.id === elem.id){
          newItems.push(elem)
        }else {
          newItems.push(i)
        }
      }

      return this.storage.set(dbKey, newItems)
    });
  }
}
