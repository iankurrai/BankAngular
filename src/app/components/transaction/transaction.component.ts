import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
model:any=[];
  constructor() { }

  ngOnInit(): void {
  }
Transfer(transferform:NgForm):void{
  console.log(transferform.value);
}
}
