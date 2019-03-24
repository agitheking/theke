import { Component, OnInit } from '@angular/core';
import { Shift } from '../shift';
import { ShiftService } from '../shift.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.styl']
})
export class DashboardComponent implements OnInit {
  shifts: Shift[] = [];

  constructor(private heroService: ShiftService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getShifts()
      .subscribe(shifts => this.shifts = shifts.slice(1, 5));
  }
}