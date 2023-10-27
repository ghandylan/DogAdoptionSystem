import { Component, OnInit } from '@angular/core';
import { DogService } from '../services/dog.service';

@Component({
  selector: 'app-admin-database',
  templateUrl: './admin-database.component.html',
  styleUrls: ['./admin-database.component.css']
})
export class AdminDatabaseComponent implements OnInit {

  dogs: any = []; // Initialize with an empty array
  selectedDog: any = {};
  newDog: any = {};

  constructor(private dogService: DogService){}
  ngOnInit(): void {
    this.getDogs();
  }
getDogs(): void{
  this.dogService.getDogs().subscribe(dogs => this.dogs = dogs )
}

  // Add a new dog to the list
  addDog() {
    this.dogs.push(this.newDog);
    this.newDog = {}; // Clear the form after adding
  }

  // Delete a dog based on its ID
  deleteDog(dogId: number) {
    this.dogs = this.dogs.filter((dog: { id: number; }) => dog.id !== dogId);
    this.selectedDog = {}; // Clear the selected dog
  }

  // Edit a dog
  editDog(dog: any) {
    this.selectedDog = { ...dog }; // Create a copy of the selected dog
  }

  // Update the selected dog
  updateDog() {
    const index = this.dogs.findIndex((dog: { id: any; }) => dog.id === this.selectedDog.id);
    if (index !== -1) {
      this.dogs[index] = { ...this.selectedDog }; // Update the dog in the list
      this.selectedDog = {}; // Clear the selected dog
    }
  }
}