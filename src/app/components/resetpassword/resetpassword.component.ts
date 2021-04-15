import { Component, OnInit,NgZone } from '@angular/core';
import {FormsModule, NgForm, FormGroup} from '@angular/forms';
import{LoginService} from '../../services/login.service';
import{LogininfoModule} from '../../modules/logininfo/logininfo.module';
import {Router}from '@angular/router';
import{timer} from 'rxjs';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  timeLeft: number = 60;
  interval;
  subscribeTimer: any;

  observableTimer() {
    const source = timer(1000, 2000);
    const abc = source.subscribe(val => {
      console.log(val, '-');
      this.subscribeTimer = this.timeLeft - val;
    });
  }
  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        //this.timeLeft = 60;
        alert("Session Timed Out..!! Kindly Regenerate OTP..!!");
        this.pauseTimer();
        this.Code="";
        //this.ngzone.run(()=>this.router.navigateByUrl('/Login'));
      }
    },1000)
  }
  pauseTimer() {
    clearInterval(this.interval);
  }
  svc: LoginService;
  log= new LogininfoModule;
  router:Router;
  ngzone:NgZone;
  constructor(svc: LoginService,router:Router,ngzone:NgZone) { this.svc=svc;this.router=router;this.ngzone=ngzone}
  admin:any=[];
  ngOnInit(): void {
  }
  Acc_No:number;
  Code:string;
  OTP_User:string;
  acc_no:string;
  login_pass:string;
  trans_pass:string;
  c_login_pass:string;
  c_trans_pass:string;
  code:string;
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
      // this.svc.ResetPasswordByID(this.acc_no,this.login_pass,this.trans_pass).subscribe((data:string)=>
    //   {
    //     alert(data);
    //   });
    this.svc.GenerateOTP(this.acc_no).subscribe((data:string)=>
    {
      if(data=="false"){
        alert("Error Occurred");
      }
      else{
        this.Code=data;
        localStorage.setItem('OTP',this.code);
        localStorage.setItem('ACC',this.acc_no);
        localStorage.setItem('LOGIN',this.login_pass);
        localStorage.setItem('TRANSACT',this.trans_pass);


        alert("OTP sent successfully");
        // this.startTimer();
      }
    });
    this.ngzone.run(()=>this.router.navigateByUrl("/otp"));
    }
  }
}