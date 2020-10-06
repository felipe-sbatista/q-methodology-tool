import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TranslateService } from '@ngx-translate/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'q-method';

  constructor(private translate: TranslateService, private register: MatIconRegistry, private domSanitizer: DomSanitizer) {
    translate.setDefaultLang('en');
    this.register.addSvgIcon(
      'lang-pt',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/lang-ptbr.svg')
    );

    this.register.addSvgIcon(
      'lang-en',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/lang-enus.svg')
    );
  }


}
