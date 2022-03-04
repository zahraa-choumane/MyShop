import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Product from 'src/app/model/product';
import { AuthService } from 'src/app/services/auth.service';
import { Service } from 'src/app/services/service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  addform=new FormGroup({
    id:new FormControl('',[Validators.required]),
    image:new FormControl('',),
    name:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.required]),
    qt:new FormControl('',[Validators.required]),
    price:new FormControl('',[Validators.required]),

  });
  constructor(private service:Service,private authService:AuthService) { }

  ngOnInit(): void {
  }



  submit()
  {
    if(this.addform.valid)
    {
      const newproduct=new Product(
        this.addform.get('id')?.value,this.addform.get('name')?.value,
        this.addform.get('description')?.value,this.addform.get('price')?.value,
        "https://storage.googleapis.com/original-marines-outlet/889fb4b3-5a03-40d3-92b3-c3ecb34f563a-1",
        this.addform.get('qt')?.value
      );
      this.service.addproduct(newproduct).subscribe(
        (res:any)=>{
          this.addform.reset();
        }
      ); 
      
    }

  }

}