import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ReaderService } from '../services/reader.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ClassifyInstructionComponent } from '../components/instructions/classify-instruction/classify-instruction.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-classify',
  templateUrl: './classify.component.html',
  styleUrls: ['./classify.component.css']
})
export class ClassifyComponent implements OnInit {

  constructor(private reader: ReaderService, private router: Router,
              public dialogService: MatDialog, private translateService: TranslateService) { }

  public statusBar = 0;
  public maxBar = 0;

  public mapStatements: Map<string, any> = new Map();
  public statements = [];
  public currentStatment = [];
  public negatives = [];
  public neutrals = [];
  public positives = [];
  public structures = new Map<string, string[]>();

  ngOnInit() {
    this.createStructure();
    this.mapStatements = this.reader.getStatements();
    if (!this.mapStatements.size) {
      this.reader.readStatements().subscribe(res => {
        this.mapStatements = res;
        this.statements = Array.from(this.mapStatements.keys());
        this.maxBar = this.statements.length;
        this.currentStatment = [this.statements.pop()];
      });
    } else {
      this.statusBar = this.maxBar = this.mapStatements.size;
      this.mapStatements.forEach((v, k) => {
        if (!!this.structures.get(v.status)) {
          this.structures.get(v.status).push(k);
        }
      });
    }
  }

  private createStructure() {
    this.structures.set('negative', []);
    this.structures.set('positive', []);
    this.structures.set('neutral', []);
  }

  drop(event: CdkDragDrop<string[]>, status: string) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);

      this.mapStatements.get(event.container.data[event.currentIndex]).status = status;
      if (event.previousContainer.id === 'main-list') {
        this.statusBar++;
        if (this.statements.length > 0) {
          this.currentStatment = [this.statements.pop()];
        }
      }

    }

  }
  public showInstructions(): void {
    this.dialogService.open(ClassifyInstructionComponent);
  }

  public isMobile(): boolean {
    return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent));
  }

  public moveFoward(): void {
    this.router.navigate(['/quantify']);
  }
}
