import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vet } from '../models/vet';

@Injectable({
  providedIn: 'root'
})
export class VetService {
  appUrl: string;

  constructor(private http: HttpClient) {
    this.appUrl = "http://localhost:18080"
  }

  public findVetByUsername(username: String, password: String){
    return this.http.get<Vet>(this.appUrl + "/vet/" + username.toString() + "/" + password.toString());
  }

  public createVet(){
    return this.http.get(this.appUrl + "vet/create");
  }

  public deleteVet(username: String){
    return this.http.get(this.appUrl + "vet/" + username.toString() + "/delete");
  }
}
