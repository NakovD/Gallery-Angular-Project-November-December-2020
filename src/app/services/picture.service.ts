import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  constructor(private window: Window) { }


  initCloudinaryWidget(): void {
    // console.log(this.window.cloudinary);
  }
}
