import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  cols = {
    items: [
      { key: 'id', text: '#', type: 'plain' },
      { key: 'number', text: 'Number', type: "number" },
      { key: 'name', text: 'Name', type: "text" },
      { key: 'type', text: 'Type', type: "select", 
      options: [
        { value: "laptop", text: "Laptop" },
        { value: "mouse", text: "Mouse" },
        { value: "bag", text: "Bag" }
      ]},
      { key: 'room', text: 'Room', type: "select", 
      options: [
        { value: "storage", text: "Storage" },
        { value: "vekerdy", text: "Vekerdy" },
        { value: "eisberg", text: "Eisberg" },
        { value: "opal", text: "Opal" },
        { value: "ametiszt", text: "Ametiszt" },
        { value: "turkiz", text: "Turkiz "}
      ]},
      { key: 'provider', text: 'Provider', type: "text" }
    ]
  };

  constructor() { }
}
