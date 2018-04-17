import { Car } from './models/car';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable, Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RepositoryService } from './repository.service';

@Injectable()
export class CarRepository extends RepositoryService<Car> {

  protected endPoint = 'http://ec2-18-188-115-1.us-east-2.compute.amazonaws.com/';

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
}
