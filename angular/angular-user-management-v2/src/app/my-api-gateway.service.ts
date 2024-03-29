import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyApiGatewayService {

  constructor(private httpClient: HttpClient) { }

  get(url: string)  {
    return this.httpClient.get(url);
  }

  post(url: string, data: any) {
    return this.httpClient.post(url, data);
  }

  put(url: string, data: any) {
    return this.httpClient.put(url, data);
  }

  delete(url: string) {
    return this.httpClient.delete(url);
  }
}
