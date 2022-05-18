import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie, MovieCredits, MovieImages, Review } from 'src/app/models/movie';
import { MoviesService } from '../../services/movies.service';
import { IMAGES_SIZES } from '../../constants/image-sizes';
import { first } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit, OnDestroy {
  movie: Movie | null = null;
  reviews: Review[] = [];
  movieImages: MovieImages | null = null;
  movieCredits: MovieCredits | null = null;

  imagesSizes = IMAGES_SIZES;
  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({ id }) => {
      this.getMovie(id);
      this.getMovieReviews(id);
      this.getMovieImages(id);
      this.getMovieCredits(id);
    });
  }
  ngOnDestroy(): void {}
  getMovie(id: string) {
    this.moviesService.getMovie(id).subscribe((movie) => {
      this.movie = movie;
    });
  }

  getMovieReviews(id: string) {
    this.moviesService.getMovieReviews(id).subscribe((reviews) => {
      this.reviews = reviews;
    });
  }

  getMovieImages(id: string) {
    this.moviesService.getMovieImages(id).subscribe((images) => {
      this.movieImages = images;
    });
  }

  getMovieCredits(id: string) {
    this.moviesService.getMovieCredits(id).subscribe((casts) => {
      this.movieCredits = casts;
    });
  }
}
