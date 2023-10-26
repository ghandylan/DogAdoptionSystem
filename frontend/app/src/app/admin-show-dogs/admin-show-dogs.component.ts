import { Component, OnInit } from '@angular/core';
import { DogService } from '../services/dog.service';
import { Dog } from '../models/dog';

@Component({
  selector: 'app-admin-show-dogs',
  templateUrl: './admin-show-dogs.component.html',
  styleUrls: ['./admin-show-dogs.component.css']
})
export class AdminShowDogsComponent implements OnInit {
  dogs: Dog[] = [];

  constructor(private dogService: DogService) {
  }

  ngOnInit(): void {
    this.dogService.getDogs().subscribe((data: Dog[]) => {
      this.dogs = data;
    });
  }
}