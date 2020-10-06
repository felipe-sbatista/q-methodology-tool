import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-quantify-instruction',
  templateUrl: './quantify-instruction.component.html',
  styleUrls: ['./quantify-instruction.component.css']
})
export class QuantifyInstructionComponent implements OnInit {

  constructor(private translateService: TranslateService) { }

  ngOnInit() {
  }

}
