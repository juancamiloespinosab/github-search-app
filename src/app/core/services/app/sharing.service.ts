import { Injectable } from '@angular/core';
import { User } from '@core/interfaces/models/User';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharingService {

  private searchingObservablePrivate: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([
    {
      avatar_url: 'string',
      login: 'uno',
      type: 'User',
      score: 0.5
    },
    {
      avatar_url: 'string',
      login: 'dos',
      type: 'User',
      score: 0.5
    }
  ])

  constructor() { }

  get searchingObservable() {
    return this.searchingObservablePrivate.asObservable();
  }

  set searchingObservableData(users: User[]) {
    this.searchingObservablePrivate.next(users)
  }
}
