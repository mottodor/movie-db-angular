import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Movie,
  MovieCredits,
  MovieDto,
  MovieImages,
  ReviewDto,
} from '../models/movie';
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

  getMovie(id: string) {
    return this.http.get<Movie>(
      `${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`
    );
  }

  getMovieImages(id: string) {
    return this.http.get<MovieImages>(
      `${this.baseUrl}/movie/${id}/images?api_key=${this.apiKey}`
    );
  }

  getMovieCredits(id: string) {
    return this.http.get<MovieCredits>(
      `${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`
    );
  }

  getMovieReviews(id: string) {
    return this.http
      .get<ReviewDto>(
        `${this.baseUrl}/movie/${id}/reviews?api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
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
