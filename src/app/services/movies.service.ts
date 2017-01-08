import { Injectable } from '@angular/core';

import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Movie } from '../models/movie';

@Injectable()
export class MoviesService {

  private url = 'http://data.tmsapi.com/v1.1/movies/showings?startDate=2017-01-07&zip=78701&api_key=7fbqc3huhn75gvd3wkg7hsaz';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getMovies() {
    let movies = this.http.get(this.url, {headers: this.getHeaders()})
                          .map(this.convertMovies)
    return movies;
  }

  convertMovies(response: Response) {
    console.log(response.json());
    return response.json().map(toMovie);
  }

  getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

}

function toMovie(d) {
  let movie = <Movie>({
    title: d.title,
    genres: d.genres,
    description: d.shortDescription,
    summary: d.longDescription,
    qualityRating: d.qualityRating ? d.qualityRating.value : "-1",
    cast: d.topCast,
    showtimes: sortShowtimes(d.showtimes)
  });
  return movie;
}

function joinArray(arr) {
  if (typeof arr == 'object' && arr.length > 0) {
    return arr.join(", ");
  } else {
    return arr;
  }
}

function sortShowtimes(showtimes) {
  let timeObj = {};
  let arr = [];
  for (let i = 0; i < showtimes.length; i++) {
    let id = showtimes[i].theatre.id;
    if (timeObj[id] && showtimes[i].dateTime) {
      timeObj[id].times.push(showtimes[i].dateTime);
    } else {
      timeObj[id] = {
        'name': showtimes[i].theatre.name,
        'times': [showtimes[i].dateTime]
      };
    }
  }
  for (var prop in timeObj) {
    arr.push(timeObj[prop]);
  }
  return arr;
}
