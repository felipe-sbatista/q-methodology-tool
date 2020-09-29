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

  public structures = new Map<string, Statement[]>();
  public classifiedStatements: any;
  public mapStatements: Map<string, Statement>;
  public level = 0;
  public levels = [];



  constructor(private reader: ReaderService, private router: Router) { }

  ngOnInit() {
    this.level = this.reader.getHighestLevel();
    for (let i = -this.level; i <= this.level; i++) {
      this.levels.push(i);
    }
    this.createStructure();
    this.mapStatements = this.reader.getStatements();
    this.mapStatements = new Map<string, Statement>();
    this.mapStatements.set('felipe', new Statement(1, 'felipe', 'negative', '-1'));
    this.mapStatements.set('amanda', new Statement(2, 'amanda', 'positive'));
    this.mapStatements.set('igor', new Statement(3, 'igor', 'negative'));
    this.mapStatements.set('amanda2', new Statement(4, 'amanda2', 'positive'));
    this.mapStatements.set('igor2', new Statement(5, 'igor2', 'neutral'));
    this.mapStatements.forEach((v, k) =>
      this.structures.get(v.status).push(v)
    );
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
    if (!!item.classification && item.classification == level) {
      item.classification = undefined;
      return;
    }
    item.classification = level;
  }

  public moveBack(): void {
    this.router.navigate(['/classify']);
  }

  public redirectToExplain() {
    this.router.navigate(['/explain']);
  }


}
