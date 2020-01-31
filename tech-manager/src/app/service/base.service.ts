import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  data = {
    items: [
      {
        id: '1',
        number: '1',
        name: 'Dell',
        type: 'laptop',
        room: 'Storage',
        provider: 'Barócsi Benjámim'
      }
    ]
  };

  constructor() { }

  getAll(dataType: string): any[] {
    return this.data[dataType];
  }
}
