import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Observer} from 'rxjs';
import {RegisterinfoModule} from '../modules/registerinfo/registerinfo.module';
import {Observable} from 'rxjs/internal/observable';
import {HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  reg: RegisterinfoModule;
  http: HttpClient;
  url:string = 'http://localhost:49597/api/RegisterAPI';
  httpOptions={headers : new HttpHeaders({
    'Content-Type':'application/json'
  })
  }
  constructor(http: HttpClient) {
    this.http = http;
   }

   RegisterCustomer(reg:RegisterinfoModule):Observable<number>{
    return this.http.post<number>(this.url+"/"+"RegisterCustomer",reg,this.httpOptions);
  }
  GenerateRefID(id:number):Observable<string>
  {
    return this.http.get<string>(this.url+"/GenerateRefID/"+id,this.httpOptions);
  }
  TrackRefID(id:string):Observable<string>
  {
    return this.http.get<string>(this.url+"/TrackRefID/"+ id, this.httpOptions);
  }
}

