import { Component, OnInit } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { AddChallanComponent } from 'src/app/challan/add-challan/add-challan.component';
import { DCardComponent } from '../d-card/d-card.component';
import { ViewChallanComponent } from 'src/app/challan/view-challan/view-challan.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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
}
