import { Injectable, Input } from '@angular/core';
import dbproduct from '../../../model/product.json';
import dbuser from '../../../model/user.json';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Router } from 'express';
import { json } from 'body-parser';
import { Console } from 'console';
import { Observable, observable } from 'rxjs';
import product from '../model/product';
import User from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class Service {

 
  constructor(private httpclient:HttpClient) { }

    getallproduct(): Observable<product[]>
    { 
      return this.httpclient.get<product[]>("http://localhost:3000/product");

    }

    getproduct(id:number)
    {
      
      return this.httpclient.get<product>("http://localhost:3000/product/"+id);

    }
    

    loginuser(email:string,pwd:string)
    {
      const headers=new HttpHeaders().set('Content-Type','application/json');
      let user=
      {
        email:email,
        pwd:pwd
      }
        
      return  this.httpclient.post('http://localhost:3000/login',user,{headers});

    }
    adduser(user:User){
      const headers=new HttpHeaders().set('Content-Type','application/json');
      return this.httpclient.post('http://localhost:3000/user/adduser',JSON.stringify(user),{headers});
    }
 /*   signupuser(email:string,pwd:string,cfpwd:string,first_name:string,last_name:string,mobile:string,address:string)
    {
      const headers=new HttpHeaders().set('Content-Type','application/json');
      let user=
      {
        email:email,
        pwd:pwd,
        cfpwd:cfpwd,
        first_name:first_name,
        last_name:last_name,
        mobile:mobile,
        address:address
      }
        
      return  this.httpclient.post('http://localhost:3000/signup',user,{headers});

    }
/*
    adduser(user:User)
    {
      
      
      db.user.push({id:2,email:user.email,pwd:user.pwd,first_name:user.first_name,last_name:user.last_name,company:user.company,mobile:user.mobile,address:user.address,image:user.image});
       
      
    }
*/
}
