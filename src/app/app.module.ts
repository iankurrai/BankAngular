import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { RecaptchaModule,RecaptchaFormsModule } from "ng-recaptcha";
import { NgxCaptchaModule } from 'ngx-captcha';



import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {environment} from '../environments/environment';

import { OpenaccountComponent } from './components/openaccount/openaccount.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';


import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { RegisterComponent } from './components/register/register.component';
import { UserinfoComponent } from './components/userinfo/userinfo.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactComponent } from './components/contact/contact.component';
import { TrackComponent } from './components/track/track.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { VirtualkeyboardComponent } from './components/virtualkeyboard/virtualkeyboard.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import { OtpComponent } from './components/otp/otp.component';
import { BeneficiaryComponent } from './components/beneficiary/beneficiary.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { ResetbyacComponent } from './components/resetbyac/resetbyac.component';
import { GetallcustomerssComponent } from './components/getallcustomerss/getallcustomerss.component';
import { GetallcustomersbyaccnoComponent } from './components/getallcustomersbyaccno/getallcustomersbyaccno.component';
import { ApprovalComponent } from './components/approval/approval.component';
import { ModalComponent } from './components/modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import{DatePipe} from '@angular/common';
import { InsertBranchComponent } from './components/insert-branch/insert-branch.component';




@NgModule({
  declarations: [
    AppComponent,
    OpenaccountComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AdminloginComponent,
    RegisterComponent,
    UserinfoComponent,
    AboutusComponent,
    ContactComponent,
    TrackComponent,
    ResetpasswordComponent,
    VirtualkeyboardComponent,
    UserdashboardComponent,
    OtpComponent,
    BeneficiaryComponent,
    TransactionComponent,
    ResetbyacComponent,
    GetallcustomerssComponent,
    GetallcustomersbyaccnoComponent,
    ApprovalComponent,
    ModalComponent,
    InsertBranchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    NgxCaptchaModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    NgbModule
 
  
  ],
 
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
