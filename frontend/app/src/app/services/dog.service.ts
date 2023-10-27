import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Dog} from "../models/dog";

@Injectable({
  providedIn: 'root'
})
export class DogService {
  appUrl: string;

  constructor(private http: HttpClient) {
    this.appUrl = "http://localhost:18080/api"
  }

  public getDogs() : Observable<Dog[]> {
    return this.http.get<Dog[]>(this.appUrl + "/dogs");
  }

  // TODO: Add a method to get a dog by id

  public getDogById(id: number) {
    return this.http.get(this.appUrl + "/dogs/" + id.toString());
  }

  public createDog(){
    return this.http.get(this.appUrl+ "/dog");
  }

  public updateDog(id: Number){
    return this.http.get(this.appUrl + "/dog/update/" + id.toString());
  }

  public deleteDog(id: Number){
    return this.http.get(this.appUrl + "/dog/" + id.toString());
  }
}
