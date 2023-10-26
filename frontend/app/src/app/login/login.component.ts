import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {
  }

  redirectToRegister() {
    this.router.navigate(['/register'])
  }

  // check if the user credentials are valid like if username == "user" and password == "password"
  // if valid then redirect to dashboard
  // else show error message

  username: string = '';
  password: string = '';

  // Define dummy values for username and password
  dummyUsername = 'user@gg.com';
  dummyPassword = 'password';


  onSubmit() {
    // Check if the entered values match the dummy values
    if (this.username === this.dummyUsername && this.password === this.dummyPassword) {
      // Redirect to a different page (e.g., dashboard)
      this.router.navigate(['/dogs']);
    } else {
      alert('Login failed. Please check your credentials.');
    }
  }
}
