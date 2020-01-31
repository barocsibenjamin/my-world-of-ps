import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  cols = {
    items: [
      { key: 'id', text: '#', type: 'plain' },
      { key: 'number', text: 'Number', type: 'number' },
      { key: 'name', text: 'Name', type: 'text' },
      { key: 'type', text: 'Type', type: 'text' },
      { key: 'room', text: 'Room', type: 'text' },
      { key: 'provider', text: 'Provider', type: 'text' }
    ]
  };

  constructor() { }
}
