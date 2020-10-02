import { Component, OnInit } from '@angular/core';
import { ReaderService } from '../services/reader.service';
import { Statement } from '../models/statement';
import { Router } from '@angular/router';


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

  constructor(private readerService: ReaderService, private router: Router) { }

  ngOnInit() {
    const level = 3 //this.readerService.getHighestLevel();
    const mapStatements = new Map<string, Statement>();
    mapStatements.set('felipe', new Statement(1, 'felipe', 'negative', '-3'));
    mapStatements.set('amanda', new Statement(2, 'amanda', 'positive', '3'));
    mapStatements.set('igor', new Statement(3, 'igor', 'negative', '3'));
    mapStatements.set('amanda2', new Statement(4, 'amanda2', 'positive', '2'));
    mapStatements.set('igor2', new Statement(5, 'igor2', 'neutral'));
    mapStatements.forEach((v, k) => {
      if (level === Math.abs(Number(v.classification))) {
        this.extremeStatements.set(k, v);
      }
    });
    this.items = Array.from(this.extremeStatements.keys());
    this.actualItem = this.extremeStatements.get(this.items[0]);
    // this.mapStatements = this.readerService.getStatements();
    // const lastLevel: number = this.readerService.getHighestLevel();
    // for (const st of this.mapStatements.values()) {
    //   if (Math.abs(Number(st.classification)) === lastLevel) {
    //     this.statementsToEvaluate.push(st);
    //   }
    // }
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

}
