import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';
import {ITask} from '../resurses/interfaisis';

interface haveId {
  id : string
}

@Injectable({
  providedIn: 'root'
})
export class DbService <T extends haveId> {

  constructor(private storage : Storage) { }

  //Create
  addElem(item: T, dbKey : string): Promise<T> {
    return this.storage.get(dbKey).then((items: T[]) => {
      if (items) {
        items.push(item);
        return this.storage.set(dbKey, items);
      } else {
        return this.storage.set(dbKey, [item]);
      }
    })
  }

  // Read
  getElems(dbKey): Promise<T[]> {
    return this.storage.get(dbKey);
  }

  //Delete
  deleteElem(id: string, dbKey): Promise<T> {
    return this.storage.get(dbKey).then((items: T[]) => {
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
  updateElem(elem : T, dbKey) : Promise<T>{
    return this.storage.get(dbKey).then((items: T[]) => {
      if (!items || items.length === 0){
        return null
      }

      let newItems : T[] = []

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
