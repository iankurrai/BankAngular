import { Component, OnInit , NgZone} from '@angular/core';
import{FormsModule,NgForm, FormGroup} from '@angular/forms';
import{LoginService} from '../../services/login.service';
import{LogininfoModule} from '../../modules/logininfo/logininfo.module';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
 svc: LoginService;  
log= new LogininfoModule; 
ngzone: NgZone;
router:Router;

constructor(svc: LoginService, router:Router, ngzone:NgZone) 
{​​ 
  this.svc=svc;
}​​  
model:any=[]; 

 ngOnInit(): void {​​  }​​ 

 id:string; 
Logout(form:NgForm)
{​​    this.id=sessionStorage.getItem('USERNAME'); 
 this.svc.Logout(this.id).subscribe((data:string)=> 
{​​ console.log(data);
  if(data!=null)       
   alert(data);   
  else      
   alert("Error");  
  }​​);   
 sessionStorage.removeItem('USERNAME');
 sessionStorage.removeItem('ACC_NO');
 this.ngzone.run(()=>this.router.navigateByUrl ("/login"));
 }​​
}
