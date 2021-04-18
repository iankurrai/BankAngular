import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accountdetails',
  templateUrl: './accountdetails.component.html',
  styleUrls: ['./accountdetails.component.css']
})
export class AccountdetailsComponent implements OnInit {
Acc_No:number = 1001009;
Fname:string= "Shanay Birla";
Mob_No:number= 122676787879;
Email:string="abc@gmail.com";
Aadhar_No: number=123456789012;
P_Address1:string ="mumbai mumbai mumbai";
AccountType: string ="Savings";


  constructor() { }

  ngOnInit(): void {
  }

}
