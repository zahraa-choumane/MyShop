import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import User from 'src/app/model/user';
import { Service } from 'src/app/services/service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupform=new FormGroup({
    email:new FormControl('',[Validators.required]),
    pwd:new FormControl('',[Validators.required]),
    cfpwd:new FormControl('',[Validators.required]),
    first_name:new FormControl('',[Validators.required]),
    last_name:new FormControl('',[Validators.required]),
    mobile:new FormControl('',[Validators.required]),
    address:new FormControl('',[Validators.required]),

});
  constructor(private service:Service, private authService:AuthService ) { }

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
    });
}
  submit() {
 
    if (this.signupform.invalid){
     
     /* var users=this.signupform.get('email')?.value;
      var pwds=this.signupform.get('pwd')?.value;
    
      var first=this.signupform.get('first_name')?.value;
      var last=this.signupform.get('last_name')?.value;
      var phone=this.signupform.get('mobile')?.value;
      var address=this.signupform.get('address')?.value;
      var signupuser;
   // this.apiservice*/
    console.log(this.signupform.value)
  }}

}



 
  
  

