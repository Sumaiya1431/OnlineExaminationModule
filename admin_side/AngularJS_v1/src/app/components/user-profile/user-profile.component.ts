import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { LoginService } from './../../shared/login/login.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  
  userDetails;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.loginService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
      },
      err => { 
        console.log(err);
        
      }
    );
  }

  onLogout(){
    this.loginService.deleteToken();
    this.router.navigate(['/login']);
  }

}
