import { Component, OnInit } from '@angular/core';
import { DogService } from '../services/dog.service';
import { Dog } from '../models/dog';
import { ActivatedRoute, Params } from '@angular/router';
import {Router} from "@angular/router";
import { VetService } from '../services/vet.service';
import { AdminSessionServiceService } from '../services/admin-session-service.service';

@Component({
  selector: 'app-admin-database',
  templateUrl: './admin-database.component.html',
  styleUrls: ['./admin-database.component.css']
})
export class AdminDatabaseComponent implements OnInit {
  dogs: Dog[] = [];
  constructor(private router:Router,private dogservice: DogService,private vetService: VetService,private session: AdminSessionServiceService){
  }

  ngOnInit(): void {
    if(this.session.getAccess() === ""){
      this.router.navigate(['/login']);
    }
    this.dogservice.getDogs().subscribe((data: Dog[]) => {this.dogs = data});
  }
  selectedDog: Dog = new Dog;

  editIndexValue(i: Number){
    // this.dogservice.updateDog(i);
    console.log("arf");
    this.dogservice.getDogById(i).subscribe(data => this.selectedDog = data);
  }

  deleteIndexValue(i: Number){
    this.dogservice.deleteDog(i);
    alert("Dog Deleted :(")
  }
  formData = new FormData();
  dog: Dog = new Dog();
  newDog: Dog = new Dog();


  onSubmit(type: String) {
    if (type == "add"){
      // Append other form data and send the request
    this.formData.append('name', this.newDog.name);
    this.formData.append('age', this.newDog.age.toString());
    this.formData.append('dateOfBirth', this.newDog.dateOfBirth);
    this.formData.append('gender', this.newDog.gender);
    this.formData.append('breed', this.newDog.breed);
    this.formData.append('height', this.newDog.height.toString());
    this.formData.append('weight', this.newDog.weight.toString());
    this.formData.append('medicalConditions', this.newDog.medicalConditions);

    console.log(this.formData)

    // set response type to form data

    this.dogservice.createDog(this.formData).subscribe(
        (response) => {
          console.log(response);
        }
    );
    }else {
      //update dog
    }

  }

  onFileChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files?.[0];
    if (file) {
      this.formData.append('dogImage', file);
    }
  }
}
