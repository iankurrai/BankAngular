import { Component, OnInit } from '@angular/core';
import {RegisterinfoModule} from '../../modules/registerinfo/registerinfo.module';
import {AdminService}from '../../services/admin.service';
import {FormsModule,NgForm,FormGroup} from '@angular/forms';
@Component({
  selector: 'app-getallcustomersbyaccno',
  templateUrl: './getallcustomersbyaccno.component.html',
  styleUrls: ['./getallcustomersbyaccno.component.css']
})
export class GetallcustomersbyaccnoComponent implements OnInit {
svc:AdminService;
reg=new RegisterinfoModule();
model:any=[];
accno: number;
  constructor(svc:AdminService) { 
    this.svc=svc;
    
  }
  Acc_No: number;
  Ref_ID: string;
  Title : string;
  Fname: string;
  Mname: string;
  Lname : string;
  MobNo: number ;
  Email :string;
  Aadhar_No:number;
  DOB : string;
  AddressL1:string;
  AddressL2 : string;
  Landmark: string;
  City : string;
  State : string;
  Pincode :number;
  P_Address1:string;
  P_Address2:string;
  P_Landmark: string;
  P_City : string;
  P_State : string;
  P_Pincode :number;
  OccupationType : string;
  Src_Income : string;
  GrossAnnual_Income : string;
  DebitCard : string;
  NetBanking : string;
  AccountType : string;
  Branch_Name : string;
  Status: string;
  ngOnInit(): void {
  }
  
  getcustomerbyaccno(getcustomer:NgForm):void{
    console.log(getcustomer.value);
    this.accno = getcustomer.value.accNo;
    this.svc.GetAllRegistrationsbyaccno(this.accno).subscribe((data:RegisterinfoModule)=>{
      this.Acc_No= data.Acc_No;
      this.Ref_ID= data.Ref_ID;
      this.Fname=data.Fname;
      this.Mname=data.Mname;
      this.Lname=data.Lname;
      this.MobNo=data.MobNo;
      this.Email=data.Email;
      this.Aadhar_No=data.Aadhar_No;
      this.DOB=data.DOB;
      this.P_Address1=data.P_Address1+","+data.P_Address2;
      // this.P_Address2=data.P_Address2;
      this.P_Landmark=data.Landmark;
      this.P_State=data.P_State;
      this.P_City=data.P_City;
      this.P_Pincode=data.P_Pincode;
      this.OccupationType=data.OccupationType;
      this.Src_Income=data.Src_Income;
      this.GrossAnnual_Income=data.GrossAnnual_Income;
      this.DebitCard=data.DebitCard;
      this.NetBanking=data.NetBanking;
      this.AccountType=data.AccountType;
      this.Branch_Name=data.Branch_Name;
    }) ;
  }
}
