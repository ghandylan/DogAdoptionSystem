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
  newDog: Dog = new Dog;
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


  onSubmit(){
      this.dogservice.createDog(this.newDog);

    console.log(this.newDog);
  }}