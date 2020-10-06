import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-explain-instruction',
  templateUrl: './explain-instruction.component.html',
  styleUrls: ['./explain-instruction.component.css']
})
export class ExplainInstructionComponent implements OnInit {

  constructor(private translateService: TranslateService) { }

  ngOnInit() {
  }

}
