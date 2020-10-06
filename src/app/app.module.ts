import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassifyComponent } from './classify/classify.component';
import { QuantifyComponent } from './quantify/quantify.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { InformationComponent } from './information/information.component';
import { RegisterComponent } from './register/register.component';
import { ExplainComponent } from './explain/explain.component';
import { environment } from 'src/environments/environment';
import { FinishComponent } from './components/finish/finish.component';
import { ClassifyInstructionComponent } from './components/instructions/classify-instruction/classify-instruction.component';
import { QuantifyInstructionComponent } from './components/instructions/quantify-instruction/quantify-instruction.component';
import { ExplainInstructionComponent } from './components/instructions/explain-instruction/explain-instruction.component';

import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';



// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    ClassifyComponent,
    QuantifyComponent,
    InformationComponent,
    RegisterComponent,
    ExplainComponent,
    CarouselComponent,
    FinishComponent,
    ClassifyInstructionComponent,
    QuantifyInstructionComponent,
    ExplainInstructionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RouterModule.forRoot([]),
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,

    MatButtonModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatRadioModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ClassifyInstructionComponent, QuantifyInstructionComponent, ExplainInstructionComponent]
})
export class AppModule { }
