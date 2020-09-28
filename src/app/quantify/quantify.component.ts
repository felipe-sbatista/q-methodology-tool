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

  public neutrals0: any = [];
  public negatives1: any = [];
  public negatives2: any = [];
  public negatives3: any = [];
  public positives1: any = [];
  public positives2: any = [];
  public positives3: any = [];
  public negatives = [];
  public neutrals = [];
  public positives = [];
  public structures = new Map<string, string[]>();
  public classifiedStatements: any;
  public mapStatements: Map<string, Statement>;



  constructor(private reader: ReaderService, private router: Router) { }
// TO DO: fazer a ui
  ngOnInit() {
    this.createStructure();
    this.mapStatements = this.reader.getStatements();
    this.mapStatements.forEach((v, k) =>
      !!v.classification ? this.structures.get(v.classification).push(k) : this.structures.get(v.status).push(k)
    );
  }

  private createStructure() {
    const total = Math.floor(this.reader.getTotalColumns() / 2);
    for (let i = -total; i <= total; i++) {
      this.structures.set(i.toString(), []);
    }
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

  public moveBack(): void {
    this.router.navigate(['/classify']);
  }

  redirectToExplain() {
    this.router.navigate(['/explain']);
  }

}
