import {Component} from '@angular/core';
import {Router} from "@angular/router";
import { UserService } from '../services/user.service';
import { VetService } from '../services/vet.service';
import { User } from '../models/user';
import { Vet } from '../models/vet';
import { firstValueFrom } from 'rxjs';

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
      this.user = await firstValueFrom(this.userService.loginUser(this.username, this.password))
      if(this.user.email !== null){
        this.router.navigate(['/dogs']);
      }else {
        alert("Credentials are incorrect!");
        this.username = "";
        this.password = "";
      }
    }else {
      this.vet = await firstValueFrom(this.vetService.findVetByUsername(this.username, this.password))
      if(this.vet.username !== null){
        this.router.navigate(['/admin/dogs']);
      }else {
        alert("Credentials are incorrect!");
        this.username = "";
        this.password = "";
      }
    }
  }
}
