import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService extends InMemoryDbService{
  createDb() {
    const users = [
      {id: 1, fullname: 'John Doe', email: 'email@example.com', contact: 123456},
      {id: 2, fullname: 'Jane Doe', email: 'email@example.com', contact: 123457},
    ]
    return {
      users
    }
  }

  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;
  }
}
