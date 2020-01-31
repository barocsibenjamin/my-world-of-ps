import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  cols = {
    items: [
      { key: 'id', text: '#' },
      { key: 'number', text: 'Number' },
      { key: 'name', text: 'Name' },
      { key: 'type', text: 'Type' },
      { key: 'room', text: 'Room' },
      { key: 'provider', text: 'Provider' }
    ]
  };

  constructor() { }
}
