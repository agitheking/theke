import { Injectable } from '@angular/core';
import {Shift} from './shift';
import { Observable, of } from 'rxjs';
import {SHIFTS} from './mock_shifts';

@Injectable({
  providedIn: 'root'
})
export class ShiftService {

  constructor() { }

  getShifts (): Observable<Shift[]>{
    return of (SHIFTS);
  }
}
