import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  constructor(private router: Router, private userService: UserService) {
  }
  redirectToLogin() {
    this.router.navigate(['/login'])
  }
  user: User = new User();
  password: String = '';
  passwordconfirm: String = '';
  onSubmit(){
    if(this.password === this.passwordconfirm){
      this.user.password = this.password;
      alert("User Registered!")
      this.userService.createUser(this.user);
      this.redirectToLogin();
    } else{
      alert("Password didn't match!");
    }
  }
}
