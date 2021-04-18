import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-accountstatement',
  templateUrl: './accountstatement.component.html',
  styleUrls: ['./accountstatement.component.css']
})
export class AccountstatementComponent implements OnInit {
user:any=[];
  constructor() { }

  ngOnInit(): void {
  }
  getstatement(statementform: NgForm):void{}
}
