import {Component, OnInit} from '@angular/core';
import {Dog} from "../models/dog";
import {DogService} from "../services/dog.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-show-dogs',
  templateUrl: './show-dogs.component.html',
  styleUrls: ['./show-dogs.component.css']
})
export class ShowDogsComponent implements OnInit {
  dogs: Dog[] = [];

  constructor(private dogService: DogService, private router: Router) {

  }

  ngOnInit(): void {
    console.log("dog started")
    this.dogService.getDogs().subscribe((data: Dog[]) => {
      this.dogs = data;
      console.log("\n\n\nData: " + data);
    });
  }

  redirectToProfile() {
    this.router.navigate(['/profile'])
  }
}
