import { Component, OnInit } from '@angular/core';
import { ReaderService } from '../services/reader.service';
import { Statement } from '../models/statement';


@Component({
  selector: 'app-explain',
  templateUrl: './explain.component.html',
  styleUrls: ['./explain.component.css']
})
export class ExplainComponent implements OnInit {

  mapStatements: Map<string, Statement>;
  statementsToEvaluate = [];

  constructor(private readerService: ReaderService) { }

  ngOnInit() {
    this.mapStatements = this.readerService.getStatements();
    const lastLevel: number = this.readerService.getHighestLevel();
    for (const st of this.mapStatements.values()) {
      if (Math.abs(Number(st.classification)) === lastLevel) {
        this.statementsToEvaluate.push(st);
      }
    }
  }

}
