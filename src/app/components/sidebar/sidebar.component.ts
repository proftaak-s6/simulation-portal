import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { AddCarDialogComponent } from '../add-car-dialog/add-car-dialog.component';
import { CarOverviewDialogComponent } from '../car-overview-dialog/car-overview-dialog.component';
import { Route } from 'src/app/entities/Route';
import { SimulationService } from 'src/app/services/simulation.service';
import { SimulationRoute } from 'src/app/entities/SimulationRoute';
import { SimulationInput } from 'src/app/entities/SimulationInput';
import { RouteListenerService } from 'src/app/services/route-listener.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {

  constructor(
    private matDialog: MatDialog,
    private simulationService: SimulationService,
    private routeListenerService: RouteListenerService,
    private matSnackBar: MatSnackBar
    ) { }

  ngOnInit() {
  }

  openAddCarDialog() {
    const dialogRef = this.matDialog.open(AddCarDialogComponent, {
      width: '400px',
      data: new Route()
    });

    dialogRef.afterClosed().subscribe((route: Route) => {
      if (route && route.car.id && route.origin.length > 0 && route.origin.length > 0) {
        const sim: SimulationInput = new SimulationInput(
          route.car.tracker.id,
          route.origin,
          route.destination
        );
        this.simulationService.simulateRoute((sim)).subscribe(res => {
          if (res) {
            const response: SimulationRoute = res.body as SimulationRoute;
            if (response) {
              this.routeListenerService.onCarAddEvent(response);
            }
          }
        }, err => {
          this.matSnackBar.open('Geen geldig adres ingevoerd', 'Sluiten', {duration: 5000});
        });
      }
    });
  }

  openCarOverviewDialog() {
    const dialogRef = this.matDialog.open(CarOverviewDialogComponent, {
      width: '800px'
    });
  }
}
