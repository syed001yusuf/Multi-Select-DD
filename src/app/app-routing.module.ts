import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultiSelectDdComponent } from './multi-select-dd/multi-select-dd.component';


const routes: Routes = [{
  path: '',
  //loadChildren: () => import('./multiselect/multiselect.module').then(m => m.MultiselectModule),
  component: MultiSelectDdComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
