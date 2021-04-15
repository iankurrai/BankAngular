import { Component, OnInit, NgZone } from '@angular/core';
import{FormsModule,NgForm, FormGroup} from '@angular/forms';
import{LoginService} from '../../services/login.service';
import{LogininfoModule} from '../../modules/logininfo/logininfo.module';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  svc: LoginService;
  log= new LogininfoModule;
  model:any=[];
  name: string;
  pwd: string;
  router:Router;
  ngzone: NgZone;
  
  constructor(svc: LoginService, router: Router, ngzone : NgZone) { 
    this.svc=svc;
    this.router=router;
    this.ngzone=ngzone;
  }

  ngOnInit(): void {
  }
  RegisterData(loginform:NgForm):void
  {
    console.log(loginform.value);

    

      this.name=loginform.value.name;

      this.pwd=loginform.value.pwd;

      sessionStorage.setItem('USERNAME',this.name);

      this.svc.Login(this.name,this.pwd).subscribe((data:String)=>{

        console.log(data);

        alert(data);

        if(data=="Login Successful")

        {
          this.ngzone.run(()=>this.router.navigateByUrl("/userdashboard"));
          alert("Hello");
        }

       

      });
    
  }
}