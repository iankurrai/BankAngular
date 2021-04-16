import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-beneficiary',
  templateUrl: './beneficiary.component.html',
  styleUrls: ['./beneficiary.component.css']
})
export class BeneficiaryComponent implements OnInit {
model:any=[];
  constructor() { }

  ngOnInit(): void {
  }
RegisterData(beneficiary:NgForm):void{
  console.log(beneficiary.value);
}
}
