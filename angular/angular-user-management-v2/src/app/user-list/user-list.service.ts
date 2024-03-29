import { Injectable } from '@angular/core';
import { ApiGatewayService } from '../api-gateway.service';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor(public apiGatewayService: ApiGatewayService) { }

  findAllUserSummary() {
    return this.apiGatewayService.get('users');
  }
}
