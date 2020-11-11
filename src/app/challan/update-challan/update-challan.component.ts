import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import {ActivatedRoute} from '@angular/router'
import { ChallanService } from 'src/app/challan.service';

@Component({
  selector: 'app-update-challan',
  templateUrl: './update-challan.component.html',
  styleUrls: ['./update-challan.component.css']
})
export class UpdateChallanComponent implements OnInit {

  alert:boolean=false

  editChallan = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  })

  valuedate = new Date();

  minDate: Date;
  maxDate: Date;
  
  constructor(private router:ActivatedRoute, private editChallanService:ChallanService) { 
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 15000);
    this.maxDate.setDate(this.maxDate.getDate());
  }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params.id)
    this.editChallanService.getCurrentChallan(this.router.snapshot.params.id).subscribe((result)=>{
       console.warn(result)
      this.editChallan = new FormGroup({
        name: new FormControl(result['name']),
        email: new FormControl(result['email']),
        address: new FormControl(result['address'])
      })
    })
  }

  updateChallan(){
    // console.warn("item", this.editChallan.value)
    this.editChallanService.updateChallan(this.router.snapshot.params.id, this.editChallan.value).subscribe((result)=>{
      this.alert=true
    })
  }

  closeAlert()
  {
    this.alert=false
  }

}
