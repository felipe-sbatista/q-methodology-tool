import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classify-instruction',
  templateUrl: './classify-instruction.component.html',
  styleUrls: ['./classify-instruction.component.css']
})
export class ClassifyInstructionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public isMobile(): boolean {
    return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent));
  }

}
