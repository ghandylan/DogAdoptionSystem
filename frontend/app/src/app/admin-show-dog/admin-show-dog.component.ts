import { Component, OnInit } from '@angular/core';
import { Dog } from '../models/dog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DogService } from '../services/dog.service';
import { AdoptionInterest } from '../models/adoption-interest';
import { AdoptionInterestService } from '../services/adoption-interest.service';
import { VetService } from '../services/vet.service';
import { AdminSessionServiceService } from '../services/admin-session-service.service';

@Component({
  selector: 'app-admin-show-dog',
  templateUrl: './admin-show-dog.component.html',
  styleUrls: ['./admin-show-dog.component.css']
})

export class AdminShowDogComponent implements OnInit {
  adoptions: AdoptionInterest[] = [];

  constructor(private route:ActivatedRoute,private router: Router , private adoptionInterestService: AdoptionInterestService, private vetService: VetService, private session: AdminSessionServiceService){
  }

  acceptAdoption(selectedAdoption: AdoptionInterest){
    selectedAdoption.status = "Accepted";
    this.adoptionInterestService.updateAdoptionInterest(selectedAdoption.userEmail, selectedAdoption)
  }
  rejectAdoption(selectedAdoption: AdoptionInterest){
    selectedAdoption.status = "Denied";
    this.adoptionInterestService.updateAdoptionInterest(selectedAdoption.userEmail, selectedAdoption)
  }

  ngOnInit(): void {
    console.log(this.session.getAccess())
    // if(this.session.getAccess() === ""){
    //   this.router.navigate(['/login']);
    // }
    this.adoptionInterestService.getAdoptionList().subscribe((data: AdoptionInterest[]) => 
      this.adoptions = data
    )
  }
  logout(){
    this.session.logoutAdmin();
    this.router.navigate(['/login'])
  }
  navigateToDogList(){
    this.router.navigate(['/admin/dogs/add'])
  }
  navigateToRequests(){
    this.router.navigate(['/admin/dog/requests'])
  }
}