import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{OpenaccountComponent} from '../app/components/openaccount/openaccount.component';
import{LoginComponent} from '../app/components/login/login.component'
import { HomeComponent } from './components/home/home.component';
import {HeaderComponent} from './components/header/header.component';
import{FooterComponent} from './components/footer/footer.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { RegisterComponent } from './components/register/register.component';
import { UserinfoComponent } from './components/userinfo/userinfo.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactComponent } from './components/contact/contact.component';
import { TrackComponent } from './components/track/track.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';


const routes: Routes = [
{path : 'openaccount', component:OpenaccountComponent},
{path : 'login', component:LoginComponent},
{path : 'home', component:HomeComponent},
{path: 'header', component:HeaderComponent},
{path: 'footer', component:FooterComponent},
{path: 'adminlogin', component:AdminloginComponent},
{path: 'register', component:RegisterComponent},
{path: 'userinfo', component:UserinfoComponent},
{path:'aboutus', component:AboutusComponent},
{path:'contact', component:ContactComponent},
{path:'track', component:TrackComponent},
{path: 'resetpassword', component:ResetpasswordComponent}



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
