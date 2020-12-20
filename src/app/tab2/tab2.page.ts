import { DetalheComponent } from './../components/detalhe/detalhe.component';
import { MoviesService } from './../services/movies.service';
import { Component } from '@angular/core';
import { Movie } from '../models/movie';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  textoBuscar: string = '';
  exemplos: string[] = ['Spiderman', 'Avengers', 'O Senhor dos anéis'];
  filmes: Movie[] = [];
  loading: boolean;

  constructor(private movieService: MoviesService, private modalController: ModalController) {}

  buscar(event) {
    if (event.length === 0) {
      this.loading = false;
      this.filmes = [];
      return;
    }

    this.loading = true;

    this.movieService.buscarFilmes(event).subscribe(res => {
      this.filmes = res['results'];
      this.loading = false;
    });
  }

  async detalhe(id: string) {
    const modal = await this.modalController.create({
      component: DetalheComponent,
      componentProps: {
        id,
      },
    });

    modal.present();
  }
}
