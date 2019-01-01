import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class AuthenticationService {
  private usersUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string) {
    return this.http.post<any>(`${this.usersUrl}/auth/login`, { email: email, password: password })
      .pipe(
          catchError(this.handleError<any>('login'))
      );
  }

  getToken(): string {
    const currentUser = localStorage.getItem('currentUser');
    return JSON.parse(currentUser) ?  JSON.parse(currentUser).access_token : '';
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation, error);  
      return of(result as T);
    };
  }
}
