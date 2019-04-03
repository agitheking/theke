import { Injectable } from '@angular/core';
import { Shift } from './shift';
import { Observable, of } from 'rxjs';
import { SHIFTS } from './mock_shifts';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShiftService {

  private shiftsUrl = 'api/shifts';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getShifts(): Observable<Shift[]> {

    return this.http.get<Shift[]>(this.shiftsUrl);
  }

  getShift(id: number): Observable<Shift> {
    const url = `${this.shiftsUrl}/${id}`;
    return this.http.get<Shift>(url)
  }

}
