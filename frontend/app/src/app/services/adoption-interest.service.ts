import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { AdoptionInterest } from '../models/adoption-interest';

@Injectable({
  providedIn: 'root'
})
export class AdoptionInterestService {
  appUrl: string;

  constructor(private http: HttpClient) {
    this.appUrl = "http://localhost:18080"
  }
  
  public getAdoptionList(): Observable<AdoptionInterest[]> {
    return this.http.get<AdoptionInterest[]>(this.appUrl + "/adoption/list");
  }

  public createAdoption(adoptionForm: AdoptionInterest){
    return this.http.post(this.appUrl + "/adoption/create", adoptionForm).subscribe(
      (response) =>{
        console.log("Dog created: ", response);
      },
      (error) => {
        console.error("Error Dog creation: ", error)
      }
    )
  }

  public findAdoptionInterest(id: Number){
    return this.http.get<AdoptionInterest>(this.appUrl + "/adoption/" + id.toString());
  }

  public deleteAdoptionInterest(id: Number){
    return this.http.get<AdoptionInterest>(this.appUrl + "/adoption/delete/" + id.toString())
  }
}
