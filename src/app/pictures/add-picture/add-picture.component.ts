import { Component, OnInit } from '@angular/core';
import { CloudinaryWidgetManager } from 'ngx-cloudinary-upload-widget';

@Component({
  selector: 'app-add-picture',
  templateUrl: './add-picture.component.html',
  styleUrls: ['./add-picture.component.scss']
})

export class AddPictureComponent implements OnInit {

  constructor(private manager: CloudinaryWidgetManager) {
  }

  ngOnInit(): void {

  }

  onOpen(event: Event): void {
    event.preventDefault();
    this.manager.open({ uploadPreset: 'ekeew3n2' }).subscribe((resp) => {
      if (resp.event === 'success') {
        console.log(resp.info.secure_url);
      }
    }, (err) => {
      console.log('err', err);
    }, () => {
      console.log('complete');
    });
  }
}
