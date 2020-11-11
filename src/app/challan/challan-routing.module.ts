import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddChallanComponent} from './add-challan/add-challan.component';


const routes: Routes = [
    {
        path : 'add-challan',
        component : AddChallanComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }