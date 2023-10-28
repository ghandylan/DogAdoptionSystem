import { Component, OnInit } from '@angular/core';
import { Dog } from '../models/dog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DogService } from '../services/dog.service';
import { AdoptionInterest } from '../models/adoption-interest';
import { AdoptionInterestService } from '../services/adoption-interest.service';
import { VetService } from '../services/vet.service';

@Component({
  selector: 'app-admin-show-dog',
  templateUrl: './admin-show-dog.component.html',
  styleUrls: ['./admin-show-dog.component.css']
})

export class AdminShowDogComponent implements OnInit {
  adoptions: AdoptionInterest[] = [];

  constructor(private route:ActivatedRoute,private router: Router , private adoptionInterestService: AdoptionInterestService, private vetService: VetService){
  }

  acceptAdoption(status: String){

  }
  rejectAdoption(status: String){
    
  }

  ngOnInit(): void {
    if(this.vetService.getUserLoggedIn().username === ''){
      this.router.navigate(['/login']);
    }
    this.adoptionInterestService.getAdoptionList().subscribe((data: AdoptionInterest[]) => 
      this.adoptions = data
    )
  }
    
}