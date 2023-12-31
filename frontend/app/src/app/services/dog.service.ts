import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Dog} from "../models/dog";

@Injectable({
    providedIn: 'root'
})
export class DogService {
    appUrl: string;

    constructor(private http: HttpClient) {
        this.appUrl = "http://localhost:18080"
    }

    public getDogs(): Observable<Dog[]> {
        return this.http.get<Dog[]>(this.appUrl + "/dogs");
    }

    public getDogById(id: Number) {
        return this.http.get<Dog>(this.appUrl + "/dog/" + id.toString());
    }

    public createDog(formData: FormData): Observable<any> {
        // Create a FormData object
        return this.http.post(this.appUrl + "/dog", formData, {responseType: 'text'});
    }

    public updateDog(id: number, formData: FormData): Observable<any> {
        return this.http.post(this.appUrl + "/dog/update/" + id.toString() , formData, {responseType: 'text'});
    }


    public deleteDog(id: Number): Observable<Dog> {
        return this.http.delete<Dog>(this.appUrl + "/dog/" + id.toString());
    }
}
