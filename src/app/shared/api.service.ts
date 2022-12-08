import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  postEmployee(data: any) {
    return this.http.post<any>('https://customer-manager-db-by-arun.glitch.me/customers/', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  getEmployee() {
    return this.http.get<any>('https://customer-manager-db-by-arun.glitch.me/customers/').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  updateEmployee(data: any, id: number) {
    return this.http.put<any>('https://customer-manager-db-by-arun.glitch.me/customers/' + id, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  deleteEmployee(id: number) {
    return this.http.delete<any>('https://customer-manager-db-by-arun.glitch.me/customers/' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
