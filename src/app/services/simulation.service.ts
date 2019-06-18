import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { SimulationInput } from '../entities/SimulationInput';
import { Observable } from 'rxjs';
import { SimulationRoute } from '../entities/SimulationRoute';

@Injectable({
  providedIn: 'root'
})
export class SimulationService {

  private readonly baseUrl = 'http://simulation.fontys-project.nl/route';


  constructor(private httpClient: HttpClient) { }

  public simulateRoute(simulationInput: SimulationInput) {
    return this.httpClient.post(`${this.baseUrl}/${simulationInput.trackerId}`, {
      origin: simulationInput.origin,
      destination: simulationInput.destination
    }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      observe: 'response'
    });
  }
}
