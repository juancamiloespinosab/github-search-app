import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RandomService } from '@core/helpers/random.service';
import { UsersResponse } from '@core/interfaces/api-response/UsersResponse';
import { User } from '@core/interfaces/models/User';
import { UsersRequestParameters } from '@core/interfaces/api-request/UsersRequestParameters';
import { environment } from 'environments/environment';
import { Observable, pluck } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private githubApi = environment.githubSearchApi;

  constructor(
    private httpClient: HttpClient,
    private randomService: RandomService
  ) { }

  getUsers(requestParameters: UsersRequestParameters): Observable<User[]> {
    try {
      let queryParameters = new HttpParams();

      queryParameters = queryParameters.appendAll(
        {
          q: requestParameters.q ?? '',
          per_page: requestParameters.per_page ?? this.githubApi.pagination.per_page,
          page: requestParameters.page ?? this.githubApi.pagination.page
        }
      )

      const url = this.githubApi.baseUrl + this.githubApi.paths.users

      return this.httpClient.get<UsersResponse>(url, { params: queryParameters }).pipe(
        pluck('items')
      )

    } catch (error) {
      throw error;
    }
  }
}
