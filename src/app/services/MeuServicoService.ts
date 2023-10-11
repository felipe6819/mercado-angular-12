import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MeuServicoService {
  private apiUrl = 'https://stackblitz.com/edit/base-angular-12-app-zcdh9a';

  constructor(private http: HttpClient) {}

  getDados(): Observable<any> {
    return this.http.get(`${this.apiUrl}/dados`);
  }
}
