import { Injectable } from '@angular/core';
import { Shift } from './shift';
import { Observable, of } from 'rxjs';
import { SHIFTS } from './mock_shifts';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ShiftService {
  

  constructor(private messageService: MessageService) { }

  getShifts(): Observable<Shift[]> {

    this.messageService.add('ShiftService: fetched shifts');
    return of(SHIFTS);
  }

  getShift(id: number): any {
    
    this.messageService.add(`ShiftService: fetched shift: id:${id}`)
    return of (SHIFTS.find(shift => shift.id === id));
  }
}
