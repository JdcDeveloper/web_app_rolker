import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';

import { RouterModule, Routes } from '@angular/router';

import { LoginService } from './services/login.service';

import { HttpClientModule } from '@angular/common/http';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AddUsersComponent } from './users/add-users/add-users.component';

import { FlashMessagesModule } from 'angular2-flash-messages';
import { UsersService } from './services/users.service';


/* routes */
const appRoutes: Routes = [
  {path:'', component:LoginComponent}, 
  {path:'dashboard', component:DashboardComponent},
  {path:'users', component:UsersComponent},
  {path:'add', component:AddUsersComponent},
  {path:'login', component:LoginComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    DashboardComponent,
    UsersComponent,
    AddUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlashMessagesModule.forRoot(),
  ],
  providers: [LoginService,UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
