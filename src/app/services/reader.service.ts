import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Statement } from '../models/statement';


@Injectable({
  providedIn: 'root'
})
export class ReaderService {

 

  statements: Map<string, Statement> = new Map();
  constructor(private client: HttpClient) { }

  public readStatements(): Subject<Map<string, Statement>> {
    const subject = new Subject<Map<string, Statement>>();
    let id = 0;
    this.client.get<any>('./assets/config/statements.json')
      .subscribe(e =>
        e.statements.forEach(element => this.statements.set(element, new Statement(id++, element)))
      )
      .add(() => subject.next(this.statements));
    return subject;
  }

  public getStatements(): Map<string, Statement> {
    return this.statements;
  }

  public getTotalColumns(): number {
    return 7;
  }

  getHighestLevel(): number {
    return 3;
  }
}
