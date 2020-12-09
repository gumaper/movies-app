import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../services/movies.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(res => {
      console.log(res);

      this.movies = res.results;
    });
  }
}
