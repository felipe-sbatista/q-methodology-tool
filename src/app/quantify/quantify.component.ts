import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';
import { ReaderService } from '../services/reader.service';
import { Statement } from '../models/statement';

@Component({
  selector: 'app-quantify',
  templateUrl: './quantify.component.html',
  styleUrls: ['./quantify.component.css']
})
export class QuantifyComponent implements OnInit {

  public statusBar = 0;
  public maxBar = 0;
  public structures = new Map<string, Statement[]>();
  public classifiedStatements: any;
  public mapStatements: Map<string, Statement>;
  public levels = [];
  public totalStatements = 0;
  public objectKeys = Object.keys;
  public levelsMap: Map<string, any>;


  constructor(private reader: ReaderService, private router: Router) { }

  ngOnInit() {
    if (!this.reader.configuration) {
      this.moveBack();
    }
    this.levels = this.reader.configuration.levels;
    this.levelsMap = new Map<string, any>();
    this.levels.forEach(e => this.levelsMap.set(Object.keys(e)[0],
      {
        total: e[Object.keys(e)[0]],
        count: 0
      }));

    this.createStructure();
    this.mapStatements = this.reader.getStatements();
    this.maxBar = this.mapStatements.size;

    this.mapStatements.forEach((v, k) => {
      this.structures.get(v.status).push(v);
      if (!!v.classification) {
        this.levelsMap.get(v.classification).count++;
        this.statusBar++;
      }
    });
  }

  private createStructure() {
    this.structures.set('negative', []);
    this.structures.set('positive', []);
    this.structures.set('neutral', []);
  }

  drop(event: CdkDragDrop<string[]>, classification: string) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);

      this.mapStatements.get(event.container.data[0]).classification = classification;
    }
  }
  public setQuantify(item: Statement, level: string): void {
    if (!!item.classification) {
      if (item.classification == level) {
        item.classification = undefined;
        this.levelsMap.get(level).count--;
        this.statusBar--;
      } else {
        this.levelsMap.get(item.classification).count--;
        item.classification = level;
        this.levelsMap.get(level).count++;
      }
      return;
    }
    item.classification = level;
    this.levelsMap.get(level).count++;
    this.statusBar++;
  }

  public moveBack(): void {
    this.router.navigate(['/classify']);
  }

  public redirectToExplain() {
    this.router.navigate(['/explain']);
  }

  public isFinished(): boolean {
    for (const item of this.levelsMap.values()) {
      if (item.count !== item.total) {
        return false;
      }
    }
    return true;
  }

  public setThStatus(item: Statement): string {
    switch (item.status) {
      case 'negative':
        return 'bg-negative';

      case 'positive':
        return 'bg-positive';

      case 'neutral':
        return 'bg-neutral';

      default:
        return '';
    }
  }


}
