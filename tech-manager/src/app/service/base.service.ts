import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  serverUrl: string = "http://localhost:3000/items";

  data = {
    items: [
      {
        id: '1',
        number: '1',
        name: 'Dell',
        type: 'laptop',
        room: 'storage',
        provider: 'Barócsi Benjámim'
      },
      {
        id: '2',
        number: '1',
        name: 'Hama',
        type: 'mouse',
        room: 'storage',
        provider: 'Barócsi Benjámim'
      },
      {
        id: '3',
        number: '1',
        name: 'Technika',
        type: 'bag',
        room: 'storage',
        provider: 'Barócsi Benjámim'
      }
    ]
  };

  constructor() { }

  getAll(dataType: string): any[] {
    return this.data[dataType];
  }
}
