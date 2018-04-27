import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FilterCompletedRepairsPipe } from './pipes/filter-completed-repairs.pipe';
import { HamburgerComponent } from './components/hamburger/hamburger.component';
<<<<<<< HEAD
import { PartOrdersComponent } from './components/part-orders/part-orders.component';

const appRoutes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'garage', component: GarageComponent },
  { path: 'car', component: CarDetailsComponent},
  { path: '',
    redirectTo: '/landing',
    pathMatch: 'full' }
];
=======
import { UserRepository } from './domain/user-repository';
import { CarRepository } from './domain/car-repository';
import { RepositoryService } from './domain/repository.service';
import { ComponentsModule } from './components/components.module';
>>>>>>> 3ae8ae22269e1e2402a421a3ce4ad480e93d87da


@NgModule({
  declarations: [
<<<<<<< HEAD
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
=======
    AppComponent
>>>>>>> 3ae8ae22269e1e2402a421a3ce4ad480e93d87da
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/landing', pathMatch: 'full' }
    ]),
    ComponentsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserRepository,
    CarRepository
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
