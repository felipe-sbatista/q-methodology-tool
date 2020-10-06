import { Component, OnInit } from '@angular/core';
import { ReaderService } from '../services/reader.service';
import { Statement } from '../models/statement';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ExplainInstructionComponent } from '../components/instructions/explain-instruction/explain-instruction.component';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-explain',
  templateUrl: './explain.component.html',
  styleUrls: ['./explain.component.css']
})
export class ExplainComponent implements OnInit {

  extremeStatements = new Map<string, Statement>();
  statementsToEvaluate = [];
  actualItem = new Statement(0, '');
  items = [];

  constructor(private readerService: ReaderService, private router: Router,
              public dialogService: MatDialog, private translateService: TranslateService) { }

  ngOnInit() {
    const level = this.readerService.getHighestLevel();
    const mapStatements = this.readerService.getStatements();

    mapStatements.forEach((v, k) => {
      if (level === Math.abs(Number(v.classification))) {
        this.extremeStatements.set(k, v);
      }
    });
    this.items = Array.from(this.extremeStatements.keys());
    this.actualItem = this.extremeStatements.get(this.items[0]);
  }

  public selectItem(event: any): void {
    this.actualItem = this.extremeStatements.get(event);
  }

  public isFinished(): boolean {
    for (const statement of this.extremeStatements.values()) {
      if (!statement.explanation) {
        return false;
      }
    }
    return true;
  }

  public nextStep(): void {
    this.router.navigate(['/register']);
  }

  public showInstructions(): void {
    this.dialogService.open(ExplainInstructionComponent);
  }
}
