import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../entities/Car';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private readonly baseUrl = 'http://car.fontys-project.nl/car';

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Car[]> {
    return this.http.get<Car[]>(this.baseUrl);
  }

  public findWithTracker(): Observable<Car[]> {
    return this.http.get<Car[]>(this.baseUrl + '/with-tracker');
  }
}
