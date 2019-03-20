import { Component, OnInit } from '@angular/core';
import { Shift } from '../shift';
import { SHIFTS } from '../mock_shifts';
import {ShiftService} from '../shift.service';

import { from } from 'rxjs';

@Component({
  selector: 'app-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.styl']
})
export class ShiftsComponent implements OnInit {

  shift: Shift = { id: 1, name: 'Ich Romeo Du Julia', start: '12.12.2019 12:12' };

  selectedShift: Shift;

  shifts: Shift[];

  constructor(private shiftService: ShiftService) { }

  ngOnInit() {
    this.getShifts();
  }
  onSelect(shift: Shift): void {
    this.selectedShift = shift;
  }

  getShifts () {
   this.shiftService.getShifts().subscribe(shifts => this.shifts = shifts);
  }
}
