import { Component, OnInit, NgZone } from '@angular/core';
import { FormsModule, NgForm, FormGroup } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { LogininfoModule } from '../../modules/logininfo/logininfo.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  svc: LoginService;
  log = new LogininfoModule;
  model: any = [];
  name: string;
  pwd: string;
  router: Router;
  ngzone: NgZone;
  siteKey: string;


  constructor(svc: LoginService, router: Router, ngzone: NgZone) {
    this.svc = svc;
    this.router = router;
    this.ngzone = ngzone;
    this.siteKey = "6LdGUKsaAAAAAJbyzTnHPqp9SnhFrdEZDDRBvXCW";
  }

  ngOnInit(): void {

  }

  RegisterData(loginform: NgForm): void {
    console.log(loginform.value);

    this.name = loginform.value.userid;

    this.pwd = loginform.value.password;

    sessionStorage.setItem('USERNAME', this.name);

    this.svc.Login(this.name, this.pwd).subscribe((data: string) => {

      console.log(data);

      // alert(data);

      if (data == "No Account found with requested UserID"||data=="Invalid Credentials"|| data=="Your account has been locked. Kindly reset your password for reactivation") {
        alert(data);
        }
       else{
         alert("Login Successfull");
         sessionStorage.setItem('ACC_NO',data);
         this.ngzone.run(() => this.router.navigateByUrl("/userdashboard"));

       }     
    });

  }
}