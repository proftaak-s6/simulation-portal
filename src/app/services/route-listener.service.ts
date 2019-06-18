import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { SimulationRoute } from '../entities/SimulationRoute';

@Injectable({
  providedIn: 'root'
})
export class RouteListenerService {

  invokeCarAddFunction = new EventEmitter();
  subsVar: Subscription;

  constructor() { }

  onCarAddEvent(simulationRoute: SimulationRoute) {
    this.invokeCarAddFunction.emit(simulationRoute);
  }
}
