import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie, MovieImages, Review } from 'src/app/models/movie';
import { MoviesService } from '../../services/movies.service';
import { IMAGES_SIZES } from '../../constants/image-sizes';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  movie: Movie | null = null;
  reviews: Review[] = [];
  movieImages: MovieImages | null = null;
  imagesSizes = IMAGES_SIZES;
  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.getMovie(id);
      this.getMovieReviews(id);
      this.getMovieImages(id);
    });
  }

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
}
