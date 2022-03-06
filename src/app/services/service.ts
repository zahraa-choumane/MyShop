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
    getuser(email:string)
    {
      return this.httpclient.get<User>("http://localhost:3000/user/"+email);

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
    addproduct(product:product)
    {
      const headers=new HttpHeaders().set('Content-Type','application/json');
      return  this.httpclient.post('http://localhost:3000/product/addproduct',JSON.stringify(product),{headers});
         
    }

    editproduct(product:product)
    {
      const headers=new HttpHeaders().set('Content-Type','application/json');
      return  this.httpclient.post('http://localhost:3000/product/editroduct',JSON.stringify(product),{headers});
         
    }

    deleteproduct(id:string)
    {
      return  this.httpclient.get('http://localhost:3000/product/delete/'+id);

    }

}
 