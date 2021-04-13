import { Component, OnInit } from '@angular/core';
import {FormsModule, NgForm, FormGroup} from '@angular/forms';
import{RegisterService} from '../../services/register.service';
import{RegisterinfoModule} from '../../modules/registerinfo/registerinfo.module';

@Component({
  selector: 'app-openaccount',
  templateUrl: './openaccount.component.html',
  styleUrls: ['./openaccount.component.css']
})
export class OpenaccountComponent implements OnInit {
  customer : any = [];
  svc: RegisterService;
  reg= new RegisterinfoModule();

  constructor(svc:RegisterService) {
    this.svc = svc;

   }

  ngOnInit(): void {
  }

  RegisterData(accountform : NgForm) : void
  {
    console.log(accountform.value);
    this.reg.Title=this.customer.title;
    this.reg.Fname=this.customer.fname;
    this.reg.Mname=this.customer.mname;
    this.reg.Lname=this.customer.lname;
    this.reg.MobNo=this.customer.mobno;
    this.reg.Email=this.customer.email;
    this.reg.Aadhar_No=this.customer.aadhar;
    this.reg.DOB=this.customer.dob;
    this.reg.AddressL1=this.customer.address1;
    this.reg.AddressL2=this.customer.address2;
    this.reg.Landmark=this.customer.landmark;
    this.reg.City=this.customer.city;
    this.reg.States=this.customer.state;
    this.reg.Pincode=this.customer.pincode;
    this.reg.PAL1=this.customer.PAL1;
    this.reg.PAL2=this.customer.PAL2;
    this.reg.P_Landmark=this.customer.permalandmark;
    this.reg.P_City=this.customer.permacity;
    this.reg.P_State=this.customer.permastate;
    this.reg.P_Pincode=this.customer.permapincode;
    this.reg.OccupationType=this.customer.occType;
    this.reg.Src_Income=this.customer.income;
    this.reg.GrossAnnual_Income=this.customer.salary;
    this.reg.DebitCard=this.customer.atmcard;
    this.reg.NetBanking=this.customer.optNetBanking;
    this.reg.AccountType=this.customer.accType;
    this.reg.Branch_Name=this.customer.branchName;
    /////////////////////////////////////////////////
    console.log(this.reg.PAL1,this.reg.PAL2,this.reg.Branch_Name, this.reg.A_Status);
   this.reg.A_Status="approved";
    //this.reg.Acc_No=1000002;
    this.svc.RegisterCustomer(this.reg).subscribe((data:boolean)=>
    {
      alert(data);
      if(data==true){
        alert("New Customer Registered");}
    })

  }
}