import { Component, OnInit, Input } from '@angular/core';
import {Shift} from '../shift';
import { from } from 'rxjs';

@Component({
  selector: 'app-shift-detail',
  templateUrl: './shift-detail.component.html',
  styleUrls: ['./shift-detail.component.styl']
})
export class ShiftDetailComponent implements OnInit {

  @Input() shift:Shift;

  constructor() { }

  ngOnInit() {
  }

}
