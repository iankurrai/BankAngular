import { Component, OnInit } from '@angular/core';
import {FormsModule, NgForm, FormGroup} from '@angular/forms';
import{LoginService} from '../../services/login.service';
import{LogininfoModule} from '../../modules/logininfo/logininfo.module';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  svc: LoginService;
  log= new LogininfoModule;
  constructor(svc: LoginService) { this.svc=svc;}
  admin:any=[];

  ngOnInit(): void {
  }
  acc_no:string;
  login_pass:string;
  trans_pass:string;
  c_login_pass:string;
  c_trans_pass:string;
  ForgotPass(forgotPassword:NgForm){
    this.c_login_pass=forgotPassword.value.confirmLogin;
    this.c_trans_pass=forgotPassword.value.confirmTransact;
    this.acc_no=forgotPassword.value.userid;
    this.login_pass=forgotPassword.value.loginPassword;
    this.trans_pass=forgotPassword.value.transactPassword;
    if(this.login_pass!=this.c_login_pass){
      alert("Oops.!! Login password and Confirm Login password do not match.!");
    }
    else if(this.trans_pass!=this.c_trans_pass)
    {
      alert("Oops.!! Transaction password and Confirm Transaction password do not match.!");
    }
    else if(this.login_pass==this.trans_pass){
      alert("Oops.!! Login and Transaction Password cannot be same.!");
    }
    else{
      this.svc.ResetPasswordByID(this.acc_no,this.login_pass,this.trans_pass).subscribe((data:string)=>
      {
        alert(data);
      });
    }
  }
}