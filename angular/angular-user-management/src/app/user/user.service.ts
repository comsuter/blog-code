import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public httpClient: HttpClient) { }

  getUser(id: string, callback: any) {
    // this.httpClient.get(`/api/users/${id}`).subscribe((callback: any) => console.log(callback));
    this.httpClient.get(`/api/users/${id}`).subscribe((response: any) => { callback(response) });
  }

  addUser(user: any, callback: any) {
    this.httpClient.post('/api/users', user).subscribe((response: any) => { callback(response) });
  }

  modifyUser(user: any, callback: any) {
    this.httpClient.put(`/api/users/${user.id}`, user).subscribe((response: any) => { callback(response) });
  }

  removeUser(id: string, callback: any) {
    // this.httpClient.delete(`/api/users/${id}`).subscribe(callback);
    this.httpClient.delete(`/api/users/${id}`).subscribe((response: any) => { callback(response) });
  }
}
