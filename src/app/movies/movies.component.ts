import { Component, OnInit, Input } from '@angular/core';

import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  moviesShowing;

  constructor(
    private moviesservice: MoviesService
  ) { }

  ngOnInit() {
    this.moviesservice.getMovies()
                      .subscribe(
                        p => this.moviesShowing = p,
                        e => console.log(e),
                        () => console.log(this.moviesShowing)
                      );
  }

  joinArray(arr) {
    if (typeof arr == 'object' && arr.length > 0) {
      return arr.join(", ");
    } else {
      return arr;
    }
  }

}
