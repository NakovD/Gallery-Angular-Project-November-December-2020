import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { IPicture } from '../shared/interfaces/picture';

@Injectable({
  providedIn: 'root'
})
export class PictureService {
  items: Observable<IPicture>[];
  db;
  constructor(db: AngularFireDatabase) {
    this.db = db;
  }


  saveItem(typePic, data) {
    var typeCollection = this.db.list(typePic);
    typeCollection.push(data);
    // console.log(this.db.list('pictures'))
    // this.db.list('pictures');
    // console.log(th);
  }
}
