import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  baseUrl = environment.api.BASE_URL;
  header = environment.api.header;

  headers = new HttpHeaders(this.header);

  constructor(private _http: HttpClient) {}

  getCoins() {
    return this._http.get(`${this.baseUrl}cryptocurrency/listings/latest`, {
      headers: this.headers,
    });
  }
}
