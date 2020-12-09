import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from './../pipes/pipes.module';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { SlideshowParesComponent } from './slideshow-pares/slideshow-pares.component';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';

@NgModule({
  declarations: [SlideshowBackdropComponent, SlideshowPosterComponent, SlideshowParesComponent],
  exports: [SlideshowBackdropComponent, SlideshowPosterComponent, SlideshowParesComponent],
  imports: [CommonModule, IonicModule, PipesModule],
})
export class ComponentsModule {}
