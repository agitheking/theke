import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShiftsComponent } from './shifts/shifts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShiftDetailComponent } from './shift-detail/shift-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'shifts', component: ShiftsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: ShiftDetailComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})

export class AppRoutingModule { }
