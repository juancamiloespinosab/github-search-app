import { Injectable } from '@angular/core';
import { User } from '@core/interfaces/models/User';
import { UsersRequestParameters } from '@core/interfaces/api-request/UsersRequestParameters';
import { SearchService } from '@core/services/api/search.service';
import { SharingService } from '@core/services/app/sharing.service';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private searchService: SearchService,
    private sharingService: SharingService
  ) { }

  async searchUsers(query: UsersRequestParameters) {
    let users: User[] = await this.searchService.getUsers(query);    
    this.sharingService.searchingObservableData = users;
  }
}
