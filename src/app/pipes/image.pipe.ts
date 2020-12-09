import { environment } from './../../environments/environment';
import { Pipe, PipeTransform } from '@angular/core';

const url = environment.imgPath;

@Pipe({
  name: 'image',
})
export class ImagePipe implements PipeTransform {
  transform(img: string, size: string = 'w500'): unknown {
    if (!img) {
      return;
    }

    const imgUrl = `${url}/${size}/${img}`;
    return imgUrl;
  }
}
