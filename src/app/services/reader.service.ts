import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Statement } from '../models/statement';
import { Configuration } from '../models/configuration';


@Injectable({
  providedIn: 'root'
})
export class ReaderService {

  configuration: Configuration;
  statements: Map<string, Statement> = new Map();
  constructor(private client: HttpClient) { }

  public readStatements(): Subject<Map<string, Statement>> {
    const subject = new Subject<Map<string, Statement>>();
    let id = 0;
    this.client.get<any>('./assets/config/statements.json')
      .subscribe(e => {
        e.statements.forEach((element: string) => this.statements.set(element, new Statement(id++, element)));
        this.configuration = new Configuration(e.levels, e.firebase.key, e.firebase.user);
      })
      .add(() => subject.next(this.statements));
    return subject;
  }

  public getStatements(): Map<string, Statement> {
    return this.statements;
  }

  public getTotalColumns(): number {
    return this.configuration.levels.length;
  }

  public getHighestLevel(): number {
    return Math.max.apply(Math, this.configuration.levels.map(e => Object.keys(e)[0]));
  }
}
