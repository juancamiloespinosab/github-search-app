import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RandomService } from '@core/helpers/random.service';
import { Item, UsersResponse } from '@core/interfaces/api-response/UsersResponse';
import { User } from '@core/interfaces/models/User';
import { UsersRequestParameters } from '@core/interfaces/request-parameters/UsersRequestParameters';
import { environment } from 'environments/environment';
import { lastValueFrom, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private githubApi = environment.githubSearchApi;

  constructor(
    private httpClient: HttpClient,
    private randomService: RandomService
  ) { }

  async getUsers(requestParameters: UsersRequestParameters): Promise<User[]> {
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

      const users$ = this.httpClient.get<UsersResponse>(url, { params: queryParameters }).pipe(
        map((response: UsersResponse): User[] => {
          return response.items.map((item: Item): User => {
            return {
              avatar_url: item.avatar_url,
              login: item.login,
              type: item.type,
              // score: item.score
              score: this.randomService.randomNumberFromInterval(0.1,1)
            }
          })
        })
      );

      return await lastValueFrom(users$);

    } catch (err) {
      throw err;
    }
  }
}
