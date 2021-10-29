import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  constructor(private httpClient: HttpClient) {}

  getGists(user: string) {
    return this.httpClient.get<any[]>(
      `https://api.github.com/users/${user}/gists`
    );
  }

  getRepositories() {
    return this.httpClient.get(
      'https://api.github.com/users/octocat/repos?per_page=100'
    );
  }
}
