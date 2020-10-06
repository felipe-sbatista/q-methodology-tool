import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-classify-instruction',
  templateUrl: './classify-instruction.component.html',
  styleUrls: ['./classify-instruction.component.css']
})
export class ClassifyInstructionComponent implements OnInit {

  constructor(private translateService: TranslateService) { }

  ngOnInit() {
  }
  public isMobile(): boolean {
    return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent));
  }

}
