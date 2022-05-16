import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieDto } from '../models/movie';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  baseUrl = 'https://api.themoviedb.org/3';
  apiKey = '203fc58abdee389497e2331ece97037d';

  constructor(private http: HttpClient) {}

  getMovies(type: string = 'popular', count: number = 12) {
    return this.http
      .get<MovieDto>(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`)
      .pipe(
        switchMap((res) => {
          return of(res.results.slice(0, count));
        })
      );
  }

  searchMovies(page: number = 1) {
    return this.http
      .get<MovieDto>(
        `${this.baseUrl}/movie/popular?api_key=${this.apiKey}&page=${page}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }
}
