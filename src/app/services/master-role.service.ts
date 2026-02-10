import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface MasterRole {
  roleId?: number;
  roleName: string;
  permission: string;
}

@Injectable({
  providedIn: 'root'
})
export class MasterRoleService {

  private apiUrl = 'https://localhost:7116/api/MasterRole';

  constructor(private http: HttpClient) {}

  getRoles(): Observable<MasterRole[]> {
    return this.http.get<MasterRole[]>(this.apiUrl);
  }

  addRole(role: MasterRole): Observable<MasterRole> {
    return this.http.post<MasterRole>(this.apiUrl, role);
  }
}
