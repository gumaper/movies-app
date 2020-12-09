import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from './../pipes/pipes.module';
import { DetalheComponent } from './detalhe/detalhe.component';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { SlideshowParesComponent } from './slideshow-pares/slideshow-pares.component';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';

@NgModule({
  declarations: [SlideshowBackdropComponent, SlideshowPosterComponent, SlideshowParesComponent, DetalheComponent],
  exports: [SlideshowBackdropComponent, SlideshowPosterComponent, SlideshowParesComponent, DetalheComponent],
  imports: [CommonModule, IonicModule, PipesModule],
})
export class ComponentsModule {}
