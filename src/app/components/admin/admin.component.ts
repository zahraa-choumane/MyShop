import { Component, OnInit } from '@angular/core';
import { Console } from 'console';
import Product from 'src/app/model/product';
import { Service } from 'src/app/services/service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  items:Product[] | any;
  constructor(private service:Service) { }

  ngOnInit(): void {
    this.service.getallproduct().subscribe((pd: any)=>
    {
      this.items=pd;
    }
   
    )
  }

  deleteproduct(id:string)
  {
      this.service.deleteproduct(id).subscribe((re)=>{

      });
      location.reload();
     
  }

}