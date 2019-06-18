import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimOverviewComponent } from './pages/sim-overview/sim-overview.component';

const routes: Routes = [
  {
    path: '',
    component: SimOverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
