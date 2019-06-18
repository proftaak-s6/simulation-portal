import { Component, OnInit, Inject } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { Car } from 'src/app/entities/Car';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Route } from 'src/app/entities/Route';

@Component({
  selector: 'app-add-car-dialog',
  templateUrl: './add-car-dialog.component.html',
  styleUrls: ['./add-car-dialog.component.less']
})
export class AddCarDialogComponent implements OnInit {
  cars: Car[];

  constructor(
    private carService: CarService,
    private dialogRef: MatDialogRef<AddCarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public route: Route,
    private matSnackBar: MatSnackBar
    ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.carService.findWithTracker().subscribe(res => {
      this.cars = res;
    });
  }

  onCancelClick() {
    this.dialogRef.close();
  }

  onAddClick() {
    if (this.route.car !== undefined && this.route.origin.length > 0 && this.route.destination.length > 0) {
      this.dialogRef.close(this.route);
    } else {
      this.matSnackBar.open('Een van de velden is niet volledig ingevuld', 'Sluiten', { duration: 3000 });
    }
  }
}
