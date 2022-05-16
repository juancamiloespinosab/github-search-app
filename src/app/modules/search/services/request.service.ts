import { Injectable } from '@angular/core';
import { User } from '@core/interfaces/models/User';
import { SearchService } from '@core/services/api/search.service';
import { SharingService } from '@core/services/app/sharing.service';
import { environment } from 'environments/environment';
import { lastValueFrom, map } from 'rxjs';

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

  async searchUsers(query: string): Promise<number> {

    try {
      const users$ = this.searchService.getUsers({
        q: query,
        per_page: this.paginationState.searchUsers.per_page,
        page: this.paginationState.searchUsers.page
      }).pipe(
        map((users: User[]) => {
          return users.map((user: User) => {
            return {
              avatar_url: user.avatar_url,
              login: user.login,
              type: user.type,
              score: user.score
            }
          })
        })
      )

      const users = await lastValueFrom(users$)
      this.sharingService.searchingObservableData = users;
      return users.length;

    } catch (error) {
      this.sharingService.searchingObservableData = [];
      throw error;

    }

  }
}
