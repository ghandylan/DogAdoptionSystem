import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { UserSession } from '../models/user-session';

@Injectable({
  providedIn: 'root'
})
export class UserSessionServiceService {

  userSession: UserSession = new UserSession();
  constructor() { }

  public setAdminSession(user: User, access: String){
    this.userSession.userSession = user;
    this.userSession.access = access;
  }

  public getUser(){
    return this.userSession.userSession;
  }

  public logoutAdmin(){
    this.userSession = new UserSession();
  }

  public setAccess(access: String){
    this.userSession.access = access; 
  }

  public getAccess(){
    return this.userSession.access;
  }
}
