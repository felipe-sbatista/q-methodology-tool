import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  dbRef: AngularFireList<any> = null;

  constructor(private db: AngularFireDatabase) {
    this.dbRef = db.list('/responses');
  }

  public storeData(data: any): any {
    return this.dbRef.push(data);
  }


  // TODO: deploy no firebase, usar o realtime db, melhorar a tela de registro padding nos cards e etc 
}
