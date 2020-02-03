import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  serverUrl: string = "http://localhost:3000/";

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

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(dataType: string): Observable<any> {
    let url = `${this.serverUrl}${dataType}`;
    return this.httpClient.get(url);
  }
}
