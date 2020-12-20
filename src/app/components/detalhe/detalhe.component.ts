import { DataLocalService } from './../../services/data-local.service';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Actor, Cast, MovieDetails } from '../../models/movie';
import { MoviesService } from './../../services/movies.service';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.scss'],
})
export class DetalheComponent implements OnInit {
  @Input() id: string;

  movie: MovieDetails = {};
  actors: Cast[] = [];
  overview: number = 150;
  existe: boolean;

  slideOpts = {
    slidesPerView: 3.3,
    freeMode: true,
    spacebetween: -5,
  };

  constructor(
    private movieService: MoviesService,
    private modalController: ModalController,
    private dataLocal: DataLocalService
  ) {}

  async ngOnInit() {
    this.existe = await this.dataLocal.existeFilme(this.id);

    this.movieService.getDetails(this.id).subscribe(res => (this.movie = res));

    this.movieService.getActors(this.id).subscribe(res => (this.actors = res.cast));
  }

  voltar() {
    this.modalController.dismiss();
  }

  favorito() {
    this.existe = !this.existe;
    this.dataLocal.favoritarFilme(this.movie);
  }
}
