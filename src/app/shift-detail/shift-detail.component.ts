import { Component, OnInit, Input } from '@angular/core';
import { Shift } from '../shift';
import { from } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ShiftService } from '../shift.service';
import { Location } from '@angular/common';
import { shiftInitState } from '@angular/core/src/view';

@Component({
  selector: 'app-shift-detail',
  templateUrl: './shift-detail.component.html',
  styleUrls: ['./shift-detail.component.styl']
})
export class ShiftDetailComponent implements OnInit {

  @Input() shift: Shift;

  constructor(private route: ActivatedRoute, private shiftService: ShiftService, private location: Location) { }

  ngOnInit() {
    this.getShift();
  }

  getShift(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.shiftService.getShift(id)
      .subscribe(shift => this.shift = shift);
  }

  goBack(): void {
    this.location.back();
  }

  placesAvailable(): boolean {
    return this.shift.maxPlaces > this.shift.places.length
  }
}
