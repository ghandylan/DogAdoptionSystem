import { Component, OnInit } from '@angular/core';
import { DogService } from '../services/dog.service';
import { Dog } from '../models/dog';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-show-dog',
  templateUrl: './show-dog.component.html',
  styleUrls: ['./show-dog.component.css']
})
export class ShowDogComponent implements OnInit {
  dog: Dog = new Dog()

  constructor(private route:ActivatedRoute,private dogservice: DogService){
    console.log('entered constructor' + this.dog.name) //inadd


  }
  ngOnInit(): void {
    console.log('entered oninit' + this.dog.name)
    // this.route.params.forEach((params: Params) => {
    //   if(params['id'] !== undefined){
    //     const id = params['id'];
    //     console.log('Id' + id)
    //     this.dogservice.getDogById(id).subscribe(data => {this.dog =data});
    //   }
    // });
  }

}
