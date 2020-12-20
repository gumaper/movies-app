import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Movie } from '../../models/movie';
import { DetalheComponent } from '../detalhe/detalhe.component';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
})
export class SlideshowParesComponent implements OnInit {
  @Input() movies: Movie[] = [];
  @Output() loadMoreMovies = new EventEmitter<any>();

  slideOpts = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -10,
  };

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  async showDetails(id: string) {
    const modal = await this.modalController.create({
      component: DetalheComponent,
      componentProps: {
        id,
      },
    });

    6;
  }

  loadMore() {
    this.loadMoreMovies.emit();
  }
}
