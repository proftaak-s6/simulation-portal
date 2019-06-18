import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SimOverviewComponent } from './pages/sim-overview/sim-overview.component';
import { MapComponent } from './components/map/map.component';

import {
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatTableModule,
  MatSnackBarModule
} from '@angular/material';
import { AddCarDialogComponent } from './components/add-car-dialog/add-car-dialog.component';
import { CarOverviewDialogComponent } from './components/car-overview-dialog/car-overview-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarService } from './services/car.service';
import { HttpClientModule } from '@angular/common/http';
import { RouteListenerService } from './services/route-listener.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SimOverviewComponent,
    MapComponent,
    AddCarDialogComponent,
    CarOverviewDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // Material
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatSnackBarModule
  ],
  providers: [
    CarService,
    RouteListenerService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    AddCarDialogComponent,
    CarOverviewDialogComponent
  ]
})
export class AppModule { }
