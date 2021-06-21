import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

import { JokeResponse } from './joke';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'Dad Jokes';
  currentJoke: string = '';

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getNewJoke()
      .subscribe((jokeResponse: JokeResponse) => {
        this.currentJoke = jokeResponse.joke
      })
  }
}
