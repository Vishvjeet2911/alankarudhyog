import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './dashboard/header/header.component';
import { AddChallanComponent } from './challan/add-challan/add-challan.component';
import { UpdateChallanComponent } from './challan/update-challan/update-challan.component';

const routes: Routes = [
//   {
//   path: 'challan',
//   loadChildren : ()=> import('./challan/challan.module')
//   .then(mod=>mod.ChallanModule)
//  },
//  {
//    path:'addchallan',
//    component:AddChallanComponent
//  },
// {
//   path: 'update/:id',
//   component:UpdateChallanComponent
// }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
