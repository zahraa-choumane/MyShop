import { Component,Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { provideRoutes, Router } from '@angular/router'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']

})

export class AdminComponent implements OnInit {

  constructor(private route:Router) { }
  
  Adminform=new FormGroup({
    edit:new FormControl('',[Validators.required]),
    
   
});
Deleteform=new FormGroup({
  delete:new FormControl('',[Validators.required]),
 
});
get edit():any
  {
    return this.Adminform.get('edit');
  }
  get delete():any
  {
    return this.Deleteform.get('delete');
  }
  ngOnInit(): void {
  }
  submit() {
    console.log("Form Submitted")
    console.log(this.Adminform.value)
    this.route.navigate(['/edit']);
    
  }
 sub(){
  console.log("Form Submitted")
  console.log(this.Deleteform.value)
 
 }
}
