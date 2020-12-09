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

  slideOpts = {
    slidesPerView: 3.3,
    freeMode: true,
    spacebetween: -5,
  };

  constructor(private movieService: MoviesService, private modalController: ModalController) {}

  ngOnInit() {
    this.movieService.getDetails(this.id).subscribe(res => (this.movie = res));

    this.movieService.getActors(this.id).subscribe(res => (this.actors = res.cast));
  }

  voltar() {
    this.modalController.dismiss();
  }
}
