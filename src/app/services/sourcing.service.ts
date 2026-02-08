import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SourcingItem } from '../models/sourcing-item.model';

@Injectable({ providedIn: 'root' })
export class SourcingService {
  private apiUrl = 'https://localhost:7116/api/Sourcing'; 

  constructor(private http: HttpClient) { }

  getSourcingItems(): Observable<SourcingItem[]> {
    return this.http.get<SourcingItem[]>(this.apiUrl);
  }

  // Renamed from addSourcingItem to addItem to match your component
  addItem(item: SourcingItem): Observable<SourcingItem> {
    return this.http.post<SourcingItem>(this.apiUrl, item);
  }

  // PUT (UPDATE)
  updateItem(id: number, item: SourcingItem): Observable<SourcingItem> {
    return this.http.put<SourcingItem>(`${this.apiUrl}/${id}`, item);
  }
}