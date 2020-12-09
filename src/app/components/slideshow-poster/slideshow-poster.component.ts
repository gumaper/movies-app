import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Movie } from '../../models/movie';
import { DetalheComponent } from '../detalhe/detalhe.component';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {
  @Input() movies: Movie[] = [];

  slideOpts = {
    slidesPerView: 3.3,
    freeMode: true,
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

    modal.present();
  }
}
