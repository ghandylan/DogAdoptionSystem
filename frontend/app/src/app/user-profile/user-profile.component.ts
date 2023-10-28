import { Component } from '@angular/core';
import { UserSessionServiceService } from '../services/user-session-service.service';
import { Router } from '@angular/router';
import { AdoptionInterestService } from '../services/adoption-interest.service';
import { AdoptionInterest } from '../models/adoption-interest';
import { User } from '../models/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  constructor(private router: Router ,private session: UserSessionServiceService, private adoptionService: AdoptionInterestService){}
  userAdoptionList: AdoptionInterest[] = [];
  user: User = new User();
  ngOnInit(){
    console.log("Access level: " + this.session.getAccess());
    console.log("User accessing is " + this.session.getUser().lastName);
    if(this.session.getAccess() === ""){
      this.router.navigate(['/login']);
    }
    this.user = this.session.getUser();
    this.adoptionService.findUserAdoptionInterest(this.session.getUser().email).subscribe(((data: AdoptionInterest[]) => {
      this.userAdoptionList = data;
    }))
    console.log(this.userAdoptionList);
  }

  logout(){
    this.session.logoutAdmin();
    this.router.navigate(['/login'])
  }

  redirectToAlldogs(){
    this.router.navigate(['/dogs'])
  }

  redirectToProfile() {
    this.router.navigate(['/profile'])
  }

}
