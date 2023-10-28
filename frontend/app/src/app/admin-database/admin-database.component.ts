import { Component, OnInit } from '@angular/core';
import { DogService } from '../services/dog.service';
import { Dog } from '../models/dog';
import { ActivatedRoute, Params } from '@angular/router';
import {Router} from "@angular/router";
import { VetService } from '../services/vet.service';


@Component({
  selector: 'app-admin-database',
  templateUrl: './admin-database.component.html',
  styleUrls: ['./admin-database.component.css']
})
export class AdminDatabaseComponent implements OnInit {
  dogs: Dog[] = [];
  constructor(private router:Router,private dogservice: DogService,private vetService: VetService){
  }

  ngOnInit(): void {
    if(this.vetService.getUserLoggedIn().username === ''){
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
    this.formData.append('name', this.dog.name);
    this.formData.append('age', this.dog.age.toString());
    this.formData.append('dateOfBirth', this.dog.dateOfBirth);
    this.formData.append('gender', this.dog.gender);
    this.formData.append('breed', this.dog.breed);
    this.formData.append('height', this.dog.height);
    this.formData.append('weight', this.dog.weight);
    this.formData.append('medicalConditions', this.dog.medicalConditions);

    this.dogservice.createDog(this.formData).subscribe(
        (response) => {
          console.log('Dog saved successfully', response);
        },
        (error) => {
          console.error('Dog not saved', error);
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
