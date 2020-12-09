import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePipe } from './image.pipe';
import { GroupPipe } from './group.pipe';

@NgModule({
  declarations: [ImagePipe, GroupPipe],
  exports: [ImagePipe, GroupPipe],
  imports: [CommonModule],
})
export class PipesModule {}
