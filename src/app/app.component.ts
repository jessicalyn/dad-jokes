import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import { JokeResponse } from './joke';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'Dad Jokes';
  currentJoke: string = '';
  jokes: Array<string> = [];

  constructor(private apiService: ApiService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.newJokeAPI()
  }

  newJokeAPI() {
    this.apiService.getNewJoke()
    .subscribe((jokeResponse: JokeResponse) => {
      this.jokes.unshift(jokeResponse.joke)
    },
    (error) => {
      this.snackBar.open(error.message, 'Dismiss', { duration: 3000 })
    })
  }

  jokeButton() {
    this.newJokeAPI()
  }
}
