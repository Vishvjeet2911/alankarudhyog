import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddChallanComponent } from '../challan/add-challan/add-challan.component';


const routes: Routes = [
  {
    path: 'challan',
    loadChildren : ()=> import('../challan/challan.module')
    .then(mod=>mod.ChallanModule)
  
  },
  {
    path: 'addchallan',
    component: AddChallanComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }