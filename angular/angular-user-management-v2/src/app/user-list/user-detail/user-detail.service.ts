import { Injectable } from '@angular/core';
import { User } from './user.model';
import { ApiGatewayService } from '../../api-gateway.service';

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  constructor(public apiGatewayService: ApiGatewayService) { }

  findUser(no: number) {
    // return this.httpClient.get(`/api/v1/users/${no}`, { headers: this.headerInfo }).map(res => res.json());
    // return this.httpClient.get(`/api/v1/users/${no}`, { headers: this.headerInfo });
    return this.apiGatewayService.get(`/api/v1/users/${no}`);
  }

  addUser(user: any) {
    // return this.httpClient.post('/api/v1/users', user, { headers: this.headerInfo }).map(res => res.json());
    // return this.httpClient.post('/api/v1/users', user, { headers: this.headerInfo });
    return this.apiGatewayService.post('/api/v1/users', user);
  }

  modifyUser(user: User) {
    // return this.httpClient.put(`/api/v1/users/${user.no}`, user, { headers: this.headerInfo }).map(res => res.json());
    // return this.httpClient.put(`/api/v1/users/${user.no}`, user, { headers: this.headerInfo });
    return this.apiGatewayService.put(`/api/v1/users/${user.no}`, user);
  }

  removeUser(no: any) {
    // return this.httpClient.delete(`/api/v1/users/${userNo}`, { headers: this.headerInfo });
    // return this.httpClient.delete(`/api/v1/users/${no}`, { headers: this.headerInfo });
    return this.apiGatewayService.delete(`/api/v1/users/${no}`);
  }
}
