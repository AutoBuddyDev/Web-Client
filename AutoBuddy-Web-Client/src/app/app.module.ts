import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CarRepairsComponent } from './components/car-repairs/car-repairs.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { FilterCompletedRepairsPipe } from './pipes/filter-completed-repairs.pipe';
import { GarageComponent } from './components/garage/garage.component';
import { ProgressComponent } from './components/progress/progress.component';
import { HamburgerComponent } from './components/hamburger/hamburger.component';
import { PartOrdersComponent } from './components/part-orders/part-orders.component';

import { CommonModule } from '@angular/common';
import { CalendarModule } from 'angular-calendar';
import { ProfileComponent } from './components/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoUtilsModule } from '../../demo-utils/module';

const appRoutes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'garage', component: GarageComponent },
  { path: 'car', component: CarDetailsComponent},
  { path: 'profile', component: ProfileComponent},
  { path: '',
    redirectTo: '/landing',
    pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    SignupComponent,
    GarageComponent,
    CarRepairsComponent,
    CarDetailsComponent,
    FilterCompletedRepairsPipe,
    ProgressComponent,
    HamburgerComponent,
    PartOrdersComponent,
    ProfileComponent

  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, HttpModule, BrowserAnimationsModule, CalendarModule.forRoot(), CommonModule, DemoUtilsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
