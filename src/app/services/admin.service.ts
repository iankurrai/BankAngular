import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observer} from 'rxjs';
import{HttpHeaders} from '@angular/common/http';
import{Observable} from 'rxjs/internal/observable';
import{RegisterinfoModule} from '../modules/registerinfo/registerinfo.module';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
reg: RegisterinfoModule;
http:HttpClient;
url:string="http://localhost:49597/api/AdminAPI";
httpOptions={headers : new HttpHeaders({
  'Content-Type':'application/json'
})
}
 
constructor(http:HttpClient) 
{
  this.http=http;
}
GetAllRegistrations():Observable<RegisterinfoModule[]>
{
  return this.http.get<RegisterinfoModule[]>(this.url+"/"+"GetAllRegistrations");
}
GetAllRegistrationsbyaccno(accno:number):Observable<RegisterinfoModule>
{
  return this.http.get<RegisterinfoModule>(this.url+"/"+"GetAllRegistrationsbyaccno"+"/"+accno);

}
}
