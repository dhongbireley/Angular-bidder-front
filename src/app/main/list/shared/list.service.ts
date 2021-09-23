import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from './list.model';



@Injectable({
  providedIn: 'root'
})
export class ListService {
  apiUrl = 'https://sbc-pc:8001/api/biditem';

  constructor(private http: HttpClient) { }

  getAllList(): Observable<List[]> {
    const myHeader = { 'Content-Type': 'application/json' };
    return this.http.get<List[]>(this.apiUrl, {
      headers: myHeader
    });
  }
}
