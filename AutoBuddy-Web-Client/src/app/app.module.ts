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
import { ProgressComponent } from './components/progress/progress.component';

const appRoutes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'car',component: CarDetailsComponent},
  { path: '',
    redirectTo: '/landing',
    pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent, LandingComponent, LoginComponent, SignupComponent, CarRepairsComponent, CarDetailsComponent, FilterCompletedRepairsPipe, ProgressComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
