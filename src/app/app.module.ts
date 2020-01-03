import { UsersComponent } from './users/users.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { HeaderComponent } from './header/header.component';

//import routerModule first
import { RouterModule, Router } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { SimpleComponent } from './simple/simple.component';
import { CustomDirective } from './custom.directive';
import { ContactComponent } from './contact/contact.component';
import { ContctComponent } from './contct/contct.component';
import { FirepageComponent } from './firepage/firepage.component';
import { RegistersComponent } from './registers/registers.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentsComponent } from './students/students.component'

//to use RESTfull Api in angular
//import httpClientModule from @angular/common/http
import { HttpClientModule } from '@angular/common/http';
import { ApiComponent } from './api/api.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeComponent,
    HeaderComponent,
    UsersComponent,
    HomeComponent,
    RegisterComponent,
    PagenotfoundComponent,
    UsersComponent,
    SimpleComponent,
    CustomDirective,
    ContactComponent,
    ContctComponent,
    FirepageComponent,
    RegistersComponent,
    StudentsComponent,
    ApiComponent,
  ],//Register in app.module.file
  imports: [ BrowserModule, FormsModule,ReactiveFormsModule, HttpClientModule
  ],
    //RouterModule.forRoot([
  //     { path:'',component:HomeComponent},
  //     {path:'login',component:LoginComponent},
  //     {path:'register',component:RegisterComponent},
  //     {path:"**",component:PagenotfoundComponent},//404 page not found
        
  //   ])
  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
