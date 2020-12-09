import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {
  @Input() movies: Movie[] = [];

  slideOpts = {
    slidesPerView: 1.2,
    freeMode: true,
  };

  constructor() {}

  ngOnInit() {}
}
