import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiClient {
  private apiUrl = '/api';

  constructor(private http: HttpClient) { }

  /**
   * Make a GET request
   */
  get<T>(endpoint: string, options?: any): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}${endpoint}`, options);
  }

  /**
   * Make a POST request
   */
  post<T>(endpoint: string, body: any, options?: any): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}${endpoint}`, body, options);
  }

  /**
   * Make a PUT request
   */
  put<T>(endpoint: string, body: any, options?: any): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}${endpoint}`, body, options);
  }

  /**
   * Make a DELETE request
   */
  delete<T>(endpoint: string, options?: any): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}${endpoint}`, options);
  }

  /**
   * Make a PATCH request
   */
  patch<T>(endpoint: string, body: any, options?: any): Observable<T> {
    return this.http.patch<T>(`${this.apiUrl}${endpoint}`, body, options);
  }
}
