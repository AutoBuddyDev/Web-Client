import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable, Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RepositoryService } from './repository.service';
import { User } from './models/user';
import {Garage } from './models/garage'
@Injectable()
export class UserRepository extends RepositoryService<User> {

  protected endPoint = 'http://ec2-18-188-115-1.us-east-2.compute.amazonaws.com:3000';

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }

  public login(user: User): Observable<User> {
    const url = this.endPoint + '/login';
    console.log('user: ', user);
    return this.httpClient.post(url, user, this.httpOptions).pipe(
      catchError(this.handleException)
    );
  }

  public signup(user: User): Observable<User> {
    const url = this.endPoint + '/addUser';
    return this.httpClient.post(url, user, this.httpOptions).pipe(
      catchError(this.handleException)
    );
  }

  public signupGarage(garage: Garage): Observable<Garage> {
    const url = this.endPoint + '/addGarage';
    return this.httpClient.post(url, garage, this.httpOptions).pipe(
      catchError(this.handleException)
    );
  }
}
