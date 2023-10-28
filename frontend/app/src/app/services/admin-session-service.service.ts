import { Injectable } from '@angular/core';
import { AdminSession } from '../models/admin-session';
import { Vet } from '../models/vet';

@Injectable({
  providedIn: 'root'
})
export class AdminSessionServiceService {
  adminSession: AdminSession = new AdminSession();
  constructor() { }

  public setAdminSession(vet: Vet, access: String){
    this.adminSession.adminSession = vet;
    this.adminSession.access = access;
  }

  public getAdminSession(){
    return this.adminSession.adminSession;
  }

  public logoutAdmin(){
    this.adminSession = new AdminSession();
  }

  public setAccess(access: String){
    this.adminSession.access = access;
  }

  public getAccess(){
    return this.adminSession.access;
  }
}
