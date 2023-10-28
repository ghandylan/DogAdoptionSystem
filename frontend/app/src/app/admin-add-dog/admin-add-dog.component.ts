import { Component } from '@angular/core';
import { Dog } from '../models/dog';
import { Router } from '@angular/router';
import { DogService } from '../services/dog.service';
import { VetService } from '../services/vet.service';
import { AdminSessionServiceService } from '../services/admin-session-service.service';

@Component({
  selector: 'app-admin-add-dog',
  templateUrl: './admin-add-dog.component.html',
  styleUrls: ['./admin-add-dog.component.css']
})
export class AdminAddDogComponent {
  newDog: Dog = new Dog();
  formData = new FormData();
  dog: Dog = new Dog();
  dogs: Dog[] = [];


  constructor(private router:Router,private dogservice: DogService,private vetService: VetService,private session: AdminSessionServiceService){
  }

  ngOnInit(): void {
    // if(this.session.getAccess() === ""){
    //   this.router.navigate(['/login']);
    // }
    this.dogservice.getDogs().subscribe((data: Dog[]) => {this.dogs = data});
  }

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


    // set response type to form data

    this.dogservice.createDog(this.formData).subscribe(
        (response) => {
          console.log(response);
        }
    );
    }

  }
  onFileChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files?.[0];
    if (file) {
      this.formData.append('dogImage', file);
    }
  }

  editDog(id: Number){
    this.router.navigate(['/admin/dogs/edit/' + id]);
  }

  deleteDog(id: Number){
    this.dogservice.deleteDog(id).subscribe();
    alert("Your dog has been removed to the list :(");
    window.location.reload();
  }

}
