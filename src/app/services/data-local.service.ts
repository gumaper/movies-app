import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { MovieDetails } from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class DataLocalService {
  filmes: MovieDetails[] = [];

  constructor(private storage: Storage, private toastController: ToastController) {}

  favoritarFilme(filme: MovieDetails) {
    let existe = false;
    let mensagem = '';

    for (const film of this.filmes) {
      if (film.id === filme.id) {
        existe = true;
        break;
      }
    }

    if (existe) {
      this.filmes = this.filmes.filter(film => film.id !== filme.id);
      mensagem = 'Removido dos favoritos';
    } else {
      this.filmes.push(filme);
      mensagem = 'Adicionado aos favoritos';
    }

    this.presentToast(mensagem);
    this.storage.set('filmes', this.filmes);
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
    });

    toast.present();
  }
}
