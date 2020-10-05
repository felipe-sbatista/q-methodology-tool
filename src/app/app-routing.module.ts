import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InformationComponent } from './information/information.component';
import { ClassifyComponent } from './classify/classify.component';
import { QuantifyComponent } from './quantify/quantify.component';
import { ExplainComponent } from './explain/explain.component';
import { RegisterComponent } from './register/register.component';
import { FinishComponent } from './components/finish/finish.component';


const routes: Routes = [
  {
    path: '',
    component: InformationComponent
  },
  {
    path: 'classify',
    component: ClassifyComponent
  },
  {
    path: 'quantify',
    component: QuantifyComponent
  },
  {
    path: 'explain',
    component: ExplainComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'finish',
    component: FinishComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
