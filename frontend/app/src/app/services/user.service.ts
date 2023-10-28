import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  appUrl: string;
  userLoggedIn: User = new User();
  constructor(private http: HttpClient) {
    this.appUrl = "http://localhost:18080";
  }

  setUserLoggedIn(user: User){
    this.userLoggedIn = user;
  }

  getUserLoggedIn(){
    return this.userLoggedIn;
  }

  logoutUser(){
    this.userLoggedIn = new User;
  }

  public createUser(user: User){
    return this.http.post(this.appUrl + "/user/create",user).subscribe(
      (response) =>{
        console.log("Dog created: ", response);
      },
      (error) => {
        console.error("Error Dog creation: ", error)
      }
    );
  }

  public loginUser(email: String, password: String){
    return this.http.get<User>(this.appUrl + "/user/" + email.toString() + "/" + password.toString());
  }

  public updateUser(email: String) {
    return this.http.get(this.appUrl + "/user/" + email.toString() + "/update")
  }

  public deleteUser(email: String) {
    return this.http.get(this.appUrl + "/user/" + email.toString() + "/delete")
  }
}
