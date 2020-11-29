import { Component, OnChanges, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { CloudinaryWidgetManager } from 'ngx-cloudinary-upload-widget';

@Component({
  selector: 'app-add-picture',
  templateUrl: './add-picture.component.html',
  styleUrls: ['./add-picture.component.scss']
})

export class AddPictureComponent implements OnChanges {

  addedLink = '';

  @ViewChild('f') form: NgForm;

  constructor(
    private manager: CloudinaryWidgetManager) {
  }

  ngOnChanges() {
    // console.dir(this.form);
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
    console.log(formValue); 
  }
}
