
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import User from 'src/app/model/user';
import { Service } from 'src/app/services/service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  addform=new FormGroup({
    producttitle:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.required]),
    image:new FormControl('',[Validators.required]),
    price:new FormControl('',[Validators.required]),
   
  });
  constructor() { }

  ngOnInit(): void {
  }
  generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if(d > 0){//Use timestamp until depleted
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });}
    submit() {
      if(this.addform.valid)
      {console.log("valid");
    }
    else console.log("invalid");
    }
    
}
