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
    this.appUrl = "http://localhost:8080/"
  }

  public getDogs() : Observable<Dog[]> {
    return this.http.get<Dog[]>(this.appUrl + "dogs");
  }

  // TODO: Add a method to get a dog by id

  public getDogById(id: number) {
    return this.http.get(this.appUrl + "dogs/" + id.toString());
  }
}
