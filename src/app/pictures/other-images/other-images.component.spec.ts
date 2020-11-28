import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherImagesComponent } from './other-images.component';

describe('OtherImagesComponent', () => {
  let component: OtherImagesComponent;
  let fixture: ComponentFixture<OtherImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
