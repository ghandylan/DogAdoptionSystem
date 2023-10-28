import {Component} from '@angular/core';
import {Router} from "@angular/router";
import { UserService } from '../services/user.service';
import { VetService } from '../services/vet.service';
import { User } from '../models/user';
import { Vet } from '../models/vet';
import { firstValueFrom, lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router, private userService: UserService, private vetService: VetService) {
  }

  redirectToRegister() {
    this.router.navigate(['/register'])
  }

  username: string = "";
  password: string = "";
  user: User = new User;
  vet: Vet = new Vet;
  
  async onSubmit() {
    if(this.username.toString().match("@")){
      this.user = await lastValueFrom(this.userService.loginUser(this.username, this.password))
      console.log("vevt username '" + this.user.email + "'");
      if(this.user.email === null){
        alert("Credentials are incorrect!");
        this.username = "";
        this.password = "";

      }else {
        this.userService.setUserLoggedIn(this.user);
        this.router.navigate(['/dogs']);
      }
    }else {
      this.vet = await lastValueFrom(this.vetService.findVetByUsername(this.username, this.password))
      console.log("vet username '" + this.vet.username + "'");
      if(this.vet.username === null){
        alert("Credentials are incorrect!");
        this.username = "";
        this.password = "";
      }else {
        this.vetService.setUserLoggedIn(this.vet);
        this.router.navigate(['/admindatabase']);
      }
    }
  }
}
