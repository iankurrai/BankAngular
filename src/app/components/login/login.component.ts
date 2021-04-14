import { Component, OnInit } from '@angular/core';
import{FormsModule,NgForm, FormGroup} from '@angular/forms';
import{LoginService} from '../../services/login.service';
import{LogininfoModule} from '../../modules/logininfo/logininfo.module';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  svc: LoginService;
  log= new LogininfoModule;
  model:any=[];
  
  constructor(svc: LoginService) { 
    this.svc=svc;
  }



  ngOnInit(): void {
  }
  RegisterData(loginform:NgForm):void
  {
    this.log.User_Id = this.model.name;
    this.log.Login_Password = this.model.pwd;
    this.svc.Login(this.log.User_Id,this.log.Login_Password).subscribe((data:string)=>{
      alert(data);
    })
  }
}