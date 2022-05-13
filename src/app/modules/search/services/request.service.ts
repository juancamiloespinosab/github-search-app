import { Injectable } from '@angular/core';
import { User } from '@core/interfaces/models/User';
import { UsersRequestParameters } from '@core/interfaces/api-request/UsersRequestParameters';
import { SearchService } from '@core/services/api/search.service';
import { SharingService } from '@core/services/app/sharing.service';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  PAGINATION = environment.githubSearchApi.pagination;

  paginationState

  constructor(
    private searchService: SearchService,
    private sharingService: SharingService
  ) {
    this.paginationState = {
      searchUsers: { per_page: this.PAGINATION.per_page, page: this.PAGINATION.page }
    }
  }

  async searchUsers(query: string) {

    let users: User[] = await this.searchService.getUsers({
      q: query,
      per_page: this.paginationState.searchUsers.per_page,
      page: this.paginationState.searchUsers.page
    });

    this.sharingService.searchingObservableData = users;
  }
}
