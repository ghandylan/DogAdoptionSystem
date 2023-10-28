import {Component, OnInit} from '@angular/core';
import {Dog} from "../models/dog";
import {DogService} from "../services/dog.service";
import {Router} from "@angular/router";
import { UserService } from '../services/user.service';
import { UserSessionServiceService } from '../services/user-session-service.service';

@Component({
  selector: 'app-show-dogs',
  templateUrl: './show-dogs.component.html',
  styleUrls: ['./show-dogs.component.css']
})
export class ShowDogsComponent implements OnInit {
  dogs: Dog[] = [];

  constructor(private dogService: DogService, private router: Router, private userService: UserService, private session: UserSessionServiceService) {

  }

  ngOnInit(): void {
    if(this.session.getAccess() === ""){
      this.router.navigate(['/login']);
    }
    this.dogService.getDogs().subscribe((data: Dog[]) => {
      console.log("data: " + data);
      this.dogs = data;
    });
  }

  redirectToProfile() {
    this.router.navigate(['/profile'])
  }

  showFullDog(id: Number){
    this.router.navigate(['/dog/' + id]);
  }
}
