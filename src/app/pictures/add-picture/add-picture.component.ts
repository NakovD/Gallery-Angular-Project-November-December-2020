import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { CloudinaryWidgetManager } from 'ngx-cloudinary-upload-widget';
import { PictureService } from '../../services/picture.service';

@Component({
  selector: 'app-add-picture',
  templateUrl: './add-picture.component.html',
  styleUrls: ['./add-picture.component.scss']
})

export class AddPictureComponent implements OnInit {

  addedLink = '';

  @ViewChild('f') form: NgForm;

  constructor(
    private manager: CloudinaryWidgetManager,
    private picService: PictureService) {
  }

  ngOnInit() {
    // console.log(this.picService.saveItem());
  }

  onOpen(event: Event): void {
    event.preventDefault();
    this.manager.open({ uploadPreset: 'ekeew3n2' }).subscribe((resp) => {
      if (resp.event === 'success') {
        console.log(resp.info.secure_url);
        var currentData = this.form.value;
        currentData.imgURL = resp.info.secure_url;
        this.form.setValue(currentData);
        this.addedLink = resp.info.secure_url;
      }
    }, (err) => {
      console.log('err', err);
    }, () => {
      console.log('complete');
    });
  }

  submitHandler(formValue): void {
    formValue.private = !!formValue.private;
    formValue.creator = 'Dido';
    formValue.likes = 0;
    formValue.views = 0;
    if (formValue.private) {
      this.picService.saveItem('private', formValue);
      return;
    }
    this.picService.saveItem('nonPrivate', formValue);
  }
}
