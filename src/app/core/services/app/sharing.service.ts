import { Injectable } from '@angular/core';
import { User } from '@core/interfaces/models/User';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharingService {

  private searchingObservablePrivate: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([])

  constructor() { }

  get searchingObservable() {
    return this.searchingObservablePrivate.asObservable();
  }

  set searchingObservableData(users: User[]) {
    this.searchingObservablePrivate.next(users)
  }
}
