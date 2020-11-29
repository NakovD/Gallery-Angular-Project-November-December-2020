import { Component, OnInit, ViewChild } from '@angular/core';
import { CloudinaryWidgetManager } from 'ngx-cloudinary-upload-widget';
import { NgForm, NgModel } from '@angular/forms';


@Component({
  selector: 'app-edit-picture',
  templateUrl: './edit-picture.component.html',
  styleUrls: ['./edit-picture.component.scss']
})

export class EditPictureComponent implements OnInit {

  addedLink = '';

  @ViewChild('f') form: NgForm;


  constructor(
    private manager: CloudinaryWidgetManager
  ) { }

  ngOnInit(): void {
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
