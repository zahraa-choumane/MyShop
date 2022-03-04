import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public service:AuthService) { }
  user:string ="user";
  ngOnInit(): void {
    this.user=""+localStorage.getItem('users')  ;
  }
  onLogout()
  {
    this.service.logout();
  }
}
