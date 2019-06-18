import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialogRef } from '@angular/material';
import { Route } from 'src/app/entities/Route';

@Component({
  selector: 'app-car-overview-dialog',
  templateUrl: './car-overview-dialog.component.html',
  styleUrls: ['./car-overview-dialog.component.less']
})
export class CarOverviewDialogComponent implements OnInit {

  displayedColumns: string[] = [
    'licensePlateNumber',
    'origin',
    'destination',
    'actions'
  ];
  public dataSource: MatTableDataSource<Route>;

  constructor(private dialogRef: MatDialogRef<CarOverviewDialogComponent>) { }

  ngOnInit() {
  }

  onCloseClick() {
    this.dialogRef.close();
  }

}
