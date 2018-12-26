import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from '../../shared/interfaces';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ItemService {
  constructor(private http: HttpClient) { }
  private productsUrl = 'http://localhost:3000/products';

  loadItems() : Observable<Item[]> {
    return this.http.get<Item[]>(this.productsUrl).pipe(
      catchError(this.handleError('loadItems', []))
    );;
  }

  loadItem(id: number): Observable<Item> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.get<Item>(url)
      .pipe(
        catchError(this.handleError<Item>('loadItem'))
      );
  }

  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.productsUrl, item, httpOptions)
      .pipe(
        catchError(this.handleError<Item>('addItem'))
      );
  }

  updateItem(item: Item): Observable<Item> {
    const url = `${this.productsUrl}/${item.id}`;
    return this.http.put<Item>(url, item, httpOptions)
      .pipe(
        catchError(this.handleError<Item>('updateItem'))
      );
  }

  removeItem(id: number): Observable<Item> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.delete<Item>(url, httpOptions)
      .pipe(
        catchError(this.handleError<Item>('removeItem'))
      )
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation, error);  
      return of(result as T);
    };
  }
}
