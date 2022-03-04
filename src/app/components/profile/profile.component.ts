import { Component, OnInit } from '@angular/core';
import User from 'src/app/model/user';
import { Service } from 'src/app/services/service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:User | any;
  constructor(private service:Service) { }

  ngOnInit(): void {
    this.service.getuser(""+localStorage.getItem('users')).subscribe((pd: any)=>
    {
      this.user=pd;
    }
    )
  }

}
