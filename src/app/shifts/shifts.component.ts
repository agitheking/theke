import { Component, OnInit } from '@angular/core';
import { Shift } from '../shift';

@Component({
  selector: 'app-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.styl']
})
export class ShiftsComponent implements OnInit {

  shift: Shift = { id: 1, name: 'Ich Romeo Du Julia' };

  constructor() { }

  ngOnInit() {
  }

}
