import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShowDogsComponent} from './show-dogs/show-dogs.component';
import {LoginComponent} from "./login/login.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {RegistrationComponent} from "./registration/registration.component";
import {AdminShowDogsComponent} from "./admin-show-dogs/admin-show-dogs.component";
import {AdminShowDogComponent} from "./admin-show-dog/admin-show-dog.component";
import { AdminDatabaseComponent } from './admin-database/admin-database.component';
import { ShowDogComponent } from './show-dog/show-dog.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'dogs', component: ShowDogsComponent},
  { path: 'dog/:id', component: ShowDogComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegistrationComponent},
  { path: 'profile', component: UserProfileComponent},


  //admin
  { path:'admin/dogs', component: AdminShowDogsComponent},
  { path:'admin/dog/:id', component: AdminShowDogComponent},
  { path: 'admindatabase', component: AdminDatabaseComponent}



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
