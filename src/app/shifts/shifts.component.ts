import { Component, OnInit } from '@angular/core';
import { Shift } from '../shift';
import { SHIFTS } from '../mock_shifts';
import { ShiftService } from '../shift.service';

import { from } from 'rxjs';

@Component({
  selector: 'app-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.styl']
})
export class ShiftsComponent implements OnInit {

  shifts: Shift[];

  constructor(private shiftService: ShiftService) { }

  ngOnInit() {
    this.getShifts();
  }


  getShifts() {
    this.shiftService.getShifts()
      .subscribe(shifts => this.shifts = shifts);
  }
}
