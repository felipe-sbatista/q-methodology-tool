import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  public language = 'en';
  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang(this.language );
  }

  ngOnInit() {
  }

  public scroll(el: HTMLElement): void {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  public change(language: string): void {
    this.language = language;
    this.translateService.setDefaultLang(language);
  }
}
