import { Component, OnInit } from '@angular/core';
import { DogService } from '../services/dog.service';
import { Dog } from '../models/dog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { AdoptionInterest } from '../models/adoption-interest';
import { AdoptionInterestService } from '../services/adoption-interest.service';

@Component({
  selector: 'app-show-dog',
  templateUrl: './show-dog.component.html',
  styleUrls: ['./show-dog.component.css']
})
export class ShowDogComponent implements OnInit {
  dog: Dog = new Dog()
  user: User = new User();
  adoptionForm = new AdoptionInterest();

  constructor(private router:Router, private route: ActivatedRoute,private dogservice: DogService, private userService: UserService, private adoptionInterestService: AdoptionInterestService){
    console.log('entered constructor' + this.dog.name) //inadd


  }
  ngOnInit(): void {
    if(this.userService.getUserLoggedIn().email === ''){
      this.router.navigate(['/login']);
    }
    this.route.params.forEach((params: Params) => {
      if(params['id'] !== undefined){
        const id = params['id'];
        console.log('Id' + id)
        this.dogservice.getDogById(id).subscribe(data => {this.dog =data});
      }
    });
    this.user = this.userService.getUserLoggedIn();
  }
  visitDate: String = '';
  onSubmit(){

    this.adoptionForm.name = this.user.firstName + " " + this.user.lastName;
    this.adoptionForm.dogName = this.dog.name;
    this.adoptionForm.status = "Pending";
    this.adoptionForm.dateAndTimeCreated = this.visitDate;
    this.adoptionInterestService.createAdoption(this.adoptionForm);
    console.log(this.adoptionForm); 
    alert("Adoption is in progress...")
  }
}
