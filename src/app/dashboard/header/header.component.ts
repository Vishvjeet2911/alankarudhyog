import { Component, OnInit } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { AddChallanComponent } from 'src/app/challan/add-challan/add-challan.component';
import { DCardComponent } from '../d-card/d-card.component';
import { ViewChallanComponent } from 'src/app/challan/view-challan/view-challan.component';
import {ActivatedRoute} from '@angular/router'
import { AddProductComponent } from 'src/app/product/add-product/add-product.component';
import { ViewProductComponent } from 'src/app/product/view-product/view-product.component';
import { AddLedgerComponent } from 'src/app/ledger/add-ledger/add-ledger.component';
import { ViewLedgerComponent } from 'src/app/ledger/view-ledger/view-ledger.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:ActivatedRoute){}
  public LC:any;

  ngOnInit() {
    this.LC = DCardComponent;
  }

  lcDCard(){
    this.LC = DCardComponent;
  }

  lcAddChallan(){
    this.LC = AddChallanComponent;
  }

  lcViewChallan(){
    this.LC = ViewChallanComponent;
  }

  lcAddProduct(){
    this.LC = AddProductComponent;
  }

  lcViewProduct(){
    this.LC = ViewProductComponent;
  }

  lcAddLedger(){
    this.LC = AddLedgerComponent;
  }

  lcViewLedger(){
    this.LC = ViewLedgerComponent;
  }
}
