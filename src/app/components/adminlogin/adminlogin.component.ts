import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  email = "";
  password = "";
  errorMessage = ''; // validation error handle
  error: { name: string, message: string } = { name: '', message: '' }; // for firbase error handle

  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  clearErrorMessage() {
    this.errorMessage = '';
    this.error = { name: '', message: '' };
  }

  adminlogin()
  {
    this.clearErrorMessage();
    if (this.validateForm(this.email, this.password)) {
      this.authservice.loginWithEmail(this.email, this.password)
        .then(() => {
         this.router.navigate(['/userinfo'])
        }).catch(_error => {
          this.error = _error
          this.router.navigate(['/adminlogin'])
        })
    }
  }

  validateForm(email, password) {
    if (email.lenght === 0) {
      this.errorMessage = "please enter email id";
      return false;
    }

    if (password.lenght === 0) {
      this.errorMessage = "please enter password";
      return false;
    }

    if (password.lenght < 6) {
      this.errorMessage = "password should be at least 6 char";
      return false;
    }

    this.errorMessage = '';
    return true;

  }

}
