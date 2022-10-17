import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  postEmployee(data: any) {
    return this.http.post<any>('https://angular-customer-manager.herokuapp.com/customers/', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  getEmployee() {
    return this.http.get<any>('https://angular-customer-manager.herokuapp.com/customers/').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  updateEmployee(data: any, id: number) {
    return this.http.put<any>('https://angular-customer-manager.herokuapp.com/customers/' + id, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  deleteEmployee(id: number) {
    return this.http.delete<any>('https://angular-customer-manager.herokuapp.com/customers/' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
