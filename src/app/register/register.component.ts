import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ReaderService } from '../services/reader.service';
import { Statement } from '../models/statement';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private reader: ReaderService, private firebaseService: FirebaseService,
              private router: Router, private translateService: TranslateService) { }

  isStoring = false;

  userOcupation = '';
  ocupations = ['Tester', 'Product Manager', 'Developer', 'Intern', 'Researcher', 'Software Engineer'];

  userCountry = '';
  userAge: number;

  private setting = {
    element: {
      dynamicDownload: null as HTMLElement
    }
  };

  ngOnInit() {
  }


  public isFinished(): boolean {
    return !!this.userAge && !!this.userCountry && !!this.userOcupation;
  }

  public nextStep(): void {
    const statements = Array.from(this.reader.getStatements().values());
    const result = {
      statements,
      user: {
        ocupation: this.userOcupation,
        country: this.userCountry,
        age: this.userAge
      }
    };
    this.isStoring = true;
    this.firebaseService.storeData(result).then(() => {
      this.router.navigate(['/finish']);
    });
  }

  public export(): void {
    const statements = Array.from(this.reader.getStatements().values());
    const result = {
      statements,
      user: {
        ocupation: this.userOcupation,
        country: this.userCountry,
        age: this.userAge
      }
    };
    const file = {
      text: JSON.stringify(result),
      fileName: 'export.json'
    };
    if (!this.setting.element.dynamicDownload) {
      this.setting.element.dynamicDownload = document.createElement('a');
    }
    const element = this.setting.element.dynamicDownload;
    element.setAttribute('href', `data:text/json;charset=utf-8,${encodeURIComponent(file.text)}`);
    element.setAttribute('download', file.fileName);

    const event = new MouseEvent('click');
    element.dispatchEvent(event);

  }
}
