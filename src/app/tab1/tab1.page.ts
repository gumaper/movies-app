import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MoviesService } from './../services/movies.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  movies: Movie[] = [];
  features: Movie[] = [];

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(res => (this.movies = res.results));

    this.getFeatures();
  }

  loadMore() {
    this.getFeatures();
  }

  private getFeatures() {
    this.movieService.getFeatures().subscribe(res => {
      const arrTemp = [...this.features, ...res.results];

      this.features = arrTemp;
    });
  }
}
