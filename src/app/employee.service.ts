import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from 'employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  constructor(private http: HttpClient) {}

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`http://localhost:3000/employee`);
  }

  public addEmployees(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`http://localhost:3000/employee`, employee);
  }

  public updateEmployees(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`http://localhost:3000/employee`, employee);
  }

  public deleteEmployees(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/employee/${id}`);
  }

}
