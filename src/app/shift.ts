import { Place } from './place';

export class Shift {
    id: number;
    name: string;
    start: string;
    places: Place[];
    maxPlaces: number;
}