import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }

  public storeData(data:any): void {
    const json = JSON.stringify(data);
  }
}
