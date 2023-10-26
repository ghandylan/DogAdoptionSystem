import { Component, OnInit } from '@angular/core';
import { Dog } from '../models/dog';
import { ActivatedRoute, Params } from '@angular/router';
import { DogService } from '../services/dog.service';

@Component({
  selector: 'app-admin-show-dog',
  templateUrl: './admin-show-dog.component.html',
  styleUrls: ['./admin-show-dog.component.css']
})

export class AdminShowDogComponent implements OnInit {
  dog: Dog = new Dog()

  constructor(private route:ActivatedRoute,private dogservice: DogService){
    console.log('entered constructor' + this.dog.name) //inadd
  }

  ngOnInit(): void {
    console.log('entered oninit' + this.dog.name)
    this.route.params.forEach((params: Params) => {
      if(params['id'] !== undefined){
        const id = params['id'];
        console.log('Id' + id)
        this.dogservice.getDogById(id).subscribe((data: any) => {this.dog = data});
      }
    });
  }
    
}