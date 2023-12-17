import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'api/users';  // URL to web api
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getUser(id: number): Observable<User> {
    const url = `${this.apiUrl}/${id}`;
    console.log(url)
    return this.http.get<User>(url).pipe(
      tap(_ => console.log(`fetched User id=${id}`)),
      catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }
  getUsers(): Observable<User[]> {
    console.log(this.apiUrl)
    return this.http.get<User[]>(this.apiUrl)
      .pipe(
        tap(_ => console.log('fetched Users')),
        catchError(this.handleError<User[]>('getUsers', []))
      );
  }

  updateUser(User: User): Observable<any> {
    return this.http.put(this.apiUrl, User, this.httpOptions).pipe(
      tap(_ => console.log(`updated User id=${User.id}`)),
      catchError(this.handleError<any>('updateUser'))
    );
  }

  registerUser(User: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, User, this.httpOptions).pipe(
      tap((newUser: User) => console.log(`added User w/ id=${newUser.id}`)),
      catchError(this.handleError<User>('registerUser'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // console.error(`${operation} failed: ${error.message}`);
      console.error(error);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
