import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  popularMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((res) => {
      this.popularMovies = res;
    });
    this.moviesService.getMovies('upcoming').subscribe((res) => {
      this.upcomingMovies = res;
    });
    this.moviesService.getMovies('top_rated').subscribe((res) => {
      this.topRatedMovies = res;
    });
  }
}
