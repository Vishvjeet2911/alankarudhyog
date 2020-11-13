import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddLedgerComponent } from './add-ledger/add-ledger.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ViewLedgerComponent } from './view-ledger/view-ledger.component';
import { UpdateLedgerComponent } from './update-ledger/update-ledger.component';



@NgModule({
  declarations: [AddLedgerComponent, ViewLedgerComponent, UpdateLedgerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class LedgerModule { }
