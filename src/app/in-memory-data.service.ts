import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Shift } from './shift';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const shifts: Shift[] = [
      { id: 11, name: 'Mr. Nice', start: '12.13.2019 12:12', maxPlaces: 3, places: [{ id: 1, name: 'Mr. Nice', addTime: '12.13.2019 12:12' }, { id: 1, name: 'Mr. Nice', addTime: '12.13.2019 12:12' }, { id: 1, name: 'Mr. Nice', addTime: '12.13.2019 12:12' }] },
      { id: 12, name: 'Narco', start: '12.13.2019 12:12', maxPlaces: 3, places: [{ id: 1, name: 'Mr. Nice', addTime: '12.13.2019 12:12' }] },
      { id: 13, name: 'Bombasto', start: '12.13.2019 12:12', maxPlaces: 3, places: [{ id: 1, name: 'Mr. Nice', addTime: '12.13.2019 12:12' }] },
      { id: 14, name: 'Celeritas', start: '12.13.2019 12:12', maxPlaces: 3, places: [{ id: 1, name: 'Mr. Nice', addTime: '12.13.2019 12:12' }] },
      { id: 15, name: 'Magneta', start: '12.13.2019 12:12', maxPlaces: 3, places: [{ id: 1, name: 'Mr. Nice', addTime: '12.13.2019 12:12' }] },
      { id: 16, name: 'RubberMan', start: '12.13.2019 12:12', maxPlaces: 3, places: [{ id: 1, name: 'Mr. Nice', addTime: '12.13.2019 12:12' }] },
      { id: 17, name: 'Dynama', start: '12.13.2019 12:12', maxPlaces: 3, places: [{ id: 1, name: 'Mr. Nice', addTime: '12.13.2019 12:12' }] },
      { id: 18, name: 'Dr IQ', start: '12.13.2019 12:12', maxPlaces: 3, places: [{ id: 1, name: 'Mr. Nice', addTime: '12.13.2019 12:12' }] },
      { id: 19, name: 'Magma', start: '12.13.2019 12:12', maxPlaces: 3, places: [{ id: 1, name: 'Mr. Nice', addTime: '12.13.2019 12:12' }] },
      { id: 20, name: 'Tornado', start: '12.13.2019 12:12', maxPlaces: 3, places: [{ id: 1, name: 'Mr. Nice', addTime: '12.13.2019 12:12' }] }
    ];
    return { shifts };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(shifts: Shift[]): number {
    return shifts.length > 0 ? Math.max(...shifts.map(hero => hero.id)) + 1 : 11;
  }
}
