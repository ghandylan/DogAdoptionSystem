import { Component } from '@angular/core';
import { Dog } from '../models/dog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DogService } from '../services/dog.service';
import { VetService } from '../services/vet.service';
import { AdminSessionServiceService } from '../services/admin-session-service.service';

@Component({
  selector: 'app-admin-edit-dog',
  templateUrl: './admin-edit-dog.component.html',
  styleUrls: ['./admin-edit-dog.component.css']
})
export class AdminEditDogComponent {
  selectedDog: Dog = new Dog();
  dogs: Dog[] = [];
  constructor(private router:Router, private route: ActivatedRoute, private dogservice: DogService,private vetService: VetService,private session: AdminSessionServiceService){
  }
  ngOnInit(): void {
    if(this.session.getAccess() === ""){
      this.router.navigate(['/login']);
    }
    this.dogservice.getDogs().subscribe((data: Dog[]) => {this.dogs = data});

    this.route.params.forEach((params: Params) => {
      if(params['id'] !== undefined){
        const id = params['id'];
        console.log('Id' + id)
        this.dogservice.getDogById(id).subscribe(data => {this.selectedDog =data});
      }
    });
  }

  editDog(id: Number){
    this.router.navigate(['/admin/dogs/edit/' + id]);
  }
  deleteDog(id: Number){
    alert("dog id is " + id)
    this.dogservice.deleteDog(id);
    alert("Your dog has been removed to the list :(");
  }
}
