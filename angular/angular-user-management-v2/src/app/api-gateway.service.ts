import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { API_URL_TOKEN, API_VER_TOKEN } from './app.tokens';

@Injectable({
  providedIn: 'root'
})
export class ApiGatewayService {

  constructor(
    private httpClient: HttpClient,
    @Inject(API_VER_TOKEN) public apiVer: string,
    @Inject(API_URL_TOKEN) public apiUrl: string
  ) {
    this.setDefaultHttpOption();
  }

  httpHeaders: HttpHeaders = new HttpHeaders({
    Authorization: 'Bearer JWT-token'
});

  get(url: string)  {
    // return this.httpClient.get(url);
    return this.httpClient.get(`${this.apiUrl}/${this.apiVer}/${url}`, { headers: this.httpHeaders });
  }

  post(url: string, data: any) {
    // return this.httpClient.post(url, data);
    return this.httpClient.post(`${this.apiUrl}/${this.apiVer}/${url}`, data, { headers: this.httpHeaders });
  }

  put(url: string, data: any) {
    // return this.httpClient.put(url, data);
    return this.httpClient.put(`${this.apiUrl}/${this.apiVer}/${url}`, data, { headers: this.httpHeaders });
  }

  delete(url: string) {
    // return this.httpClient.delete(url);
    return this.httpClient.delete(`${this.apiUrl}/${this.apiVer}/${url}`, { headers: this.httpHeaders });
  }

  setDefaultHttpOption() {
    const headers = new HttpHeaders();
    headers.set('Content-type', 'application/json');
    headers.set('X-My-Api-Token', 'angular-is-awesome');

    // TODO your custome Request options...
    // const headers = new Headers();
    // headers.append('Content-type', 'application/json');
    // this.reqOptions.headers = headers;
  }
}
