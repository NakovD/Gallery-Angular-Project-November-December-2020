import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleImgPageComponent } from './single-img-page/single-img-page.component';
import { PicturesRouterModule } from './pictures.routing.module';
import { AllPicsPageComponent } from './all-pics-page/all-pics-page.component';
import { OtherImagesComponent } from './other-images/other-images.component';
import { RandomImageComponent } from './random-image/random-image.component';
import { EditPictureComponent } from './edit-picture/edit-picture.component';
import { AddPictureComponent } from './add-picture/add-picture.component';

@NgModule({
  declarations: [
    SingleImgPageComponent,
    AllPicsPageComponent,
    OtherImagesComponent,
    RandomImageComponent,
    AddPictureComponent,
    EditPictureComponent
  ],
  imports: [
    CommonModule,
    PicturesRouterModule,
  ],

  exports: [
    SingleImgPageComponent,
    AllPicsPageComponent,
    OtherImagesComponent,
    RandomImageComponent,
    EditPictureComponent
  ]
})
export class PicturesModule { }