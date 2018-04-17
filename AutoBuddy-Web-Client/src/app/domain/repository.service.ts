import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgControlStatus } from '@angular/forms';

export abstract class RepositoryService<T> {

  protected abstract endPoint;

  private httpOptions  = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : 'dbgui'
    })
  };

  constructor(protected httpClient: HttpClient) {}

  // Get all cars
  public get(): Observable<T[]> {
    return this.httpClient.get(`${this.endPoint}`, this.httpOptions).pipe(
      catchError(this.handleException)
    );
  }

  // Get car by id
  public getById(id: number): Observable<T> {
    return this.httpClient.get(`${this.endPoint}/${id}`, this.httpOptions).pipe(
      catchError(this.handleException)
    );
  }

  // Add car
  public add(item: T): Observable<T> {
    return this.httpClient.post(`${this.endPoint}`, item, this.httpOptions).pipe(
      catchError(this.handleException)
    );
  }

  public login(user: T): Observable<T> {
    return this.httpClient.post(`${this.endPoint}`, user, this.httpOptions).pipe(
      catchError(this.handleException)
    );
  }

  // Update information on car if needed
  public update(id: number, item: T): Observable<T> {
    return this.httpClient.put(`${this.endPoint}/${id}`, item, this.httpOptions).pipe(
      catchError(this.handleException)
    );
  }

  // Remove car
  public delete(id: number): Observable<T> {
    return this.httpClient.delete(`${this.endPoint}/${id}`, this.httpOptions).pipe(
    NgControlStatus
    );
  }

  protected handleException(exception: any) {
    const message = `${exception.status} : ${exception.statusText}\r\n${exception.message}`;
    alert(message);
    return Observable.throw(exception);
  }
}

