import { Car } from './models/car';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable, Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RepositoryService } from './repository.service';

@Injectable()
export class CarRepository extends RepositoryService<Car> {

  protected endPoint = 'http://ec2-18-221-98-201.us-east-2.compute.amazonaws.com:3000';

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }

  public addCar(car: Car): Observable<Car> {
    const url = this.endPoint + '/addVehicle';
    console.log('car: ', car);
    return this.httpClient.post(url, car, this.httpOptions).pipe(
      catchError(this.handleException)
    );
  }

  public addPart(car: Car): Observable<Car> {
    const url = this.endPoint + '/addVehicle';
    console.log('car: ', car);
    return this.httpClient.post(url, car, this.httpOptions).pipe(
      catchError(this.handleException)
    );
  }

  public showVehicle(): Observable<Car[]> {
    const url = this.endPoint + '/showVehicle';
    return this.httpClient.get(url, this.httpOptions).pipe(
      catchError(this.handleException)
    );
  }
  public showOneVehicle(position:number): Observable<Car>{
    const url = this.endPoint + '/showOneVehicle';
    console.log(position);
    return this.httpClient.get(`${url}/${position}`,this.httpOptions).pipe(
      catchError(this.handleException)
    )
  }

}
