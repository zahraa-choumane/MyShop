import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Product from 'src/app/model/product';
import { Service } from 'src/app/services/service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id:number|any;
  item:Product[]|any;
  productform=new FormGroup({
    size:new FormControl(),
    color:new FormControl(),
    quantiter:new FormControl()
  })
  constructor(private service:Service,private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this._Activatedroute.snapshot.paramMap.get("id");
    this.service.getproduct(this.id).subscribe((pd:any)=>
    {
      this.item=pd;
    });
  }
  submit() {
    console.log("Form Submitted")
    console.log(this.productform.value)
  }

}
