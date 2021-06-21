import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JokeResponse } from '../joke';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private dadJokeUrl = "https://icanhazdadjoke.com/";

  constructor(private http: HttpClient) {}

  getNewJoke(): Observable<JokeResponse> {
    const headers = {
        'Accept': 'application/json',
        'User-Agent': 'My Library (https://github.com/jessicalyn/dad-jokes)'
      }

    return this.http.get<JokeResponse>(this.dadJokeUrl, { 'headers': headers })
  }
}
