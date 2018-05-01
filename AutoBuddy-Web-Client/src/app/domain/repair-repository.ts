import { Repair } from './models/repair';
import { Car } from './models/car';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable, Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RepositoryService } from './repository.service';

@Injectable()
export class RepairRepository extends RepositoryService<Repair> {

  protected endPoint = 'ec2-18-221-98-201.us-east-2.compute.amazonaws.com:3000';

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }

  // Get repairs for car

 public getRepairs(): Observable<Repair> {
  return this.httpClient.get(`${this.endPoint}/showRepairs`, this.httpOptions).pipe(
    catchError(this.handleException)
  );
 }

 // Add car
 public addRepair(repair: Repair): Observable<Repair> {
  return this.httpClient.post(`${this.endPoint}/addRepair`, repair, this.httpOptions).pipe(
    catchError(this.handleException)
  );
}
}
