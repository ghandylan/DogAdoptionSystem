import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShowDogsComponent} from './show-dogs/show-dogs.component';
import {LoginComponent} from "./login/login.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {RegistrationComponent} from "./registration/registration.component";

const routes: Routes = [
  { path: '', redirectTo: 'dogs', pathMatch: 'full' },
  { path: 'dogs', component: ShowDogsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegistrationComponent},
  { path: 'profile', component: UserProfileComponent}


  // {pending}
  // AdminShowDogsComponent, AdminShowDogComponent, AdminDatabaseComponent
  //Gawa ni Jakwes:
  // { path: '', redirectTo: 'dogs', pathMatch: 'full' },
  // { path: 'dogs', component: ShowDogsComponent },
  // { path: 'dogs/:id', component: ShowDogComponent },
  // { path: 'admindatabase', component: AdminDatabaseComponent}


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
