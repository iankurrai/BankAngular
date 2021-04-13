import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule
 
  
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
