import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user/user.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryUserService implements InMemoryDbService {

  private _database: any;

  createDb() {
    this._database = {};
    this.makeUserTableAndDummyData();
    return this._database;
  }

  private createTable(tableName: string, initialData: any[]) {
    this._database[tableName] = initialData;
  }

  private makeUserTableAndDummyData() {
    const dummyUserData: User[] = [
      { id: 'user01', name: '카리나', age: 23 },
      { id: 'user02', name: '차은우', age: 25 },
      { id: 'user03', name: '민지', age: 20 },
    ];

    this.createTable('users', dummyUserData);
  }
}
