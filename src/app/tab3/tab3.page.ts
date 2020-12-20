import { Component } from '@angular/core';
import { Genre, MovieDetails } from './../models/movie';
import { DataLocalService } from './../services/data-local.service';
import { MoviesService } from './../services/movies.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  filmes: MovieDetails[] = [];
  generos: Genre[] = [];

  favoritoPorGenero: any[] = [];

  constructor(private dataLocalService: DataLocalService, private movieService: MoviesService) {}

  async ionViewWillEnter() {
    this.filmes = await this.dataLocalService.carregarFavoritos();
    this.movieService.carregarGeneros().subscribe(res => {
      this.generos = res['genres'];
      this.porGenero(this.generos, this.filmes);
    });
  }

  porGenero(generos: Genre[], filmes: MovieDetails[]) {
    this.favoritoPorGenero = [];

    generos.forEach(genero => {
      this.favoritoPorGenero.push({
        genero: genero.name,
        filmes: filmes.filter(film => {
          return film.genres.find(genre => genre.id === genero.id);
        }),
      });
    });
  }
}
