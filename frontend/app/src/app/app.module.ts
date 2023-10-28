import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowDogsComponent } from './show-dogs/show-dogs.component';
import {HttpClientModule} from "@angular/common/http";
import { ShowDogComponent } from './show-dog/show-dog.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {FormsModule} from "@angular/forms";
import {AdminShowDogsComponent} from "./admin-show-dogs/admin-show-dogs.component";
import {AdminShowDogComponent} from "./admin-show-dog/admin-show-dog.component";
import {AdminDatabaseComponent} from "./admin-database/admin-database.component";

@NgModule({
  declarations: [
    AppComponent,
    ShowDogsComponent,
    ShowDogComponent,
    UserProfileComponent,
    LoginComponent,
    RegistrationComponent,
    AdminShowDogsComponent,
    AdminShowDogComponent,
    AdminDatabaseComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
