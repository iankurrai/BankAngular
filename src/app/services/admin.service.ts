import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observer} from 'rxjs';
import{HttpHeaders} from '@angular/common/http';
import{Observable} from 'rxjs/internal/observable';
import{RegisterinfoModule} from '../modules/registerinfo/registerinfo.module';
import {IfscModule} from '../modules/ifsc/ifsc.module';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
reg: RegisterinfoModule;
http:HttpClient;
ifsc:IfscModule;
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
GetAllRegistrationsbyStatus():Observable<RegisterinfoModule[]>
{
  return this.http.get<RegisterinfoModule[]>(this.url+"/"+"GetAllRegistrationsbyStatus");

}
AdminApprovals(accno:number):Observable<boolean>{
  return this.http.put<boolean>(this.url+"/"+"AdminApprovals"+"/"+ accno,this.httpOptions);
}

AdminReject(accno:number):Observable<boolean>{
  return this.http.put<boolean>(this.url+"/"+"AdminReject"+"/"+ accno,this.httpOptions);
}

AddBranch(ifsc:IfscModule):Observable<boolean>{
  return this.http.post<boolean>(this.url + "/" + "AddBranch", ifsc, this.httpOptions);
}
GetIfsc():Observable<IfscModule[]>{
  return this.http.get<IfscModule[]>(this.url +"/" + "Get_IFSC" );
}

UpdateCustomer(accno:number, reg:RegisterinfoModule):Observable<boolean>{
  return this.http.put<boolean>(this.url +"/" + "UpdateCustomer" + "/" + accno,reg, this.httpOptions);
}
}
