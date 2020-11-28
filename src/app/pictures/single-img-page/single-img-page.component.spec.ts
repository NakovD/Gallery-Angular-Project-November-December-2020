import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleImgPageComponent } from './single-img-page.component';

describe('SingleImgPageComponent', () => {
  let component: SingleImgPageComponent;
  let fixture: ComponentFixture<SingleImgPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleImgPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleImgPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
