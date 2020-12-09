import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  constructor() {}

  ngOnInit() {}

  loadMore() {
    this.loadMoreMovies.emit();
  }
}
